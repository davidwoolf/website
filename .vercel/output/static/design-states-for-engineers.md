# Design states for engineers (and designers)

When a design is handed off to engineering, its not always clear how a static design should be translated to an interactive interface with flexible dimensions, environment dependent modes, and conflicting device controls. 

Fortunately, modern design tools provide powerful prototyping and dynamic layout features which can eliminate hours of back and forth between design and engineering. However, engineers are not always aware of these features or the various design states that must be accounted for when implementing a design. 

Let's review these states and how a tool such as Figma can help you understand a designer's intent.

## Immutable states

Immutable states are the most straight forward design state, and should be familiar to anyone that has to translate a design into a website or app. Components like images and text will most likely by changed (perhaps even constantly) but their design attributes such as size and aspect ratio are generally immutable because, while their properties may be affect by another design state, they are not changing _themselves_.

## Binary states 

Binary states boil down to `true|false`. These elements can be `on|off`, `enabled|disabled`, `visible|hidden`, etc. A great example is a toggle switch. Both an off and an on state have to be implemented in the interface. A trickier example is a notification badge: while the badge can be as simple as `visible` or `hidden`, it may also use color to denote system degradation or show a number for unread items. Still, the badge itself is a binary state. 

Why? _Because design states can contain other states_. Therefore, the visibility of a notification badge on a parent element is a binary state, but the badge itself may have various other states.

Design tools like Figma make binary state discovery extremely easy when the element is interactive: just click the element when in prototyping mode (this is assuming your designer has set up the prototype). However, when the binary state is dependent on something like an API response (see: notification badges), the states should be provided in the static design file.

## Array states

After binary states come states that conform to the same pattern, but with an _n_ number of permutations. Taking our notification badge example, the badge could have an `1-n` number contained inside, or an `n` number of colors to denote the type of message (green for ok, red for errors, etc).

Array states should usually be explicitly defined by the designer, but prototyping tools in Figma can also help engineers understand all of the permutations by use of component variants or simply laying everything out in the static comp.


## Device states
Device states are where things get really tricky, due to the fact that they aren't controlled by the design or engineer teams. 

One of the most well known examples is responsive design. Outside of iOS apps, the dimensions of the device showing your interface is virtually unknowable. This doesn't mean we're helpless though: assuming the designer used flexible frames and dynamic layout tools, testing different device sizes is as simple as resizing the artboards!

But let's be real: implementing device states isn't just about making sure your content doesn't jettison off screen on an iPhone. Think of every device and environment the implemented design might show up on:

- touch devices
- other languages
- screen readers
- televisions
- printers
- dark modes
- a fridge (seriously)

How does a team of designers and engineers handle this extreme complexity? Fortunately most platforms already handle the bulk of this for you (e.g. touch events, aria attributes, pseudo states, media queries, logical properties, etc). Still, it's important that everyone involved is aware of these states and considers them both constraints _and opportunities_.

### A note about accessibility

Accessible design has a very specific meaning that ensures sites and apps are useable by everyone. Therefore, while this section refers to device states, I like to think of them as _accessible states_. An accessible design is pleasant to use on any device, by any person. This includes specific details like alternative text, but also keyboard-only support, dynamic text sizing, dark mode, and low-speed networks.

Importantly, this is where engineering's part of the design process _really_ shines, as a static design means nothing if it can't be properly used by people everywhere.

## Dynamic states
Dynamic states are one of the trickier states to communicate between designers and engineers, and I have personally found this to be where most of the back and forth communication and testing happens. It's easy to classify everything not covered so far as a "dynamic state", but there are specific questions you can answer to decide for yourself:

- does the state transition in a complex way based on some event?
- would a state you normally classify as binary or array cause a change to the design outside of the component itself?
- is the end result unknowable due to factors outside of your control?

If you answered yes to any of the above, then the state can be defined as dynamic. Another way to think of dynamic states is: states within states, or states with many steps. Let's go over each question above with an example.

### Does the state transition in a complex way based on some event

This is basically an obtuse way to define animations and transitions. For example, should a header stay fixed to the top when scrolling? Should text animate in on page load? These may be simple to answer questions, but they are questions that you might not have an obvious answer from looking at the design.

### Would a state you normally classify as binary or _nth_ cause a change to the design outside of the component itself

You may be presented with a task requirement that states: "Allow filtering of a grid of items and show the filters at the top. Also allow the filters to be removed by clicking an X". Immediately you are filled with questions:

- How should the items filter? 
- Is there an animation? 
- Do they show up in a "view more items" section at the bottom or hide completely? 
- Should they remain hidden if someone leaves the page and comes back?
- Do the filters at the top have margin and padding that will affect the vertical rythym of the page?

### Is the end result unknowable due to factors outside of your control

A great example of this is network based content that may have various states that need to be accounted for:

- loading
- success
- error
- retrying
- loading more
- animating state transitions

### Avoiding late stage changes and duplicative conversations

Once you know you're dealing with a dynamic state, it's important to research the design and product requirements to ensure all permutations are accounted for. If they aren't, then work should immediately stop until they are figured out (sometimes this is very quick, especially if the problem has been solved before and can be used as a reference or even be re-used). 

Dynamic states are one of the best examples for why prototyping tools are important. It's easier to show a dynamic state like an animation instead of describing it.

## Conclusion

Today's devices and tools make implementing designs complex but manageable with help from both the system and design tools. However, like always there is a necessity to communicate between design and engineering. Hopefully the explanations in this article make it easier to spot issues in a design and describe the problem to your team. 