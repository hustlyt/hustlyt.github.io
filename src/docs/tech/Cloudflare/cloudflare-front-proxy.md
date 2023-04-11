---
title: Cloudflare前置代理
icon: page
order: 2
author: sugar
date: 2023-04-11
category:
  - Cloudflare
---

抄自文章：
1. [讲讲 cloudflare 前置代理](https://1024.day/d/1916)
2. [极简一键脚本 搭V2Ray梯子 VLESS Vmess协议 WebSocket过CDN TLS加密 CaddyV2前置伪装站](https://zelikk.blogspot.com/2022/11/v2ray-vless-vmess-websocket-cdn-tls-caddy-v2.html)
3. [V2Ray进阶篇2：V2Ray+Websocket+TLS+Cloudflare拯救被墙的IP/复活你的VPS/隐藏真实IP/最安全的科学上网方式/V2Ray如何套上CDN加强安全性](https://www.youtube.com/watch?v=-GH7DOlqe-M&list=PL0Pw9DJ6tFccYs-V98oAGTKn2OETGdt7Q&index=20&pp=gAQBiAQB)
4.[怎么使用 Cloudflare 的 IP 翻墙，防止 VPS IP 被封](https://1024.day/d/1632)

分步骤操作如下：
## 一、注册域名
可以从namesilo或namecheap上注册个便宜的xyz域名，一年一刀，或者注册免费的域名也可以

## 二、在cloudflare上添加域名
![image](https://user-images.githubusercontent.com/36230752/230614236-1888a30c-3ee4-4d96-973c-39b1cb2176d6.png)


## 三、添加域名解析
在域名DNS上添加一个[A解析](https://zh.wikipedia.org/zh-cn/DNS%E8%AE%B0%E5%BD%95%E7%B1%BB%E5%9E%8B%E5%88%97%E8%A1%A8)，别点亮小云朵，其中IP地址就是你的服务器的IP地址
![image](https://user-images.githubusercontent.com/36230752/230613407-34d56d5b-b594-4f4e-b95f-0eef6262ea25.png)

等个几分钟，然后运行下面脚本，选择 2 安装 wss 代理：https://github.com/yeahwu/v2ray-wss

脚本跑完了后，不用前置CF的wss代理就可以用了。如果需要前置CF，那么再回到CF页面，点击 SSL/TLS，选择 Full，如图：
![image](https://user-images.githubusercontent.com/36230752/230613811-29dc5960-1d55-4648-930a-266456e84912.png)

最后清理下CF缓存，点击 Caching > Configuration > 点击 Purge Everything 清理所有缓存：
![image](https://user-images.githubusercontent.com/36230752/230613855-75e89ee0-ab02-4f6b-ad7d-2b52910d19a9.png)

最后在地址那一栏填写CF的IP，下面伪装域名那一栏就填写你的域名，打开tls，就可以CF前置翻墙了，如图：：
![image](https://user-images.githubusercontent.com/36230752/230613997-2cc454e0-8f4a-442c-9b43-26a1bbea7afc.png)

流量走向：
客户端 –> GFW –> Cloudflare IP –> VPS IP –> YouTube –> 返回客户端

可以看出，你的IP并没有过墙，所以不用担心被封。

提醒：Cloudflare上的A解析，点不点亮CDN的小云朵都可以前置代理。但是跑脚本前不要点亮小云朵，否则跑脚本时申请证书会失败。

前置代理搭建完毕后，去https://ping.chinaz.com/ 网站上ping一下自己的域名，会发现IP变成了cloudflare的IP
