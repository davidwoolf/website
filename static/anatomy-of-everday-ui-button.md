#  The anatomy of everyday UI: buttons

Buttons are a great example of hidden complexity. Functionality, style, and accessibility all contribute to a massive unseen iceberg simmering beneath the surface. However, once you’ve fully implemented a button, it becomes a repetitive process easily abstracted into a library.

A topic like HTML buttons has been covered extensively, so rather than contribute an article to basic setup, I want to go over the nuance and gotchas that can arise when creating buttons for different situations.

## Structure and attributes

The basics of a button are well known if you work with HTML:

<iframe 
width="100%" 
class="aspect-square md:aspect-video rounded-lg mt-4"
src="/examples/button"></iframe>

```html
<button>click me</button>
```

- title
- type
  - submit
  - button
- Role

Buttons vs links

## Styling

```css
button {
  all: unset;
}
```
All: unset
Hover, focus, active

Touch vs mouse

Variations
- when is a button a link

## Accessibility 

Aria labels
Avoiding disabled states

Buttons in Typescript
-  attributes


