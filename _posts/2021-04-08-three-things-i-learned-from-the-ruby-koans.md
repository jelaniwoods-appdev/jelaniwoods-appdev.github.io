---
layout: post
title: Three things I learned from The Ruby Koans
---

Here are (at least) three things I learned from [The Ruby Koans](http://rubykoans.com/):


## Blocks

I knew how to use blocks for methods that require them (like `Array#each`) but I didn't have a grasp on how they worked outside of methods that I was familiar with. 

> Ruby blocks are little **anonymous functions** that can be passed into methods

Being told that Blocks are just as anonymous functions really helped it click— since I'm familiar with JS anonymous functions. I think the Block-syntax with pipes was just throwing me off 😅

## Lambdas

Lamdas are a little weird because they're basically just Blocks that have been defined and haven't been run yet. You run them with `.call`.

```ruby
say_something = -> { puts "This is a lambda" }
say_something.call
```


## Procs

~~Procs are basically just lambdas~~. Lambdas are actually just a special kind of Proc.

```ruby
proc = Proc.new { |arg| puts arg }
```

(meaning all three of these things are basically the same thing)

The differences are:
- procs don't throw errors for missing arguments
- procs `return` from the current context

```ruby
# Should work
my_lambda = -> { return 1 }
puts "Lambda result: #{my_lambda.call}"

# Should raise exception
my_proc = Proc.new { return 1 }
puts "Proc result: #{my_proc.call}"
```

> If the proc was inside a method, then calling return would be equivalent to returning from that method.
[*— RubyGuides*](https://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/)
