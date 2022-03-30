---
layout: post
title: Pushing gems to rubygems
tags: ruby gem
---

In your gem project run:

```bash
rake build
```

to create `pkg/<gem-name>-0.1.0.gem`

Then run 

```bash
gem push pkg/<gem-name>-0.1.0.gem
```

This should ask you to sign in, if you're not already. Sign in credentials are stored in `~/.gem/credentials`. So remove that if you want to "sign out" of rubygems.
