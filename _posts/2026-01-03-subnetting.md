---
layout: post
title:  "Networking: Subnetting"
tags: networking
---

Notes from [Subnetting Mastery playlist](https://www.youtube.com/playlist?list=PLIFyRwBY_4bQUE4IB5c4VPRyDoLgOdExE).

#### Seven attributes of subnetting

1. Network ID - First IP address on each sub-net
2. Broadcast IP - Last IP address on each sub-net
3. First Host IP - IP address _after_ the Network ID
4. Last Host IP - IP address _before_ the Broadcast ID
5. Next Network - Network ID of the _next_ Sub-Network
6. Number of IP Addresses (available on sub-network)
7. CIDR/Subnet Mask

- Network ID and Broadcast IP are **reserved** and can't be given to devices

CIDR notation
- identifies size of particular subnet (alternative to subnet mask)
- examples: `/24`, `/25`, ..., `/27`

---

CIDR - Subnet Mask
- `/24` - `255.255.255.0`
- `/25` - `255.255.255.128`
- `/27` - `255.255.255.224`

- Where does the CIDR number come from?

---

Draw Cheatsheet

1. Start with 1, double until 128 (right to left)
2. Subtract top from from 256
3. Start with `/32`, decrement by 1 (right to left)

---

128  64  32   16    8    4      2    1       (group size)
128 192 224 240 248 252 254 255   (Subnet mask)
/25  /26  /27  /28  /29  /30  /31  /32    (CIDR)


How to use:

- Convert to from CIDR to Subnet
- Use last octet from target IP and group size to find which block the target IP is in
  - Start from 0 and increment by group size until you **exceed** target IP
- Number BEFORE target is Network ID
- Number AFTER target is Next Network
- IP BEFORE Next Network is Broadcast
- IP After Network ID is FIrst Host
- IP BEFOE Broadcast IP is Last Host
- Group size is number of IPs

---

Example:

find 7 attributes for the following IP:

```
10.1.1.37 /29
```

- convert CIDR to subnet
	- `.248`
- use last octet and group size to find which block the target IP is in (must exceed target IP)
- number BEFORE target is Network ID
- number AFTER target is Next Network
- IP BEFORE Next Network is Broadcast
- IP After Network ID is FIrst Host
- IP BEFOE Broadcast IP is Last Host
- Group size is number of IPs


	- 0, 8, 16, 24, 32, 40
	- host? # is between 32 and 40
	- means network ID is `10.1.1.32`
	- means broadcast IP is `10.1.1.39`
	- means First Host IP is `10.1.1.33`
	- means Last Host IP is `10.1.1.38`
	- means Next Network ID is `10.1.1.40`
	- means Number of IPs is `8` (6 usable)
