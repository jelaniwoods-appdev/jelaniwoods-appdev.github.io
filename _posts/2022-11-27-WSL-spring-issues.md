---
layout: post
title: WSL spring issues
tags: rails wsl
---


I've been working in a Rails 5 app recently and ran into some strange issues with the `rails console` that I didn't fully understand. Random queries or Ruby expressions would crash the console without allowing me to see the result. Some of these commands weren't super urgent, I could write the query and display the results on a webpage just fine. Other times I could perform the work in a different IRB, which _also_ worked. Eventually, after I was unable to run generators, I was annoyed enough to investigate, which was difficult.

> ```
[4] pry(main)> Octokit.repository?("appdev-projects/photogram-final")
/home/jello/.rvm/gems/ruby-2.7.3/gems/pry-0.10.4/lib/pry/exceptions.rb:29: warning: $SAFE will become a normal global variable in Ruby 3.0
/home/jello/.rvm/gems/ruby-2.7.3/gems/pry-0.10.4/lib/pry/exceptions.rb:29: warning: $SAFE will become a normal global variable in Ruby 3.0
Traceback (most recent call last):
/home/jello/.rvm/gems/ruby-2.7.3/gems/spring-2.0.2/lib/spring/application.rb:171:in `fork': cannot load such file -- yajl (LoadError)
/home/jello/.rvm/gems/ruby-2.7.3/gems/spring-2.0.2/lib/spring/application.rb:171:in `fork': undefined method `reject!' for nil:NilClass (NoMethodError)
/home/jello/.rvm/gems/ruby-2.7.3/gems/spring-2.0.2/lib/spring/application.rb:171:in `fork': undefined method `[]' for nil:NilClass (NoMethodError)
/home/jello/.rvm/gems/ruby-2.7.3/gems/spring-2.0.2/lib/spring/application.rb:171:in `fork': undefined method `reject!' for nil:NilClass (NoMethodError)
/home/jello/.rvm/gems/ruby-2.7.3/gems/spring-2.0.2/lib/spring/application.rb:171:in `fork': undefined method `reject!' for nil:NilClass (NoMethodError)
```

It appeared to be both a Spring issue and a Windows issue. The first few suggestions just said to stop spring with `spring stop` then run whatever command that was not working again. This didn't work for me (spring would auto-start). Updating spring didn't resolve the issue either, as I could only update so much on a Rails 5.0 app.

The only thing that _did_ work was disabling spring with an environment variable.

```bash
DISABLE_SPRING=1 rails console
```

Thanks to [this SO answer](https://stackoverflow.com/a/56241794/10481804).
