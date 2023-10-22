---
layout: post
title: Bootstrap Modal with Dynamic Content
tags: bootstrap stimulus
---

For context, I was working on a feature to to allow users to preview the associated thread (in a modal) of each notification from the notifications index page. While the notifications were paginated, the post threads could be _very_ large. The naive approach of just having a modal for each notification was very ineffecient when threads were large and made the page load slow.

To increase the performace, I wanted to render just one modal and have the content change depending on which notification was clicked.

This was a little tricky to get timings right for when and what content to load, but this article helped me a lot.

[https://philonrails.substack.com/p/loading-dynamic-content-on-opening](https://philonrails.substack.com/p/loading-dynamic-content-on-opening
)

Eventually I added an auto-scroll to the exact part of the thread that was related to the notification to.
