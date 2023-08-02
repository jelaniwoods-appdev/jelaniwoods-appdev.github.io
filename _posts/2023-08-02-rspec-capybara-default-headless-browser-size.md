---
layout: post
title: Beware— Default Headless Browser Size
tags: rspec ruby capybara
---

Ran into a hard-to-debug error where a nav link was unable to be clicked on because it wasn't "visible". Printing the HTML of the page and turning off headless proved to me that the link was both present _and_ visible, so I was confused for a while.

Apparently, the default browser size for headless chrome is Something like `800, 600` which almost certainly will activate a responsive layout that could cause some elements (like navbar links) to become "invisible".

The browser has a wider default size in _non-headless_ mode, so it was not immediately obvious to me that an element could be invisible when the browser is headless.

This makes me think that it should be best practice to always specify a default browser size for tests 🤔
