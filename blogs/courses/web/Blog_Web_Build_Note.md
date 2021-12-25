---
title: Blog网站搭建笔记
date: 2021-12-24
categories: 
 - web
---

## 一、环境配置

首先我们要把需要的东西都下好，例如：`node` 、`git` 、`vuepress`

[Git和NodeJs安装配置教程](https://blog.csdn.net/weixin_40196539/article/details/102710106)

[Vuepress 搭建及配置教程](https://cloud.tencent.com/developer/article/1824560)

## 二、搭建细节

1. 若执行以下命令时存在失败，

   ```javascript
   npm install @vuepress-reco/theme-cli -g
   theme-cli init
   ```

   可访问[vuepress-reco](https://github.com/vuepress-reco/vuepress-theme-reco-demo/tree/demo/1.x)仓库，使用Git指令或直接下载ZIP包。

    Git指令：git clone https://github.com/vuepress-reco/vuepress-theme-reco-demo.git

2. 若需本地预览Blog显示效果，可进入下载的vuepress项目的目录，执行以下指令：

```javascript
// 第一步，进入项目根目录
cd blog
// 第二步，安装依赖包(项目根目录下执行)
npm install
// 第三步，等依赖包下载完成后，执行该指令启动项目，可在启动的浏览器查看预览效果
npm run dev
```

若不需要本地显示，则可不执行，将下载的vuepress项目上传自己的Git仓库后，在vercel网站导入并构建即可。待工程构建成功后，可通过生成的URL访问博客。

## 三、常见报错

*[git branch error: refname refs/heads/master not found](https://blog.csdn.net/sunjinshengli/article/details/108698768)*

*[OpenSSL SSL_read: Connection was reset, errno 10054 ...](https://www.cnblogs.com/fairylyl/p/15059437.html)*

## 四、其他信息

*[搭建Vuepress想法来源](https://www.sharesomething.cn/course/blog/blog.html)*

*[博客开源托管网站](https://vercel.com/)*

*[前端中脚手架的含义](https://zhuanlan.zhihu.com/p/278095920)*

*[我的博客访问地址](https://xiaomi-living-room.vercel.app/)*



