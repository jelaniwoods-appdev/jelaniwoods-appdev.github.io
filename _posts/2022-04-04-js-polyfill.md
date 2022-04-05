---
layout: post
title: JS Polyfill
tags: javascript html
---

I was just trying to do a simple loop over a list of elements in JS

```js
var inputs = document.getElementsByTagName('input');
inputs.forEach(function(input, index) {
    // ...
});
```

but suprisingly to me I got an error:

```
VM52:1 Uncaught TypeError: inputs.forEach is not a function
    at <anonymous>:1:8
```

`inputs` is an `HTMLCollection`, which _is_ array-like object so it should be iterable— right?

Well it _is_— but in modern browsers, you need to use a `for` loop:

```js
for (const i of inputs) {
  // ...
}
```

Alternatively you can convert it to an Array with `Array.from()`.

- [Read more here](https://stackoverflow.com/a/49956281)

This SO answer made me curious what a "polyfill" was so I looked it up.

<figure>
    <blockquote cite="https://en.wikipedia.org/wiki/Polyfill_(programming)">
        <p>In web development, a polyfill is code that implements a feature on web browsers that do not support the feature. Most often, it refers to a JavaScript library that implements an HTML5 or CSS web standard, either an established standard (supported by some browsers) on older browsers, or a proposed standard (not supported by any browsers) on existing browsers. </p>
    </blockquote>
    <figcaption>—Wikipedia, <cite><a href="https://en.wikipedia.org/wiki/Polyfill_(programming)">Polyfill (programming)</a></cite></figcaption>
</figure>
