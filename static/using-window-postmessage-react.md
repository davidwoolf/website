# Using window.postMessage with React

The `window.postMessage` function provides a simple way to talk to other window object. However, since the method uses an `addEventListener` call for receiving messages, it’s not obvious how you might use it within React.

_Note: this article assumes you understand the basics of how `postMessage` works. Please refer to the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) first if you haven’t used this method._

## Sending messages

Let’s start with sending a message to another window. For our example, we’re going to assume that window is an iframe loading another react app that you have access to. To get started, we’ll setup our component to load the iframe and attach a `ref`:

```tsx
import { useRef } from "react";

export function MyComponent() {
  const origin = "https://my-website.com";
  const ref = useRef<HTMLIFrameElement | undefined>();

  function sendMessage() {
    if(!ref.current) {
      return;
    }
    
    ref.current.contentWindow.postMessage("Hello iframe!", origin);
  }

  return(
    <button onClick={sendMessage}>send a message</button>

    <iframe 
    src="https://my-other-website.com"
    ref={ref}
    width="800px"
    height="600px" />
  )
}
```

- first we create a regular react component and render a button and iframe
- the iframe is loading another site we control and also has a ref attached, so we can get access to the DOM node
- we have an `origin` variable, which is the url of the site where we are instantiating `MyComponent`
- our button fires a `sendMessage` function which first checks if our ref exists (a recommended check when dealing with actual DOM nodes), and then runs `ref.current.contentWindow.postMessage`
- `contentWindow` is how you access the window of an iframe, so we’re requesting to post a message to the iframe window with the value of "Hello iframe!", along with our origin (so the iframe knows where the message came from)

Congrats, you have successfully setup a method to send messages into the void!

## Receiving messages

Now let’s see how our iframe can receive messages in React. Remember, the iframe is also a React app we control:

```tsx
import { useState } from "react";

export function MyIFrameComponent() {
  const parentOrigin = "https://my-website.com"; 
  const [message, setMessage] = useState<string>(); // string | undefined

  function onRecievedMessage(event: MessageEvent) {
    // check the message source origin as a security measure
    if (event.origin !== parentOrigin) {
      return;
    }

    // see notes on checking the data type
    setMessage(event.data);
  }

  useEffect(function () {
    window.addEventListener("message", onRecievedMessage);

    return function () {
      window.removeEventListener("message", onRecievedMessage);
    };
  });

  if(!message) {
    return(<p>no message has been received</p>);
  }

  return(<p>message received: {message}</p>);
}
```

- our iframe component stores the parent window origin (a value you should know and check if you are using the message listeners) and a local message state variable
- if there is no message (the mounted state), the component returns a default view. Otherwise it prints out the received message
- a `useEffect` function is used to listen for messages and clean up after itself when the effect is re-run or the component is unmounted (in this case, it’s during every render)
- The listener calls `onRecievedMessage` which ensures the origin of the message came from our parent window and, if so, updates the `message` state variable

### Keeping your listener updated

Our example above adds and removes event listeners on every stateful update in the component. This is the best way to ensure your listener function has accurate state, and while we aren’t using state variables in our example, that may not be the case in real life. 

It’s recommend that you add and remove your listeners on _every_ state change, but if you want to add additional optimizations, you can make wrap the listener’s callback in `useCallback` and pass any values that should trigger the function to update:

```tsx
// message is just an example of a componenet value that should update this callback
const listener = useCallback(onRecievedMessage, [message]);

useEffect(function () {
  window.addEventListener("message", listener);

  return function () {
    window.removeEventListener("message", listener);
  };
});
```

### Security

When you add `window.addEventListener("message", ...)`, you are opening yourself up to receive ALL messages sent from any parent window or other windows spawned from your application. For security purposes, it’s critical to lock down this functionality as much as possible:

- ensure you check the origin of the message and bail if it’s unknown
- additionally, manage a list of approved messages and check that the message received is one of them
- santize your messages to strip any unapproved values
- optionally: [lock down](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) where your application can be embedded

### Typing your messages

In the example above, we immediately call `setMessage(event.data)` since we know it’s a string, however you should ensure your `data` value is structured consistently and check the value. Here’s an example:

```ts
interface MessageData {
  type: "info" | "error",
  message: string;
}

function onRecievedMessage(event: MessageEvent) {
  // check the message source origin as a security measure
  if (event.origin !== parentOrigin) {
    return;
  }

  if(event.data?.type === "info") {
    if(typeof event.data?.message === "string") {
      setMessage(event.data.message);
    }
  }
}
```

This is a lot of `if` checks, but unfortunately you cannot ensure the structure of the data variable to a 100% confidence (unless you are the only person working on the code and you never make mistakes), so this guarding will save you a lot of headache in the future.

## Sending messages back

Now that we’ve created a one way message event system, wouldn’t it be nice to tell the parent window that we received their message? You can do that via the `event` parameter in `onRecievedMessage`:

```ts
function onRecievedMessage(event: MessageEvent) {
  // check the message source origin as a security measure
  if (event.origin !== parentOrigin) {
    return;
  }

  // see notes on checking the data type
  setMessage(event.data);

  // unfortunately event listeners are pretty confusingly typed
  // and you need to cast them regularly:
  (event.source as WindowProxy).postMessage("roger, roger", event.origin);
}
```

_Note: If you know you're in an iframe, you can also check that the `window` object has a parent and run `window.parent.postMessage(message, origin)`_

## Receiving messages back
In order to read and do something with these replies, we need to update the component in our parent window:

```tsx
import { useRef } from "react";

export function MyComponent() {
  const origin = "https://my-website.com";
  const childOrigin = "https://my-other-website.com";
  const ref = useRef<HTMLIFrameElement | undefined>();

  function onRecievedMessage(event: MessageEvent) {
    if (event.origin !== childOrigin) {
      return;
    }

    // do something with the received messages
  }

  function sendMessage() {
    if(!ref.current) {
      return;
    }
    
    ref.current.contentWindow.postMessage("Hello iframe!", origin);
  }

  useEffect(function () {
    window.addEventListener("message", onRecievedMessage);

    return function () {
      window.removeEventListener("message", onRecievedMessage);
    };
  });

  return(
    <button onClick={sendMessage}>send a message</button>

    <iframe 
    src={childOrigin}
    ref={ref}
    width="800px"
    height="600px" />
  )
}
```

And thats it! From here, you can do some interesting things like abstracting the above into a reusable hook that provides helper functions for sending messages, abstracting component cleanup, and updating stateful values like the origin (hint: the `useCallback` solution is useful for that).