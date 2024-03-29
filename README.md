# Today I Learned

A basic template repository to get you started writing about things you learn each day. Think of them as notes to your future self to save yourself time when you have to re-do the same task again in the future. Write yourself a cheat sheet - which blog posts did you follow, which things did you have to figure out that were not obvious from the blog posts, etc.

[Here's a recent example of mine (that I am soon going to move to GitHub Pages).](https://dev.to/raghubetina/building-a-multi-step-form-in-rails-with-wicked-l0g) As you can see, it's not a work of art; don't put pressure on yourself that the writing needs to be Pulitzer-worthy. Again, it's mostly for your future self; and the act of writing helps solidify learning. And you never know, you might end up in Ruby Weekly.


## Locally test

Run

```bash
bundle exec jekyll serve
```

For drafts, add `--drafts`

> jekyll 3.9.0 | Error:  no implicit conversion of Hash into Integer

Happens usually with Ruby 3+. If you downgrade to Ruby 2.7 it should work.
