#  The anatomy of everyday UI: buttons

Buttons are a great example of hidden complexity. Functionality, style, and accessibility all contribute to a massive unseen iceberg simmering beneath the surface. This article goes over the nuances that can arise when creating buttons in different contexts.

## Button types

A button can be of type `submit`, `reset`, or `button`. The `submit` type is the default state when the button is associated with a form or `type` is empty, missing or invalid. Here are some examples:

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

<iframe 
width="100%" 
class="aspect-square md:aspect-video rounded-lg mt-4"
src="/examples/button"></iframe>

#### Form mapping
`@TODO: outline how these values can be overridden if applied (do they plug in missing values or actually override the form?)`

Submit buttons can include many form details normally applied to the `<form>` element via attributes:

| attribute       | description | 
| --------------- | ----------- | 
| **formaction**  | maps to the form element&rsquo;s `action` attribute |
| **formmethod**  | maps to the form element&rsquo;s `method` attribute |
| **formtarget**  | maps to the form element&rsquo;s `target` attribute |
| **formenctype** | maps to the form element&rsquo;s `enctype` attribute |



#### Mixed button use in forms

Because buttons default to `type="submit"`, use of buttons inside a form that should _not_ submit the form must explicitly include `type="button"` or `type="reset"`

#### Form validation

Only submit buttons can trigger a form&rsquo;s validation process. This is referred to as "constraint validation" in the [W3C working draft](https://www.w3.org/TR/2011/WD-html5-20110525/association-of-controls-and-forms.html#barred-from-constraint-validation). This means other buttons within a form will not inadvertently trigger form validation for child fields.

Additionally, the `formnovalidate` boolean attribute can be added to control whether form validation happens or not. However, if the button&rsquo;s parent `<form>` tag includes a `novalidate` attribute and the button includes `formnovalidate="false"`, validation will still be skipped.

### Reset buttons

<iframe 
width="100%" 
class="aspect-square md:aspect-video rounded-lg mt-4"
src="/examples/button"></iframe>

When using `type="reset"` in a form, you can clear form values without any Javascript.

### Other buttons


- title


### Buttons vs links

## Styling

```css
button {
  all: unset;
}
```

All: unset
### Hover, focus, active

### Touch vs mouse

### Variations
- when is a button a link

## Accessibility 

### Aria labels
### Pseudo buttons and use of roles
### Avoiding disabled states

## Buttons in Typescript
-  attributes


