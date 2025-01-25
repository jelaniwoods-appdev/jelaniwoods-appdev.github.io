---
layout: post
title: Dragon Ruby notes
tags: ruby game-dev
---


## Getting Setup

Getting started was as simple as downloading the toolkit, extracting and `cd`ing into the folder and running `./dragonruby` to run the test game.

The folder contains the docs, guides, examples, and assets.

Think about the game like this:
- the game is all going to happen under one function
- the function runs 60 times (ticks/frames) a second
- the function tells the computer what to draw each time


## Basics

"the function" looks like this:

```rb
def tick args
  args.outputs.labels << [580, 400, 'Hello World!']
end
```

`args` is a big object you can use to manage the game state. It has special objects like `outputs` that have dedicated uses. `outputs` is for drawing output!

> `args.state` is a place you can hang your own data. It's an open data structure that allows you to define properties that are arbitrarily nested. You don't need to define any kind of class.


### User input

Get info from `args.inputs`...

```rb
  if args.inputs.keyboard.left
    args.state.player_rect.x -= MOVE_UNIT
  elsif args.inputs.keyboard.right
    args.state.player_rect.x += MOVE_UNIT
  end

  if args.inputs.keyboard.down
    args.state.player_rect.y -= MOVE_UNIT
  elsif args.inputs.keyboard.up
    args.state.player_rect.y += MOVE_UNIT
  end
```
