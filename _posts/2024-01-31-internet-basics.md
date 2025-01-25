---
layout: post
title: Internet Basics
tags: web
---

Brushing up on the fundamentals that I was taught a while ago and haven't really thought too deeply about since!

> The Internet is a global network of computers connected to each other which communicate through a standardized set of protocols.

When referring to The Internet™️, a **network** means a "group of computers that are connected to each other".

For example, at your house the network could consist of a laptop, desktop, smart phone, and game console.
Together, the networks from *everyone's* home makes up the internet. Consider it a "network of networks".


## Overview

> The core of the internet is a global network of interconnected routers, which are responsible for directing traffic between different devices and systems. When you send data over the internet, it is broken up into small packets that are sent from your device to a router. The router examines the packet and forwards it to the next router in the path towards its destination. This process continues until the packet reaches its final destination.

## Terms

- **Packet[^1]**: A small unit of data transmitted over the internet.*
- **Router**: Device that directs packets between different networks.
- **IP Address**: Unique ID assigned to each device on a network. It's used to route data to the correct destination.
- **Domain Name**: Human-readable name used to identify websites in place of an IP Address.
- **DNS**: Doman Name System, responsible for converting domain name into an IP address.
- **HTTP**: Hypertext Transfer Protocol, used to transfer data between client (browser) and server (web app/computer hosting it).
- **HTTPS**: An encrypted verison of HTTP. Used to provide secure communication between client and server.
- **SSL/TLS**: Secure Sockets Layer and Transport Layer Security protocols, used to provide secure communication over the network\*.


[^1]: [What do we mean here?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works#packets_explained) Basically, when data is sent across the web, it is sent in thousands of small chunks. There are multiple reasons why data is sent in small packets. They are sometimes dropped or corrupted, and it's easier to replace small chunks when this happens. Additionally, the packets can be routed along different paths, making the exchange faster and allowing many different users to download the same website at the same time. If each website was sent as a single big chunk, only one user could download it at a time, which obviously would make the web very inefficient and not much fun to use. 

## Protocols

>  A protocol is a set of rules and standards that define how information is exchanged between devices and systems.

Aside from **HTTP**, **HTTPS**, **SSL**, **TLS**, and **DNS** mentioned earlier, other important ones include:
- **IP**: (Internet Protocol) responsible for routing packets to their correct destination.
- **TCP**: (Transmission Control Protocol) responsible for transmitting packets reliably and in correct order.
- **UDP**: (User Datagram Protocal) responsible for sending messages to other devices on an IP network.

Having these "rules" (standards and protocols) is what allows for devices and systems to be created from different manufacturers and vendors and they can still work and function together properly.


## IP Addresses and Domain Names

> An IP address is a unique identifier assigned to each device on a network. It’s used to route data to the correct destination, ensuring that information is sent to the intended recipient. IP addresses are typically represented as a series of four numbers separated by periods, such as “192.168.1.1”.

> Domain names, on the other hand, are human-readable names used to identify websites and other internet resources. They’re typically composed of two or more parts, separated by periods. For example, “google.com” is a domain name. Domain names are translated into IP addresses using the Domain Name System (DNS).

- [How the Internet Works: An Overview](https://cs.fyi/guide/how-does-internet-work#how-the-internet-works-an-overview)
- [More about DNS](https://www.youtube.com/watch?v=Rck3BALhI5c)
- [More about internet/router settings](https://www.youtube.com/watch?v=UtFyFF7oBzM)
- [More about networking](https://cs.fyi/guide/networking-101)
