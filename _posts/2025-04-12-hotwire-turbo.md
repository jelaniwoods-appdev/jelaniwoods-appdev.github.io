---
layout: post
title: Hotwire - Turbo Drive Intro
tags: hotwire turbo
---

_Turbo Drive_ accelerates links and form submissions by negating the need for full page reloads.

What does this mean?

In vague terms, Turbo Drive:
- monitors all `<a href>`s and form submissions to the host domain
- when detected, it prevents the Browser from performing it's usual action (following href or form action) and instead:
  - performs the action in the background with JavaScript
    - updating the browsers current URL with the History API
    - requesting the next page using the Fetch API
      - form submissions will follow the redirect
    - rendering the response
  - when rendering, Turbo Drive:
    - replaces the contents of `<body>` and merge the contents of `<head>`
    - this preserves the JS `window`, DOM objects, `<html>` across page navigations

---

## Page Navigation

**Page navigation** is a visit to a **location** (URL) with an **action** (one of the following: advance, replace, or restore).

A **visit** contains everything that happens from the "click" to the render of the response.
Things like:
- changing browser history
- issuing network request
- restoring a copy of the page from cache
- rendering the final response
- updating the scroll position

> The point of merging instead of replacing the `<head>` elements is that if `<title>` or `<meta>` tags change, say, they will be updated as expected, but if links to assets are the same, they won’t be touched and therefore the browser won’t process them again

### Application Visits

- have an **action** of <u>advance</u> or <u>replace</u>
  - this determines _how_ the browser history is updated
  - **advance** is the default **action** and pushes a new entry onto the browser history stack.
    - in native apps, the advance **action** looks like a new Activity view popping onto the previous view
  - **replace** does what it sounds like, it replaces the current history entry with the next **location**. that history **location** is discarded. need the `data-turbo-action="replace"` attribute or `Turbo.visit("/edit", { action: "replace" })`.
- initiated by clicking a Turbo Drive link or by executing `Turbo.visit(url)`
- always performs a network request and renders the response

> If possible, Turbo Drive will render a preview of the page from cache immediately after the visit starts. This improves the perceived speed of frequent navigation between the same pages.

- If the **location** of the visit has an anchor, **Turbo Drive will attempt to scroll to it**

### Restoration Visits

This type of visit is automatically performed when you navigate with the "Back" or "Forward" buttons in a Browser or the equivalent iOS and Android apps.

> If possible, Turbo Drive will render a copy of the page from cache without making a request. Otherwise, it will retrieve a fresh copy of the page over the network.

The scroll position of each page is saved before navigating away from a page and is restored during a restoration visit.

Do not attempt to manually make a restoration visit.

## Performing a visit with a different method

Links by default submit GET requests to the server. You can change that with the `data-turbo-method` attribute:

```html
<a href="/articles/54" data-turbo-method="delete">Delete the article</a>
```

> You should consider that for accessibility reasons, it’s better to use actual forms and buttons for anything that’s not a GET.
[— Performing a visit with a different method](https://turbo.hotwired.dev/handbook/drive#performing-visits-with-a-different-method)

**TODO**: I want a source to backup this claim. I know that `GET` requests are "safe" and should not modify a resource so maybe that also implies that anchor elements should _never_ modify resources? If so, then does that mean I _shouldn't_ use anchor elements for delete requests? That would mean I need to use a form to make delete requests and I don't think I've seen a form setup to perform a delete request in the wild before (at least, not in a Rails app).

## Confirmation

You can make a link/button require confirmation before performing the visit.

Add:
- `data-turbo-method`
- `data-turbo-confirm`

```html
<a href="/articles" data-turbo-method="get" data-turbo-confirm="Do you want to leave this page?">Back to articles</a>
<a href="/articles/54" data-turbo-method="delete" data-turbo-confirm="Are you sure you want to delete the article?">Delete the article</a>
```

The default behavior is to execute the browser's `confirm` function, but you can customize the behavior with `Turbo.config.forms.confirm = confirmMethod`.

## Turn Turbo off on specific links or forms

```html
<a href="/" data-turbo="false">Disabled</a>

<form action="/messages" method="post" data-turbo="false">
  <!-- … -->
</form>
```

This attribute transfers to children elements.

```html
<div data-turbo="false">
  <a href="/">Disabled</a>
  <form action="/messages" method="post">
    <!-- … -->
  </form>
</div>
```
both the anchor and form have turbo disabled.

```html
<div data-turbo="false">
  <a href="/" data-turbo="true">Enabled</a>
</div>
```

Inversly, if Turbo Drive is globally off

```js
import { Turbo } from "@hotwired/turbo-rails"
Turbo.session.drive = false
```

you can turn it on for specific links like this

```html
<a href="/" data-turbo="true" data-turbo-stream="true">Enabled</a>
```

## Form Submissions

> Turbo Drive handles form submissions in a manner similar to link clicks. The key difference is that form submissions can issue stateful requests using the HTTP POST method, **while link clicks only ever issue stateless HTTP GET requests**.
[— Form Submissions](https://turbo.hotwired.dev/handbook/drive#form-submissions)

**TODO** This is confusing because the article has several examples of anchor elements with `data-turbo-method="delete"`. Do they mean _outside of Turbo Drive_, form submissions use POST and links always use GET? That seems irrelavent to mention when comparing  how things are handled with Turbo Drive. It' would be clearer to say that "because forms submissions are stateful, Turbo Drive dispatches <u>events</u> at different points of the submission.

Events:
1. `turbo:submit-start`
2. `turbo:before-fetch-request`
3. `turbo:before-fetch-response`
4. `turbo:submit-end`

These events are emitted from the `<form>` and [bubble up](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events#event_bubbling) through the document.

You can use these events to customize the appearance of the form when a submission occurs.

### Redirecting

Turbo Drive expects a `303` redirect response code and will follow and use to update the page without a full reload.

Turbo Drive doesn't render from `2xx` response codes after a POST is because browser's have built in behavior that Turbo can't replicate or improve.

When the response code is `4xx` or `5xx`, validation error messages are displayed.

> If the form submission is a GET request, you may render the directly rendered response by giving the form a data-turbo-frame target. If you’d like the URL to update as part of the rendering also pass a data-turbo-action attribute.

### Streaming

> Servers may also respond to form submissions with a Turbo Streams message by sending the header Content-Type: text/vnd.turbo-stream.html followed by one or more `<turbo-stream>` elements in the response body. This lets you update multiple parts of the page without navigating

