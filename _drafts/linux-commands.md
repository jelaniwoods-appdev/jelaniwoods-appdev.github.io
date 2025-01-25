---
layout: post
title: Linux Commands I Forget
tags: linux
---

### Append to $PATH and add to .bashrc

```bash
echo 'export PATH="$PWD/bin:$PATH"' >> ~/.bashrc
```

### Extract .tag.gz

```bash
tar -xvzf <filename>
```

- `f`: this must be the last flag of the command, and the tar file must be immediately after. It tells tar the name and path of the compressed file.
- `z`: tells tar to decompress the archive using gzip
- `x`: tar can collect files or extract them. x does the latter.
- `v`: makes tar talk a lot. Verbose output shows you all the files being extracted.

Long form may be easier to remember:

```bash
tar --extract --file="<filename>" --gzip --verbose
```

https://askubuntu.com/a/25348
