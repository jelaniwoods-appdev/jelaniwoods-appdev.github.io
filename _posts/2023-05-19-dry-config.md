---
layout: post
title: DRY with dry_config gem
tags: ruby
---

I was curious about how you could make gems have configuration settings (like from an initializer). I finally had a use case when writing [`appdev_support`](https://github.com/firstdraft/appdev_support).

My goal was to be able to configure the gem like this:

```rb
# config/initializers/appdev_support.rb
AppdevSupport.config do |config|
  config.action_dispatch = true;
  config.active_record   = true;
end
```

and have these settings determine which class of method overrides should be loaded.

Previously, I was defining `attr_writer`s like this 

```rb
module AppdevSupport
  class << self
    attr_writer :active_record, :action_dispatch

    def action_dispatch
      @action_dispatch || true
    end

    def active_record
      @active_record || true
    end
  end
  # ...
end
```

Note to self, I still don't really understand what `class << self` does or how it works (I think it makes a Singleton somehow?) but with that change I could dynamically load files by calling a class method:

```rb
   def self.init
    if @active_record
      load "appdev_support/active_record/delegation.rb"
      load "appdev_support/active_record/attribute_methods.rb"
      load "appdev_support/active_record/relation/to_s.rb"
    end
    if @action_dispatch
      load "appdev_support/action_dispatch/request/session/fetch.rb"
      load "appdev_support/action_dispatch/request/session/store.rb"
      load "appdev_support/action_dispatch/cookies/cookie_jar/fetch.rb"
      load "appdev_support/action_dispatch/cookies/cookie_jar/store.rb"
    end
  end
```

I wanted to make adding additional config settings easier to do and more seemless (like not having to run `AppdevSupport.init` if you just wanted the defaults).

TIL about the `dry-configurable` gem, which has been around for a while!

It really cleans up the "defining an instance variable/`attr_writer`" process and makes it a lot easier to define nested structures too!

```rb
require 'dry-configurable'

module App
  extend Dry::Configurable

  setting :api_url
  setting :repository, reader: true do
    # Can pass a default value
    setting :type, default: :local
    setting :encryption do
      setting :cipher, default: 'aes-256-cbc'
    end
  end
end

App.config.api_url = 'https://jelani.dev'
App.config.api_url # => 'https://jelani.dev'
```

This let me start to refactor the gem:

```rb
module AppdevSupport
  extend Dry::Configurable
  setting :active_record,   default: true
  setting :action_dispatch, default: true
  setting :pryrc,           default: :minimal
  # ...
end
```

While this was more concise and flexible, I still wasn't able to get the defaults to load without calling `AppdevSupport.init` like before.

In searching for answers I found a post that taught me more responsible ways to define Monkeypatches and I incorperated some of those techniques into the gem as well.

- [Configure anything with dry-configurable](https://hanamimastery.com/episodes/5-configure-anything-with-dry-configurable)
- [Use dry-configurable gem to add thread-safe configuration behaviour to your Ruby classes](https://cloudolife.com/2021/02/13/Programming-Language/Ruby/Awesome-Ruby-Gem/Use-dry-configurable-gem-to-add-thread-safe-configuration-behaviour-to-your-Ruby-classes/)
- [Responsible Monkeypatching in Ruby](https://blog.appsignal.com/2021/08/24/responsible-monkeypatching-in-ruby.html)
