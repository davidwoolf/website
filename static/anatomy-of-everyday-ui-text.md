#  The anatomy of everyday UI: text

Text is a crucial part of any interface, be it a marketing site or an app. It's no wonder that HTML comes with an immense amount of tags, properties, and recommendations when it comes to handling text. Let's dive in!

## Semantics and markup

HTML text elements are defined in the flow and phrasing element categories<sup>[1](#citation-1)</sup>, and can be categorized as semantic or markup.

### Headings

HTML includes `<h1>` through `<h6>`, each creating a block element. When using headings, ensure that you start with `<h1>` and proceed in order<sup>[2](#citation-2)</sup> (with the exception of `<h1>`, multiple headings can be used on a page). It's important to not skip heading levels; skipping from `<h1>` to `<h3>` without including an `<h2>` is considered bad practice.

### Paragraphs vs. spans

The `<p>` tag encompasses a run of text (anything longer than 1-3 words and any complete sentence) and can include links, images, break lines, and more. In contrast, the `<span>` tag is an inline version of the generic `<div>` block element, and while it is a useful text wrapping element, this tag should be used as a last resort if a more semantic text element isn't appropriate.

### Lists

The `<li>` tag can be used multiple times as the direct child of the `<ul>`, `<ol>`, and `<menu>` tags. The parent tag decision comes down to semantics:

| element | description |
| - | - |
| `<ul>` | use when the order is arbitrary |
| `<ol>` | use when the order is important |
| `<menu>` | use for menu items (buttons, links), technically the same as the `<ul>` element |

### Links

Linking to external sites, internal pages, page sections, and more can be accomplished with the `<a>` tag. If you are using `<a href="#">` in combination with Javascript, opt for the `<button type="button">` syntax, covered in [Anatomy of Everyday UI: buttons](/articles/anatomy-of-everday-ui-button).

### Labels

The `<label>` tag should only be used in association with elements such as `<input>`, `<textarea>`, `<select>`, and other valid form elements. Labels are considered a caption<sup>[4](#citation-4)</sup> for these elements, and come with useful built-in functionality such as:

- focusing the associated element
- announcing the caption when a screen reader focuses the associated element

To get these benefits, you can add a `for` attribute that matches the associated element's `id` attribute value. However, a more elegant solution that nixes requiring a bunch of id attributes is to make the associated element a child of the label (incidentally, this is also a great example of when to use the `<span>` tag to style the label text separately):

<iframe 
width="100%" 
src="/examples/ui-text/labels"
title="Example of using the label tag"></iframe>

### Quotes

The `<blockquote>` element is for block level quotes, while the `<q>` element is for inline quotations within a run of text. Both can include a cite attribute that links to the original. It is also common to use the `<cite>` element in a block level quote for more traditional citation information like the author and general source.

<iframe 
width="100%" 
src="/examples/ui-text/quotes"
title="Example of creating quotes with the blockquote, q, and cite tags"></iframe>

### Miscellaneous

- pre
- time
- address
- dl

### Markup elements

- abbr
- del
- ins
- em
- strong
- b
- i
- code
- mark
- ruby
- samp
- sup
- sub
- small
- s
- data
- dfn
- hr
- u
- var

### Blocks

- aside
- article
- nav
- menu
- details and summary

### Additional elements

- wbr vs br
- bdo and bdi
- kbd



## Styling

### Avoiding semantic styling

While the section preceding this one went over text elements and how to use them, it's important to stress that the decision of which element to use should never be based on appearance. Even though default styling provided by browsers often does match element importance with styling, this will not always translate to a custom design.

Plan your markup semantically first, and then apply styling based on the design. Good design will usually follow semantics and great design will take those rules and break them when appropriate.

### Loading typefaces 

When loading custom typefaces via [`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face), the `font-display` css property can be used to control how text displays while your typefaces load. It can be tempting to use `font-display: block` to give your typefaces time to load before displaying text but this is incredibly hostile to actors on low-powered devices and long-latency networks. 

By default `font-display: auto` is used, which generally acts the same as the swap value, however it's recommended to explicitly declare `font-display: swap`. This will let super fast networks load font files without flashing unstyled text but will otherwise show all text in a fallback typeface during site load.

In addition, ensure your `font-family` declarations fallback to the correct generic system value to limit the affects of the change (this includes `serif`, `sans-serif`, `monospace`, `cursive` and [more](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#values))

### Text spacing

#### Line height

Line height (also known as "leading"), controls the space between lines of text. When setting the `line-height` of a block of text, the default `normal` value equates to about 120% of the text size. That means 12.0pt text will have a line height of about 14.4pt (we're using `pt` here to avoid unit confusion).

While you can use static units like `px` or `rem` as value for `line-height`, a much more flexible solution is to use no units at all! When setting the value to unitless number, it acts a multiplier for the computed font size of the text it's applied to. Importantly, this is not the same for other units like `em` or `%`.<sup>[5](#citation-5)</sup>

<iframe 
width="100%" 
src="/examples/ui-text/line-height"
title="Example of setting line heights with various units"></iframe>

#### Letter spacing

Letter spacing (also known as "tracking") uniformly updates the space between letters, either in a positive (more space) or negative (less space) direction. Using `em` units will act as a multiplier on the computed font size, which is highly recommended to avoid issues with sizes changing based on the actor's preferred base size. However, the values can be extremely sensitive.

*Note: this value can be inconsistent when using justified text.*

<iframe 
width="100%" 
src="/examples/ui-text/letter-spacing"
title="Example of setting letter spacing on text"></iframe>

Tools like Figma Dev Mode only show these values in `px` or `rem` units, which aren't local multiplier units. Fortunately you can quickly compute the `em` value by taking the `letter-spacing` value and dividing it by the `font-size` value:

```css
/* before transformation */
.pixels {
  font-size: 12px;
  letter-spacing: .3px;
}

.rems {
  font-size: .75rem;
  letter-spacing: 0.01875rem;
}

/* after */
.pixels {
  font-size: 12px;
  letter-spacing: .025em; /* .3 / 12 = 0.025 */
}

.rems {
  font-size: .75rem;
  letter-spacing: .025em; /* .01875 / .75 = 0.025 */
}
```

#### Word spacing

Word spacing acts just like letter spacing, but in between words not individual letters. 

#### Watching out for non-text element spacing

When setting line height, letter spacing, or word spacing on an element that contains styled `inline` or `inline-block` elements, be careful to note that their spacing will be affected as well.<sup>[6](#citation-6)</sup>

<iframe 
width="100%" 
src="/examples/ui-text/inline-spacing"
title="Example of setting word and letter spacing on inline block elements"></iframe>

### Text overflow

Handling text overflowing logic can be a little complicated. The `text-overflow` property does not handle clipping text, it only controls what should display *when* text is clipped. By default, this value is `clip`, but all modern browsers also support `ellipsis`. Actually clipping text is dependent on your use case.

#### Overflow: hidden

Using overflow values can be very tricky, and requires some element coordination. When using `overflow: hidden`, the value must be applied to the text itself, the text cannot span multiple lines, and the css property `white-space: nowrap` must also be included.

<iframe 
width="100%" 
src="/examples/ui-text/text-overflow/overflow-hidden"
title="Example of overflow: hidden with different text-overflow settings"></iframe>

#### Line clamp

The `-webkit-line-clamp` property (supported in all major browsers) can be used for clipping text based on the number of lines, which comes with its own problems:

- the `text-overflow` property does nothing here, ellipsis is always used
- applying padding to the text with the line clamp value can create artifacts on clipped lines
- `display: -webkit-box` and `-webkit-box-orient: vertical` are also both required
- text clipping is not based on any parent container dimensions, only the text's number of lines

<iframe 
width="100%" 
src="/examples/ui-text/text-overflow/line-clamp"
title="Example of overflow: hidden with different text-overflow settings"></iframe>

### Type based units
- units (ch, vw, etc)

- fonts
- Font pallet (new thing)

### Controlling text details
- widows and orphans
- text-indent
- ::first-letter, ::first-line

## Text, media, and interactive content

- figure element

### Images

### Audio

### Video

### Iframes

### Object

### Noscript



## Internationalization

- text-direction
- writing mode

### Local date formatting

### Currency formatting

### 
- javascript methods for dates, money, and verbiage

### Bidirectional elements

## Accessibility

### Headings

Heading's `aria-role` attribute accepts `tab`, `presentation`, and `none`. The `presentation` and `none` values are the semantically the same<sup>[3](#citation-3)</sup>. The default role is `heading`, but if this is the desired value, omit the `aria-role` attribute entirely (see the full accessibility section below for using that role with *other* elements).

### Paragraph text

The `<p>` tag can accept any valid `aria-role` value. The implicit role is `paragraph`, which can be applied to other tags if they should act as a paragraph.

### Color contrast

### Organization of text


- direction??

---

## References

1. <span id="citation-1">https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories</span>
2. <span id="citation-2">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#usage_notes</span>
3. <span id="citation-3">https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/none_role</span>
4. <span id="citation-4">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label</span>
5. <span id="citation-5">https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#prefer_unitless_numbers_for_line-height_values</span>
6. <span id="citation-6">https://css-tricks.com/almanac/properties/w/word-spacing/</span>