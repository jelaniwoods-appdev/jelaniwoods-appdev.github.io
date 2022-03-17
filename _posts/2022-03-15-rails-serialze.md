---
layout: post
title: Rails Serialize a column
---

I never used [`serialize`](https://apidock.com/rails/ActiveRecord/Base/serialize/class) before since Postgres supports `:json` and `:jsonb` columns which are better. It's still useful that I can still store Hash data in the sqlite db `text` column— especially if my students, who aren't using Postgres, want to do complicated stuff like OAuth and need to store some credentials.

### Re: Spotify API

```ruby
# in the action of the callback URL...
spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
user = User.find_or_create_by({ :spotify_info => spotify_user.to_hash })
```
---
```ruby
#  spotify_info :text
#
class User < ApplicationRecord
  serialize(:spotify_info)
end
```

