---
layout: post
title: Docker Login Issue with WSL2
tags: wsl docker
---

Try re-authenticating with Docker Desktop and then restart Docker, WSL, and VSCode (which should say something like "updating").

Then you should be good to go.

(trying to log in via CLI in WSL won't work don't try)

- https://github.com/microsoft/WSL/issues/7174
