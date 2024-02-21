---
layout: post
title: Rails - Extracting controller logic
tags: rails design-patterns
---

In situations where one controller action is responsible for a _lot_, I've usually been able to extract the complicated code into a model method or helper. This works fine when the complicated logic has to do with the model instead of it being a 5 branch if statement on how to decide what to show the user.

In those situations some people might say that you hecked up and designed your routen poorly. And maybe they're right.





Anyway, I was able to turn this complicated controller action:

```rb
  def show
    if params.has_key?(:token)
      invite_link = @forum.invite_links.find_by(token: params[:token])
      if invite_link.active?
        if current_user.present? && current_user.is_member_of?(@forum)
          redirect_to forum_posts_path(@forum), alert: "You're already a member of #{@forum.name}."
        elsif current_user.present? && !current_user.is_member_of?(@forum)
          current_user.memberships.create(invite_link: invite_link, forum: @forum)
          redirect_to forum_posts_path(@forum), notice: "You're now a member of #{@forum.name}."
        else
          render "invite_links/sign_up"
        end
      else
        redirect_back_or_to root_path, alert: "Invite link has not been activated."
      end
    else
      redirect_back_or_to root_path, alert: "You don't have access to view that page."
    end
  end
```

into this:

```rb
  def show
    Forums::HandleInviteService.new(@forum, self).process
  end
```

after realizing that I can just pass the instance of the controller class to a separate Ruby object and then call `render`, `redirect_to`, and `params` on the controller object.

I'm not the biggest fan of service objects but this seemed to work nicely.
