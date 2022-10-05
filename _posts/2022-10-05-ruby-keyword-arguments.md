---
layout: post
title: Ruby Keyword Arguments
tags: ruby
---

I rarely define methods that use them so I often forget. There are a few different ways to define keyword arguments in a method.

> A method can be defined with positional arguments, keyword arguments (which are defined and called using the `:` syntax) or have no arguments at all.

```rb
class Calculator
  # Positional arguments
  def add(num1, num2)
    return num1 + num2 # Explicit return
  end

  # Keyword arguments
  def multiply(num1:, num2:)
    num1 * num2 # Implicit return
  end
end
```

You can also now pass the arguments in whatever order with keyword arguments.

```rb
c = Calculator.new
c.multiply(num2: 3, num1: 9)
# => 27
```

Which brings us to first way to define keyword arguments, by adding the `:` to the end.

### Approach #1

```rb
def hello(message:)
  puts "hello " + message
end

hello # => ArgumentError: missing keyword: message
hello(message: 'world') # => 'hello world'
```

You can also define default values for these keywords like this:

```rb
def hello(message: "everyone")
  puts "hello " + message
end

hello # => 'hello everyone'
hello(message: 'world') # => 'hello everyone'
```

Just having the `:` at the end with no default value always looked incorrect to me (which is probably why I forget about it), since it feels pretty rare for Ruby to determine the "type" of something by the _ending_ character instead of the starting character, but it's probably a hold over from C or something.  

### Approach #2

```rb
def grab_bag(**keyword_arguments)
  p keyword_arguments
end

grab_bag(letter: "m", some_number: 31)
# => {:letter=>"m", :some_number=>31}
```

 If you want to accept keyword arguments, in principle you should always use `def foo(k: default)` or `def foo(k:)` or `def foo(**kwargs)`
 

#### Ruby 3 Changes

In Ruby 3.0, you must explicitly specify which arguments are keywords (using the double splat) instead of relying on Ruby's implicit last-argument-is-a-hash thing.

> In Ruby 2, keyword arguments can be treated as the last positional Hash argument and a last positional Hash argument can be treated as keyword arguments.
> - [ruby-lang.org](https://www.ruby-lang.org/en/news/2019/12/12/separation-of-positional-and-keyword-arguments-in-ruby-3-0/)

Basically, in situations like this

```rb
def one_keyword(keyword: 1)
  p keyword
end

hash = { keyword: 42 }
```

and you want to pass `hash` as an argument to `one_keyword`, you **can't** do this anymore:

```rb
one_keyword(hash)
# => wrong number of arguments (given 1, expected 0) (ArgumentError)
```

In Ruby 3+ this will throw an Argument error. Now, the syntax is to pass the argument with the double splat like this:

```rb
one_keyword(**hash)
=> 42
```

The other situation when you have a method with both types of arguments:

```rb
def mixed_arguments(positional, **keywords)
  p positional
end
```

If `positional` is supposed to be a `Hash`, you have to explicitly declare it as such.

This **won't** work:

```rb
mixed_arguments(word: 42)
```

This **will** work:

```rb
mixed_arguments({word: 42})
```


[More reading](https://thoughtbot.com/blog/ruby-2-keyword-arguments)
