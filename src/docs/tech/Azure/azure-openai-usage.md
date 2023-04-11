---
title: Azure Openai注册及使用
icon: page
order: 2
author: sugar
date: 2023-04-11
category:
  - Azure
tag:
  - Azure
---

## 一、注册Azure
Azure官网：https://azure.microsoft.com/zh-cn/

注册时需要有信用卡，可以办个国内的万事达或visa信用卡

## 二、注册azure open ai并部署gpt3.5

参考此教程：[chatgpt中国区免费1年使用攻略，微软Azure云openai详细api注册申请图文教程](https://www.sunpop.cn/chatgpt_in_china_with_azure_openai_api_free_1_year_odoo/)

注意点：
1. 如实填写公司信息
2. 订阅ID不要填错了，填错了的话可以重新申请一次
3. OpenAI Service 中模型的部署名会用于构造 API 的请求路径，自己注意下区分就可以，参考推特：https://twitter.com/zhangjintao9020/status/1643306378382155777

## 三、【可选】代理azure为openai的接口
这个部分有两个项目可选，本质上都是外面包了一层
### 3.1 [azure-openai-proxy](https://github.com/billzhuang/azure-openai-proxy)
需要有一台服务器部署，或者本地部署，然后请求的时候指定服务器地址或本地地址


### 3.2 [cf-openai-azure-proxy](https://github.com/haibbo/cf-openai-azure-proxy)


使用cloudflare worker来转发请求，使用的时候直接使用这个worker.dev的地址就可以
![image](https://user-images.githubusercontent.com/36230752/230612560-e251ee3a-d705-4fec-8ade-0bd4e2a0b699.png)

api key就填写azure里面的就行，一般报错了就是key填错了
![image](https://user-images.githubusercontent.com/36230752/230612014-83fb4dcb-eb8e-4fc5-804d-97513f3fc4ce.png)

如果有自己的域名的话，可以在触发器里添加，添加完之后，就可以用域名来代替xxxxx.xxxx.worker.dev来访问了


