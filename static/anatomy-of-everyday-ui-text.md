#  The anatomy of everyday UI: text

Text is a crucial part of any interface, be it a marketing site or an app. It's no wonder that HTML comes with an immense amount of tags, properties, and recommendations when it comes to handling text. This article focuses on the details of utilizing text in an app interface.

## Headings

HTML includes `<h1>` through `<h6>`, each creating a block element. When using headings, avoid multiple `<h1>` elements. It's also important to not skip heading levels in distinctive sections of content; skipping from `<h1>` to `<h3>` without including an `<h2>` is considered bad practice.<sup>[x](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#usage_notes)</sup>

Because headings are an important semantic device for understanding the structure of a page view, consider how you want to compose app content holistically and give yourself the tools to control this structure within reusable components.

For example, if you have a view with a top level `<h1>` title, multiple sections marked with `<h2>` descriptors, and then a series of cards, it wouldn't make sense to bake the `<h2>` element into the card component structure. Instead, you would need to use `<h3>` for each card title (if titles are necessary of course). There are a couple ways to control this:

- create composable components where you pass children as elements during instantiation
- add prop arguments for heading levels

Generally I recommend composable architectures, especially if the main goal of the component is to abstract styling rather than stateful functionality. This mirrors static HTML element structure and encourages more atomic component systems. At a certain low level however, you may need to go the prop argument route.

## Paragraphs and spans

The `<p>` element encompasses a run of text (anything longer than 1-3 words and any complete sentence) and can include links, images, break lines, and more. In contrast, the `<span>` element is an inline version of the generic `<div>` block element and while it is a useful text wrapping element, it should be used as a last resort if a more semantic text element isn't appropriate.

The `<span>` element is however, perfect for when you need to style a block of text within a paragraph but it has no other semantic meaning that would warrant using `<em>`, `<strong>`, etc.

## Lists

In interfaces, lists are commonly used for grouping links in a navigation block. When the order isn't necessarily important, individual list items (which use the `<li>` element), can be wrapped in a `<ul>` or (if each item is interactive) a `<menu>` element.

The core difference between `<menu>` and `<nav>` is that `<menu>` is NOT for site navigation. It's a little reductive, but the rule of thumb is to use `<menu>` when grouping a list of buttons and `<nav>` when grouping a list of links.

## Links and buttons

Linking to other content (whether external, internal, or somewhere else on the page) can be accomplished with the `<a>` tag. If you are using `<a href="#">` in combination with JavaScript to perform non-navigation based actions, opt for the `<button>` element, covered in [Anatomy of Everyday UI: buttons](/articles/anatomy-of-everday-ui-button).

## Labels

The `<label>` tag should only be used in association with elements such as `<input>`, `<textarea>`, `<select>`, and other valid form elements. Labels are considered a caption<sup>[x](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)</sup> for these elements, and come with useful built-in functionality such as:

- focusing the associated element
- announcing the caption when a screen reader focuses the associated element

To get these benefits, you can add a `for` attribute that matches the associated element's `id` attribute value. However, a more elegant solution that nixes requiring a bunch of id attributes is to make the associated element a child of the label (incidentally, this is also a great example of when to use the `<span>` tag to style the label text separately):

<iframe 
loading="lazy"
width="100%" 
src="/examples/ui-text/labels"
title="Example of using the label tag"></iframe>

## Addresses and dates

Use the `<address>` element for any content related to physical or digital addresses. Address details can be grouped together and include informative labeling inside of the element directly.

The `<time>` element should only be used for dates, either as a datetime or duration. Use the `datetime` attribute for machine readable values, which can help browsers present actions like "save to calendar".

## Emphasis and importance

The `<em>` element is for stress emphasis in a sentence structure while the `<strong>` element is for text that is of significant importance. Because of this, it's probably rare that you would want to use `<em>` in interfaces for non-literary text. A good example of using `<strong>` is with banner notifications:

```html
<p>
  <strong>Warning!</strong> This action will delete all of your content.
</p>
```

### A note about `<i>` and `<b>`

In general, avoid `<b>`, it doesn't provide useful semantics around important or emphasis. In the past, it has been common to use `<i>` for inserting icons into interfaces. This can be a useful way to handle icons, **if done correctly**. 

While outside of the scope of this article, the gist is that, because `<i>` is primarily for calling out a block of text as separate<sup>[x](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i)</sup>, you could insert semantically meaningful icons with this element and [font ligatures](https://alistapart.com/article/the-era-of-symbol-fonts/). The only caveat is if you are showing icons and a text label with the same wording, as this would duplicate the value.

In my opinion, this use of `<i>` is more clever than actually scalable (while still remaining semantic), but it is a valid way to handle icons (note: this does not include implementations that use a random single character for an icon, that is not semantic or helpful as a fallback).



## Units and sizing

### Avoiding pixel units

Using pixel based units for sizing is generally discouraged as they are considered inflexible compared to other units. They are also a lie. Considering that most computers and mobile devices now use 2x or 3x resolutions that up-sample values, setting your type to `14px` is never really 14 physical pixels.

However, design doesn't completely exist in the abstract, and even the recommended `rem` unit is calculated from a base pixel size on the `body` tag (`1rem` defaults to 16 virtual pixels). I would still recommend avoiding pixel values and using `rem` and `em` units for font size values as you can provide text resizing by just applying a higher or lower body pixel font size.

Additionally, there are a multitude of units and options available for bounding box sizes that are much more beneficial for handling a variety of devices and screen ratios.

### Relative and absolute units

When using `rem` units, all sizes are calculated from the base font size of the `body` tag. This defaults to `16px` (which again, is NOT 16 actual, physical pixels), so setting your type to `2rem` is equal to `32px` and so on. Applying `rem` sizes to parent elements and then additionally to children elements will not reset the scale, it will always be multiplied from the `body` element's value.

Contrast this to `em` units, which are based on the inherited font size and will continue increasing child sizes based on the parent. 90% of the time, this will only serve to cause headaches, but it can be really useful when you want a subset of text to relationally be a percentage size of the rest of the text (say a caption):

<iframe 
loading="lazy"
width="100%" 
src="/examples/ui-text/size/em"
title="Example of setting em units on parent and child elements"></iframe>

When using `em` like this, be careful to set a minimum value so you don't get unreadable text. This can be accomplished (confusingly) with the `max` css function (you can see this is applied above in the css tab):

```css
/* max will always take the biggest value from a list of options */
.property {
  font-size: max(.625rem, .75em);
}
```

### Units based on typographic character width

For line length, use `ch` units! These units directly tie the optical size of the text to the max length before breaking to a new line. Multi-line text is usually recommended to break between 45-75 characters.<sup>[x](https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/#the-ideal-measure-45-to-75-characters)</sup>

```css
.article {
  max-width: 75ch;
  width: 100%;
}
```

## Styling

While the section preceding this one went over text elements and how to use them, it's important to stress that the decision of which element to use should never be based on appearance. Even though default styling provided by browsers often does match element importance with styling, this will not always translate to a custom design.

Plan your markup semantically first, and then apply styling based on the design. Good design will usually follow semantics and great design will take those rules and break them when appropriate.

### Line height

Line height (also known as "leading"), controls the space between lines of text. When setting the `line-height` of a block of text, the default `normal` value equates to about 120% of the text size. That means 12.0pt text will have a line height of about 14.4pt (we're using `pt` here to avoid unit confusion).

While you can use static units like `px` or `rem` as value for `line-height`, a much more flexible solution is to use no units at all! When setting the value to unitless number, it acts a multiplier for the computed font size of the text it's applied to. Importantly, this is not the same for other units like `em` or `%`.<sup>[x](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#prefer_unitless_numbers_for_line-height_values)</sup>

<iframe 
loading="lazy"
width="100%" 
src="/examples/ui-text/line-height"
title="Example of setting line heights with various units"></iframe>

### Letter spacing

Letter spacing (also known as "tracking") uniformly updates the space between letters, either in a positive (more space) or negative (less space) direction. Using `em` units will act as a multiplier on the computed font size, which is highly recommended to avoid issues with sizes changing based on the actor's preferred base size. However, the values can be extremely sensitive.

*Note: this value can be inconsistent when using justified text.*

<iframe 
loading="lazy"
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

### Word spacing

Word spacing acts just like letter spacing, but in between words not individual letters. 

### Watching out for non-text element spacing

When setting line height, letter spacing, or word spacing on an element that contains styled `inline` or `inline-block` elements, be careful to note that their spacing will be affected as well.<sup>[x](https://css-tricks.com/almanac/properties/w/word-spacing/)</sup>

<iframe 
loading="lazy"
width="100%" 
src="/examples/ui-text/inline-spacing"
title="Example of setting word and letter spacing on inline block elements"></iframe>

### Text overflow

Handling text overflowing logic can be a little complicated. The `text-overflow` property does not handle clipping text, it only controls what should display *when* text is clipped. By default, this value is `clip`, but all modern browsers also support `ellipsis`. Actually clipping text is dependent on your use case.

#### Overflow: hidden

Using overflow values can be very tricky, and requires some element coordination. When using `overflow: hidden`, the value must be applied to the text itself, the text cannot span multiple lines, and the css property `white-space: nowrap` must also be included.

<iframe 
loading="lazy"
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
loading="lazy"
width="100%" 
src="/examples/ui-text/text-overflow/line-clamp"
title="Example of overflow: hidden with different text-overflow settings"></iframe>

## Custom typography

### Loading typefaces 

When loading custom typefaces via [`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face), the `font-display` css property can be used to control how text displays while your typefaces load. It can be tempting to use `font-display: block` to give your typefaces time to load before displaying text but this is incredibly hostile to actors on low-powered devices and long-latency networks. 

By default `font-display: auto` is used, which generally acts the same as the swap value, however it's recommended to explicitly declare `font-display: swap`. This will let super fast networks load font files without flashing unstyled text but will otherwise show all text in a fallback typeface during site load.

### Ensure proper fallbacks

When using custom fonts, ensure your `font-family` declarations fallback to the correct generic system value to limit the affects of the change (this includes `serif`, `sans-serif`, `monospace`, `cursive` and [more](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#values)).

## Proper text encoding

The [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#charset) state that <q>If the [charset] attribute is present [...] UTF-8 is the only valid encoding for HTML5 documents</q>. However, the exclusion of this value means a default character encoding *other* than UTF-8 may be used, which can create encoding issues for special characters. Therefore, ensure your site includes the following at the top of the `<head>` tag:

```html
<meta charset="utf-8">
```

## Internationalization

### Text direction

Avoid using the `direction` css property<sup>[x](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)</sup> and opt for the `dir` attribute instead. This can be applied to the entire document via the `<html>` element or on individual elements (for example, when displaying part of the text in another language).

#### Orientation and writing mode

Use a combination of the `text-orientation` and `writing-mode` css properties to control how text is laid out. This is useful for languages that are read vertically and from right to left. The `text-orientation` property only works in vertical modes<sup>[x](https://drafts.csswg.org/css-writing-modes/#text-orientation)</sup>, while the `writing-mode` property can be used to set text in vertical mode for that very use case.

#### Bidirectional text

If you want to purposefully change the direction of a block of text, use the `<bdo>` tag in combination with the `dir` attribute.<sup>[x](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo)</sup> If you want to wrap a block of text whose direction you don't know at run time (for example, pulling data that includes text in multiple writing modes), use the `<bdi>` tag, with no attributes required.<sup>[x](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi)</sup>

## Accessibility

### Images

Ensure proper alt text is provided for `<img>` elements via the `alt` attribute. Avoid using the `title` attribute as a substitute for `alt` and never create both with the same value. The `title` attribute is at most a hint to the actor, while `alt` is a textual replacement for the image itself.

Additionally, add the `role="img"` value to `<img>` element when loading SVG images. This fixes a bug in VoiceOver, which, at the time of this article's publication, is still value.<sup>[x](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#identifying_svg_as_an_image)</sup>

### Iframes

When embedding `<iframe>` content, use the `title` attribute to describe the embedded content. This can be thought of in a similar fashion to the `<title>` element used in the `<head>` of your site.

### Color and readability

To ensure proper text readability, use a minimum contrast ratio of `4.5:1` for body text under 18pt and `3:1` for larger text over 18pt. This conforms to AA accessibility standards<sup>[x](https://webaim.org/articles/contrast/#sc143)</sup>, which is the general standard for non-government applications.<sup>[x](https://www.w3.org/WAI/WCAG2AA-Conformance)</sup>
