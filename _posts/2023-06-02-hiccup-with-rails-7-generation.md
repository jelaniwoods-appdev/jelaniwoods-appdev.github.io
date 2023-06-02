---
layout: post
title: Hiccup with Rails 7 Generation
tags: rails npm
---

The server won't work out of the box if you run the generate command with `npm` version < `7.1`.

In particular, with < `7.1`, you have to add the build commands to the `package.json` scripts yourself.

See [this SO answer](https://stackoverflow.com/a/70482087) for more details.

I had mistakenly generated an app with a npm v6.8 b/c I used `n` to switch NodeJS versions to debug a student assignment and _apparently_ never switched back.

I sure hope that hasn't been the cause of other issues I ran into 😅
