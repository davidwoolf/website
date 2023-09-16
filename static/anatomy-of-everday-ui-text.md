#  The anatomy of everyday UI: text

Text is a crucial part of any interface, be it a marketing site or an app. It's no wonder that HTML comes with an immense amount of tags, properties, and recommendations when it comes to handling text. Let's dive in!

## Semantics

HTML text elements are defined in the flow content category of elements<sup>[1](#citation-1)</sup>, but not all flow content elements would be considered mainly for text purposes (ex: the canvas element). To help, all text related elements are broken out into categories below.

### Headings

HTML includes `<h1>` through `<h6>`, each creating a block element. When using headings, ensure that you don't start with `<h1>` and proceed in order<sup>[2](#citation-2)</sup>. With the exception of `<h1>`, multiple headings can be used on a page (this article does just that to break up sections).

Do NOT skip levels when using heading levels. For example, skipping from `<h1>` to `<h3>` without including an `<h2>` is considered bad practice.

### Paragraphs

At their most basic, paragraphs encompass a block of text, just like in a word document. In reality, they can include links, images, break lines, and more. Use the `<p>` tag to create paragraph runs of text (anything longer than 1-3 words and any complete sentence).

Due to default type styles, built-in margins, and the block nature of the `<p>` tag, it can be tempting to use the `<span>` tag for non-article interfaces instead. This is not recommended for runs of text! Semantically, an interface is still surfacing different levels of content and removing paragraphs also removes context for actors that are not using traditional browsers to access your content.

### Lists

Lists are create for a collection of related information. The `<li>` tag can be used multiple times as the direct child of the `<ul>`, `<ol>`, and `<menu>` tags. The parent tag decision comes down to semantics:

| element | description |
| - | - |
| `<ul>` | use when the order is arbitrary |
| `<ol>` | use when the order is important |
| `<menu>` | use for menu items (buttons, links), technically the same as the `<ul>` element |

### Spans

The `<span>` tag is an inline version of the generic `<div>` block element, and while it is a useful text wrapping element, this tag should be used as a last resort if a more semantic text element isn't appropriate.

### Labels

The `<label>` tag should only be used in association with elements such as `<input>`, `<textarea>`, `<select>`, and other valid form elements. Labels are considered a caption<sup>[4](#citation-4)</sup> for these elements, and come with useful built-in functionality such as:

- focusing the associated element
- announcing the caption when a screen reader focuses the associated element

To get these benefits, you can add a `for` attribute that matches the associated element's `id` attribute value. However, a more elegant solution that nixes requiring a bunch of arbitrary ids is to make the associated element a child of the label (incidentally, this is also a great example of when to use the `<span>` tag to style the label text separately):

<iframe 
width="100%" 
src="/examples/ui-text/labels"
title="Example of using the label tag"></iframe>

### Links

- a

### Quotes

- blockquote
- q
- cite

### Miscellaneous

- pre
- time
- address

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

- text-indent
- fonts
- line clamp
- leading and tracking
- text overflow
- widows and orphans
- units (ch, vw, etc)
- Font pallet (new thing)

## Text, media, and interactive content

- figure element
- no script

### Images

### Audio

### Video

### Iframes

### Object

### Noscript



## Internationalization

- text-direction
- writing mode
- javascript methods for dates, money, and verbiage

### Bidirectional elements

## Accessibility

### Headings

Heading's `aria-role` attribute accepts `tab`, `presentation`, and `none`. The `presentation` and `none` values are the semantically the same<sup>[3](#citation-3)</sup>. The default role is `heading`, but if this is the desired value, omit the `aria-role` attribute entirely (see the full accessibility section below for using that role with *other* elements).

### Paragraph text

The `<p>` tag can accept any valid `aria-role` value. The implicit role is `paragraph`, which can be applied to other tags if they should act as a paragraph.

- color
- organization
- direction

### roles

- header role

---

## References

1. <span id="citation-1">https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#flow_content</span>
2. <span id="citation-2">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#usage_notes</span>
3. <span id="citation-3">https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/none_role</span>
4. <span id="citation-4">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label</span>