---
layout: post
title: Stimulus Reference
tags: rails stimulus js
---

Stimulus is part of Hotwire, an alternative approach of building modern web apps. Turbo supposedly takes care of 80% of the usual JS required, while Stimulus should be able to handle the majority of other custom use cases.

## The Goals of Stimulus

Unlike most other JavaScript frameworks, Stimulus, takes an HTML centered approach to handling **state** and page updates. The idea is to manipulate your _existing_ HTML, instead of say, making an AJAX request and parsing JSON to determine which elements on the page should re-render. You use Stimulus to "sprinkle" interactive behavior into static/server-rendered HTML pages.

> <u>Stimulus is concerned with manipulating this existing HTML document</u>. Sometimes that means adding a CSS class that hides an element or animates it or highlights it. Sometimes it means rearranging elements in groupings. Sometimes it means manipulating the content of an element, like when we transform UTC times that can be cached into local times that can be displayed.

> There are cases where you’d want Stimulus to create new DOM elements, and you’re definitely free to do that. We might even add some sugar to make it easier in the future. But it’s the minority use case. **The focus is on manipulating, not creating elements**.

## The Dos and Don'ts

### Do

- make your controllers small, concise, and re-usable.
- combine controllers to create more complex behavior and interactions.
- use **as much as possible** with Turbo.

### Don't

- make controllers too specific (with naming or functionality).
- try to recreate your entire frontend with Stimulus (i.e. creating "view components").
- fall into old habits of using JQuery.

## Basics

The important things I forget often. Otherwise, look at the official reference for details.

Mainly be aware of:
- Controllers
- Actions
- Targets

### Controllers

Controllers are the JavaScript classes that house all the actual behavior of the HTML.

- custom controllers need to be [registered manually](https://stimulus.hotwired.dev/reference/controllers#registering-controllers-manually) or [configured to eager load automatically](https://github.com/hotwired/stimulus-rails#with-import-map)

### Actions

Actions are how you handle DOM Events in your controllers. Specifically, you can specify which DOM Event will execute a specified function inside your Stimulus controller.

For example:

```html
<div data-controller="gallery">
  <button data-action="click->gallery#next">…</button>
</div>
```

```js
// controllers/gallery_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  next(event) {
    // …
  }
}
```

- You can have [multiple actions](https://stimulus.hotwired.dev/reference/actions#multiple-actions) tied to one HTML element.
- Prefer naming action methods based on what will happen when they’re called (i.e. `click->profile#showDialog`)
- **Actions can have [parameters](https://stimulus.hotwired.dev/reference/actions#action-parameters)** that are be passed from the submitter element. 
  - They use the format `data-[identifier]-[param-name]-param`.
  - Values will be typecast, so you can pass Arrays and Hashes.
  - Retrieve them in a controller with `event.params`.

### Targets

Targets let you reference important elements by name.
- Often, these targets are specific elements that need to be manipulated some way.
  - i.e. elements that you expect to have content loaded later.
- <u>Avoid using targets as a replacement for "action arguments"</u>.
- Elements can have mutltiple targets and targets can be shared by multiple controllers.


- [Stimulus Handbook](https://stimulus.hotwired.dev/reference/controllers)
- [Writing Better Stimulus Controllers](https://boringrails.com/articles/better-stimulus-controllers/)
