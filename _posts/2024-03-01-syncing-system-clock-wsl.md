---
layout: post
title: WSL - Syncing system clock
tags: wsl
---

WSL2 clock sometimes becomes out of sync with native windows clock. This can apparently happen after resuming from sleep/hibernate but not always.

To re-sync run:

```bash
sudo hwclock -s
```
