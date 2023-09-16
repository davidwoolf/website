#  The anatomy of everyday UI: buttons

Buttons are a great example of hidden complexity. Functionality, style, and accessibility all contribute to an unseen iceberg floating beneath the surface. This article goes over the nuances of buttons and the issues that can arise when creating buttons in different contexts.

## Types of buttons

To get started, lets review what types of buttons are available on the web. A button can be of type `submit`, `reset`, or `button`. The `submit` type is the default state when the button is associated with a form or `type` is empty, missing or invalid. Here are some examples:

```html
<!-- defaults to `type="submit"` -->
<button>submit</button>

<!-- set to `type="button"` -->
<button type="button">click me</button>

<!-- set to `type="submit"` -->
<button type="submit">submit</button>

<!-- set to `type="reset"` -->
<button type="reset">reset</button>

<!-- invalid, default `type="submit"` -->
<button type="custom-type">submit</button>
```

### Submit buttons

If your button posts data to a server, using `type=submit` is recommended.

<iframe 
width="100%" 
src="/examples/button/submit"
title="Example and code for buttons of type submit"></iframe>

#### Form mapping

Submit buttons can include many form details normally applied to the `<form>` element via attributes:

| attribute       | description | 
| --------------- | ----------- | 
| **formaction**  | maps to the form element's `action` attribute |
| **formmethod**  | maps to the form element's `method` attribute |
| **formtarget**  | maps to the form element's `target` attribute |
| **formenctype** | maps to the form element's `enctype` attribute |

Providing these values to the submit button will override the value set on the form itself.

#### Mixed button use in forms

Because buttons default to `type="submit"`, use of buttons inside a form that should _not_ submit the form must explicitly include `type="button"` or `type="reset"`

#### Form validation

Only submit buttons can trigger a form's validation process. This is referred to as "constraint validation" in the [W3C working draft](https://www.w3.org/TR/2011/WD-html5-20110525/association-of-controls-and-forms.html#barred-from-constraint-validation). This means other buttons within a form will not inadvertently trigger form validation for child fields.

Additionally, the `formnovalidate` boolean attribute can be added to control whether form validation happens or not. However, if the button's parent `<form>` tag includes a `novalidate` attribute and the button includes `formnovalidate="false"`, validation will still be skipped. This can be confusing since other `form*` attributes on the submit button _will_ override the parent `<form>` value of the same type.

### Reset buttons

<iframe 
width="100%" 
src="/examples/button/reset"
title="Example and code for buttons of type reset"></iframe>

When using `type="reset"` in a form, you can clear form values without any Javascript. It's generally not recommended to do this, but is a built-in button type nonetheless.

## Content considerations

Buttons can contain any content considered [phrasing](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#phrasing_content) content, as long as it's also not [interactive](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#interactive_content) content (more on that below).

However, any tags such as headings and paragraphs placed inside of button will implicitly include the `role=presentation` attribute in accessibility contexts, which turns off their semantic meaning. Here's an example:

```html
<button>
  <!-- the role="presentation" attribute is added by the browser in accessibility contexts -->
  <p role="presentation">I am a paragraph</p>
</button>

<!-- this is the same as the above button -->
<button>
  <div>I am a paragraph</div>
</button>
```

### Interactive content

The interactive content list is a lot shorter than the phrasing list, so avoid placing these elements inside of your buttons.

| element | avoid |
| - | - |
| `<button>` | always |
| `<details>` | always |
| `<embed>` | always |
| `<iframe>` | always |
| `<label>` | always |
| `<select>` | always | 
| `<textarea>` | always |
| `<a>` | when using the `href` attribute |
| `<audio>` | when using the controls attribute |
| `<img>` | when using the `usemap` attribute |
| `<input>` | if `type` is not set to `hidden` |
| `<object>` | when using the `usemap` attribute |
| `<video>` | when using the `controls` attribute |

Of course, this never stopped anyone. But for semantics, accessibility,and compatibility, it's highly recommended to avoid placing interactive content within your buttons;

#### Internationalization

When applying styles like `writing-mode` and `text-orientation`, buttons will not rotate their text.  However, button text inside of the button will stack for vertical orientations. It is up to you to determine if you manually want to rotate buttons for differing reading directions or keep the built-in functionality.

<iframe 
width="100%" 
src="/examples/button/international"
title="Example and code for buttons in different language directions"></iframe>


## Styling

Buttons are configured with default styles based on the browser and operating system. This usually includes:

- background color
- border radius, weight, and color
- color
- height
- font family, size, and weight 
- padding

There are a few ways to remove this styling by default:

<iframe 
width="100%" 
src="/examples/button/default-style"
title="Example and code for different ways to reset button styling"></iframe>

### Using `all: unset`

The `all: unset` [css property](https://developer.mozilla.org/en-US/docs/Web/CSS/all) is a quick way to override an elements implied, explicitly, and inherited styles. For top level element styling, it's the recommended way of resetting button styles. For child elements, you can also use `all: inherit` or `all: initial` for slightly different reset values.

#### Reverting the removal of default UI

Using `all: unset` on a button eliminates ever getting those default styles back. Fortunately, you can use `all: revert` on a button to revert the resetting of all that default UI. This makes it safer to control styling at the top level, knowing there is an escape hatch if needed.

#### Fixing keyboard navigation

A major downside to resetting default button styles is the loss of keyboard focus. While you can add a custom outline, that requires creating a `button:focus` style declaration and you won't get the same style as other default outlines. Fortunately, as seen in the CSS tab in the example above, this can be solved by adding `outline: revert` _after_ the unset declaration:

```css
button {
  all: unset;
  outline: revert; /* this must come AFTER all: unset */
}
```

### Using `appearance: none`

While `appearance: none` has much better consistency in newer browsers, it doesn't actually reset all of the button styling (as seen in the example above). Only the core operating system specific styling is removed.

### Using manual overrides

For the most granular control, manually changing the values is always an option. It also prevents the removal of affordance states like keyboard focus.

### Affordance states

Buttons generally do not have any hover affordance, including changes in color, cursor, or size. This is based on the assumption that your buttons look like buttons! If they don't, then some hover indication would be useful, but note this won't solve any problems on touch devices. 

#### Keyboard and active state feedback

Buttons must include an outline when focused via a keyboard. This is best accomplished by ensuring default outline states persist using `outline: revert`, but if these styles need to be customized, the `:focus-visible` pseudo class will ensure keyboard focus styles show up without displaying them for regular mouse or touch actors:

```css
button:focus-visible {
  outline: 2px solid black;
}
```

Active states are more of a grey area, but can make web applications feel especially responsive. This will also ensure custom buttons behave similarly to native buttons, which makes for a more cohesive, well designed system:

```css
button:active {
  opacity: .8;
}
```

#### Pointer vs default cursor states

By default, buttons do not use `cursor: pointer` on mouse over. Contrast this to links, which do. The reasoning is that links generally have weak affordance when compared to buttons. However, if you are creating buttons that you consider have weak affordance (and the design cannot be changed), then adding `cursor: pointer` is recommended.

<figure>
  <blockquote>
    The cursor is a pointer that indicates a link
  </blockquote>
  <figcaption>
    The W3C defines pointer cursors explicitly in the their <cite><a href="https://drafts.csswg.org/css-ui-3/#valdef-cursor-pointer">CSS Basic User Interface Module Level 3 Specification</a></cite>
  </figcaption>
</figure>

### Buttons vs links

If your button looks and acts like a regular link, use an anchor tag. This will ensure the browser provides useful default behavior, actions look and perform normally when css or javascript are disabled, and your content is properly  indexed and rendered by things like search engines and accessibility devices.

## Accessibility

Due to the nature of buttons and their primary use in completing actions, ensuring proper accessibility markup is included is critical to creating great experiences for all actors. While the following mostly concerns non-form submission buttons, some information relating to titles and labels can be useful in all button contexts. 

### Aria attributes

Generally, `aria-label` is the most popular accessibility attribute, and can be useful for buttons that do not contain text (example: icon buttons).

#### Expandable content

If a button controls the visibility of other content, it should include the `aria-expanded` attribute with a `true` or `false` value.

#### Dialogs and other popups

Building on `aria-expanded`, if you are creating buttons that open up content considered to be a popup, there are two additional attributes that need to be added: `aria-haspopup` and `aria-controls`. The `aria-haspopup` attribute accepts one of the following values:

- dialog
- menu
- listbox
- tree
- grid
- true

The `aria-controls` value should be the `id` of the popup's top level element

<iframe 
width="100%" 
src="/examples/button/aria-expanded"
title="Example and code for using a button as a dialog"></iframe>

Generally, `dialog` is the value you want for `aria-haspopup`. Here are some examples of when to use each value:


| value | use case |
| - | - |
| dialog | Popups that take over the screen. Examples include alerts, confirmations, etc. |
| menu | Menu bars with dropdowns |
| listbox | Comboboxes design pattern with a list of items (one axis) |
| grid | Comboboxes design pattern with a grid of items (multi axis) |
| tree | Popup that shows a folder tree like structure |
| true | Exists for ARIA 1.0 backwards compatibility and is the same as using `menu` |

#### Toggle Buttons
To use buttons as a toggle, make sure to include `aria-pressed` with one of the following values:

| value | description |
| ----- | ----------- |
| true | actively pressed |
| false | not actively pressed | 
| mixed | partially pressed |


<iframe 
width="100%" 
src="/examples/button/aria-pressed"
title="Example and code for using a button as a toggle"></iframe>


_Note: This attribute won't actually toggle the button (that still requires Javascript), but its necessary to provide an accurate state of the button for all actors._

### Best user experience practices 

#### Avoid the title attribute

While the `title` attribute might seem like a good use case for providing additional information about a button, it is frequently inaccessible to screen readers and actors not using a mouse pointer. For buttons without a label, use the `aria-label` attribute.

#### Avoid disabled states
It is a common pattern to disable buttons until some other step is completed. _Stop doing this_, especially in forms. Disabled buttons are confusing to all actors, and can be especially frustrating for those using screen reader devices. Here are some common uses of disabled buttons and their alternatives:

| use case | alternative |
| - | - |
| invalid form fields | let them submit! use client and server side validation to give feedback on improper or missing values |
| no change since last save | allow clicking and provide a notification that there's nothing to update |
| not enough access | avoid using buttons and consider removing unactionable content entirely |
| sold out item | provide an error notification or replace the button entirely with a message that the item is sold out | 

### Using custom elements as buttons
If a non `<button>` element has to be used to act as a button (ie: it looks and acts like a regular button), it's important to add additional markup to communicate that quirk to actors and devices. Here is an example of a div being used as a button:

<iframe 
width="100%" 
src="/examples/button/role-button"
title="Example and code for using a div as a button"></iframe>

---
## References

<footer>

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
- https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#interactive_content
- https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html
- https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/
- https://www.w3.org/WAI/ARIA/apg/patterns/button/
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup
- https://www.digitala11y.com/aria-haspopup-properties/
- https://drafts.csswg.org/css-ui-3/#valdef-cursor-pointer

</footer>