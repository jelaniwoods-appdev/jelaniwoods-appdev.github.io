c

I hadn't really thought about what `bundle exec` does until someone asked me. My assumption was that it make sure the command only uses the gem from the current folder's `Gemfile` instead of any other versions of the gem that might be installed on the computer.

This is true, but I didn't explain it very well at the time so this is just a reminder to me.

There's a good in-depth post about this [here](https://jdanger.com/what-does-bundle-exec-do.html).

Another good short summary is:

> `bundle exec` allows us to run an executable script in the specific context of the project’s bundle. Upon running the above command, `bundle exec` will run the executable script for rake version specified in project’s Gemfile thus avoiding any conflicts with other versions of rake installed system-wide.

from [this post](https://dailyjustnow.com/en/why-is-bundle-exec-needed-17394/).
