---
layout: post
title: Redirecting stderr to stdout
tags: bash
---

Normally if you run a file from inside another script, it can be tricky to get get error message sometimes.

For example:
```rb
# test.rb



p("{}"
```

---

```rb
3.2.1 :001 > `ruby test.rb`
test.rb: --> test.rb
Unmatched `(', missing `)' ?          
> 4  p("{}"                           
test.rb:4: syntax error, unexpected end-of-input, expecting ')' (SyntaxError)
p("{}"                                
      ^                               
                                      
 => ""                                
3.2.1 :002 > 
```

The error message still is displayed in the shell, but it's missing from the return value, which is the important thing if we're running this inside another script/app.

The output is being displayed through `stderr` and not `stdout`.

There's a trick you can do to merge `stderr` _into_ `stdout`.

`ruby test.rb 2>&1` which looks a little silly.

but now you get the error in the return value:

```rb
3.2.1 :004 > `ruby test.rb 2>&1`
 => "test.rb: --> test.rb\nUnmatched `(', missing `)' ?\n> 4  p(\"{}\"\ntest.rb:4: syntax error, unexpected end-of-input, expecting ')' (SyntaxError)\np(\"{}\"\n      ^\n\n" 
```

A breakdown of how it works:

>File descriptor 1 is the standard output (`stdout`).
>
>File descriptor 2 is the standard error (`stderr`).
>
>At first, `2>1` may look like a good way to redirect `stderr` to `stdout`. However, it will actually be interpreted as "redirect `stderr` to a file named `1`".
>
>`&` indicates that what follows and precedes is a file descriptor, and not a filename. Thus, we use `2>&1`. Consider `>&` to be a redirect merger operator.

- [SO answer](https://stackoverflow.com/a/818284)
