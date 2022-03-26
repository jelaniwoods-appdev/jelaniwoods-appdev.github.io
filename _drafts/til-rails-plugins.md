---
layout: post
title: Getting started with Ruby Plugins
---

While working on LTI apps I suddenly needed to find a way to identify students without using their name. I also didn't want to use their `id` number because that's impersonal and hard for them to communicate to use who they are if there's something we need to correct a grading issue.

I want something like:
- Piazza's anonymous names (i.e. `Anonymous Beaker`)
- Gitpod workspace IDs (i.e. `amber-snake-gvf8cpswl3s`)
- Twitch clips (i.e. `AbstemiousArborealSquirrelBudStar-6kbbrw0cSLjdIeOg`)
- Heroku app names (i.e. `arcane-river-71280`)

I wanted to be able to do something like `has_secure_password` but instead it generated a random name/title for a user that was unique but most importantly _readable_. We would be able to show this name to the user and it would be more personal than saying "4131025" but also not their actual name which is hard to store with FERPA constraints.

Anyway looking up `has_secure_password` led me to find plugins somehow and I started writing one!

Rails has a [good guide](https://guides.rubyonrails.org/plugins.html#add-an-acts-as-method-to-active-record) on it of course, but I actually had to follow along to get it— reading through it wasn't enough.

Still deciding on a good name for the gem...

Some contenders:

- `has_readable_id`
- `has_readable_token`
- `has_anonymous_name`

The last one is pretty literal but I also wanted to infer that it's important that they are unique, which the first one establishes with `id`. The method name doesn't have to match the gem name I suppose.

- `risus` (smile in Latin)
- `jina` (name in Swahilia)
- (nickname in some other langage)

