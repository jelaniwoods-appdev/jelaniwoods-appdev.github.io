---
layout: post
title: Truncate HTML without cutting off HTML tags
tags: rails
---

I ran into an issue trying to truncate a users post in a notification email. Posts can contain markdown and thus HTML so it was difficult to style the truncated text because if the post contained HTML I could cut off a closing tag which would mess up the formatting of the rest of the email.

I wanted a way to truncate just the text part of the String and not the HTML tags.

The only gem I found that worked was [Truncato](https://github.com/jorgemanrubia/truncato). See this [SO question](https://stackoverflow.com/questions/4320160/is-there-an-html-safe-truncate-method-in-rails).

In the end, I created a view helper that also sanitized the HTML so I could create an "allowlist" of tags that I could keep in the output. Truncato has effectively a "denylist" option, but it felt like that could get too large.

 It looked like this:

```rb
def truncated_sanitized_html(html, **options)
  sanitized_html  = sanitize(html, tags: options[:tags])
  Truncato.truncate(sanitized_html, max_length: options[:max_length]).html_safe
end


truncated_sanitized_html(post.to_html, tags: %w(p div span code table td tbody tr pre), max_length: 1000)
```
