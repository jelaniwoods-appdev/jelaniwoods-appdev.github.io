---
layout: post
title: gem cleanup
tags: ruby
---

This is a reminder to uninstall unused gems for each of the Ruby versions you have installed. Switch to the desired Ruby version and run

```bash
gem cleanup
```

This uninstalls unused versions of gems that are installed. I'm not sure _how_ Ruby determines which gems are not in-use, but it's handy because the different gem versions installed really add up. Run this command every few months. I don't remember the last time I did this but I freed up like 3+GB of storage today just cleaning up gems.
