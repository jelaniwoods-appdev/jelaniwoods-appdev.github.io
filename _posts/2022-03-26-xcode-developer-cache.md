---
layout: post
title: XCode Developer Cache
tags: macos xcode
---

In the eternal journey of freeing up more memory, I noticed that the storage management settings on my laptop (MacOS 12) had a new section for "developer cache".

![xcode-cache.png](/public/images/xcode-cache.png)

<small style="font-size: 50%">(not actually my computer)</small>

Not only do I _not_ know what is does, it also was taking up a lotta space!

It turns out all of this "cache" is related to writing code for apple products which is not why I have xcode installed (I just need it for Ruby I think). So deleting the cache is safe to do, but it will keep coming back.

To prevent that from happening, you need to open xcode (which actually made me install something else 😠) and delete all of the simulators.

Menu > Window > Devices > Simulators 

then highlight and delete!

- [Ref 1](https://stackoverflow.com/questions/65537894/why-is-xcode-caches-so-huge)
- [Ref 2](https://stackoverflow.com/questions/10834817/xcode-simulator-how-to-remove-older-unneeded-devices/25991239#25991239)




