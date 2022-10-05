---
layout: post
title: Adding "breakpoints" to help you debug a Ruby program
tags: ruby debug
---

# Adding "breakpoints" to help you debug a Ruby program

Sometimes when you are debugging a Ruby script, you want to do *more* than just print variables to debug. It'd be nice to pause the program at a particular moment and actually interact with all the variables that have been defined up until that point. Turns out, you can do this by adding breakpoints to your script.

> a breakpoint is an intentional stopping or pausing place in a program, put in place for debugging purposes.
> — [Wikipedia](https://en.wikipedia.org/wiki/Breakpoint)

Breakpoints can be added to your Ruby script using the `pry` library, which is a part of the standard Ruby library, but isn't automatically loaded. You can load the library with `require "pry"`.

### Pry basics

Let's say we have a program like this:

```
list_of_people = [
  { :name => "James", :age => 16 },
  { :name => "Yolanda", :age => 26 },
  { :name => "Mel", :age => 15 }
]

p "Enter an age and we'll tell you if we know a person who is that old:"

age_to_find = gets.chomp

list_of_people.each do |person|
  if person.fetch(:age) == age_to_find
    p "Found it!"
	end
end
```

Even when I enter an age that I _know_ should be found, like `16`, my program doesn't print `"Found it!"` like I expect.

![program-not-doing-what-i-want.png](/public/images/program-not-doing-what-i-want.png)

Using `pry`, I can use `binding.pry` to add a breakpoint before the `if` statement so I can interact more with the variables that were created.

> `binding.pry` will pause the runtime of the program and open an IRB console


```rb
list_of_people = [
  { :name => "James", :age => 16 },
  { :name => "Yolanda", :age => 26 },
  { :name => "Mel", :age => 15 }
]

p "Enter an age and we'll tell you if we know a person who is that old:"

age_to_find = gets.chomp

list_of_people.each do |person|
	binding.pry
  if person.fetch(:age) == age_to_find
    p "Found it!"
	end
end
```

Now when you run the program it doesn't complete—

![adding-binding-dot-pry.png](/public/images/adding-binding-dot-pry.png)

You can use an IRB console to interact with the code that has run so far.

Now I can access variables like `age_to_find` and `person` that were defined before the breakpoint to see why the condition for my `if` statement never evaluates to `true`.

![debugging-with-pry.gif](/public/images/debugging-with-pry.gif)

Ah, the ol' forget-to-convert-a-`String`-into-an-`Integer` error. Gets me everytime 🤦. Now I know to convert `age_to_find` to an `Integer`.

You can type `exit` when you're done to un-pause the programs execution.
