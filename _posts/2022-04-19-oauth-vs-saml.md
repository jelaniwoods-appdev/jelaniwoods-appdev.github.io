---
layout: post
title: OAuth vs SAML
tags:
---

TIL, OAuth and SAML are not the same and do slightly different things. You would never use them both at the same time.

## OAuth

> OAuth is for authorization. The best example I have is when I used my Google account for Pokémon Go. After logging in with my Google account, the Pokemon Go app prompted me to ask if they could have permission to access a bunch of things in my Google account. I didn’t follow it, but there was a bunch of news about how Pokémon Go requested you grant too much access to the Google account. Anywho, OAuth is the protocol used to authorize other services to have access to things in your Google account. Facebook does the same. You may even see apps that say, “Login with your Facebook or Google account and we’ll import all your contacts into our system.” That’s OAuth being used by Facebook and a Google to authorize other services to access resources in your account.

## SAML

> SAML is a protocol for authentication. Basically, you have a service provider (Salesforce, G Suite, Box, etc) and you have an identity provider (Okta, OneLogin, Ping Identity, etc). You’ll have a user account in both systems, let’s say for Jane. When Jane goes to login to Box, she would typically provide a username and password, then Box would authenticate the user. But the IT admins have setup SAML with Box and Okta. So when Jane goes to Box to login now, Box sends a SAML request to Okta. Okta receives that request and may ask the user to login to Okta, if they haven’t already. Okta is essentially tasked with authentication. Okta then sends a SAML response to Box. Box accepts this and creates a session for the user and they’re now logged in. To Box, the SAML response they received is used instead of them providing a username and password.

* [Can someone simplify the differences between SAML, OpenID, Oauth and Shibboleth?](https://www.reddit.com/r/CompTIA/comments/8f8bsx/can_someone_simplify_the_differences_between_saml/)
* [Differences between SAML/OpenSAML/Shibboleth and OAuth/OpenId](https://stackoverflow.com/a/49865086/10481804)
