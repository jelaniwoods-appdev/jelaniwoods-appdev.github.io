---
layout: post
title: Converting Fonts⁚ TTC to TTF
tags: fonts
---

I like the font [Iosevka](https://typeof.net/Iosevka/) but I can only download it as a `TTC` and often want to use it on the web, which requires a `TTF`.

You can convert it with Font Forge CLI easily


#### Install

```bash
sudo apt install fontforge
```
#### Usage

```bash
fontforge -lang=ff -c 'Open($1); Generate($2);' <YOUR_FONT>.ttc <YOUR_FONT>.ttf
```

It does output a warning, but I haven't had issues using the font so it's probably fine ¯\\_(ツ)_/¯
