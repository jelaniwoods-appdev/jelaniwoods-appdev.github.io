---
layout: post
title: When should you use CSS floats?
tags: css
---

I know people say never to use floats anymore, but _surely_ they can still be used for whatever they were originally intended for... right?

> The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).
>[— MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/float)

Seems unique enough. I don't think flexbox or CSS grid (the modern layout techniques) do a better job at this.

> The float property was introduced to allow web developers to implement layouts involving an image floating inside a column of text, with the text wrapping around the left or right of it. The kind of thing you might get in a newspaper layout.


So the original purpose was to position images within text in a few specific ways.

![css-float-docs-demo.gif](/public/images/css-float-docs-demo.gif)

```html
<div>
  <div>Float me</div>
  As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
</div>
```

More depth on floats [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats).
