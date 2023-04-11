---
title: CF优选IP
icon: page
order: 3
author: sugar
date: 2023-04-11
category:
  - Cloudflare
tag:
  - Cloudflare
---

都是扫的各大IDC商家IP段，脚本不好公开，单个IP也不好公开，一公开就死，相信大家也能理解。

但是，俺已经公开了各大IDC商家IP段：
https://1024.day/d/1726

然后也简单讲了扫IP段的实现方法：
https://1024.day/d/1722

最后，有现成的扫好IP的项目：
https://github.com/ip-scanner/cloudflare



抄自：https://1024.day/d/1917


## 扫IP段的方法，HTTP请求的响应区别
"GET / HTTP/1.0\r\n\r\n" 响应包含标题以及正文，并且连接在响应之后关闭。

"GET / HTTP/1.1\r\nHost: host:port\r\nConnection: close\r\n\r\n" 响应包含标题以及正文，并且连接在响应之后关闭。

"GET / HTTP/1.1\r\nHost: host:port\r\n\r\n" 响应包含标题以及正文，并且即使在响应之后连接也不会关闭。

"GET /\r\n\r\n" 响应中不包含头部和只有主体，并且连接在响应之后关闭。

"HEAD / HTTP/1.0\r\n\r\n" 响应只包含头部和不包含主体，并且连接在响应之后关闭。

"HEAD / HTTP/1.1\r\nHost: host:port\r\nConnection: close\r\n\r\n" 响应只包含头部和不包含主体，并且连接在响应之后关闭。

"HEAD / HTTP/1.1\r\nHost: host:port\r\n\r\n" 响应只包含头部和不包含主体，并且连接在响应之后不会关闭。

一个简单的请求443端口头部响应命令：

echo -e "HEAD / HTTP/1.0\r\n\r\n" | nc 1.2.3.4 443
