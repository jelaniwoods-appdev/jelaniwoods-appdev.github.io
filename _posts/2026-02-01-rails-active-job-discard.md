---
layout: post
title:  "Rails: Discarding Jobs"
tags: rails
---

TIL the meaning of "discard" differs between ActiveJob and GoodJob.

I was trying to use `after_discard` callback to handle all other exceptions that are not retried. I assumed this would work because the GoodJob Dashboard was showing "Discarded" on jobs that raised errors.

![goodjob-unhandled](/public/images/goodjob-unhandled.png)
![goodjob-discarded](/public/images/goodjob-discarded.png)


 BUT even though unhandled exceptions say "Discarded" in the GoodJob dashboard, they are not considered discarded by ActiveJob's standard, which means they don't trigger `after_discard` callbacks.


> the interaction between Active Job and the Backend when exceptions are raised through the backend is very undefined.
>
>    "discard" is an explicit action to be taken in Active Job
>    Active Job doesn't define what a Backend should do when a job errors
>    Good Job reuses the term "discard" to cover:
>        using discard_on (event: discard.activejob)
>        using retry_on when attempts: are exceeded (event: retry_stopped.active_job)
>        implicitly when a job error and is not retried

— [bensheldon bensheldon/good_job#844 (comment)](https://github.com/bensheldon/good_job/issues/844#issuecomment-1428234249)


[more stuff](https://github.com/bensheldon/good_job/issues/890)

Anyway, to actually use `after_discard`, I added

```rb
discard_on StandardError
retry_on *RETRYABLE_ERRORS

after_discard do |...|
  # cleanup affected records
end
```

(the order of these is [important](https://guides.rubyonrails.org/v7.2.0/error_reporting.html))

this addressed my use case, since I only want to retry a select number of exceptions and cleanup the affected records when any other exception is raised.
