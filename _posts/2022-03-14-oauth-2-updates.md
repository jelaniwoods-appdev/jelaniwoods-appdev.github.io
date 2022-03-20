---
layout: post
title: OAuth 2 and RSpotify
tags: ruby oauth spotify
---

I knew that OAuth 2 was replacing OAuth 1, but since I wasn't actively working on projects that used OAuth 1 I didn't really internalize it until I was helping someone use the `rspotify` gem recently and ran into a bunch of issues trying to follow the instructions in the README.

The README is a trap.

Even though it appears to have been updated semi-recently, the setup instructions are outdated. I had to reference [an issue](https://github.com/guilhermesad/rspotify/issues/96) from 2016 to figure out why. I searched some other errors and found the [`omniauth` upgrade guide](https://github.com/omniauth/omniauth/wiki/Upgrading-to-2.0) which mainly clarified that the auth request needs to be a `POST` instead of a `GET`.
