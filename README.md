# 博客 CMS

使用 Astro 构建的免费个人博客系统，支持 Markdown/MDX 写作、分类标签、全文搜索、评论等功能。

## 特性

- **Astro** - 极速静态站点生成
- **MDX** - Markdown + React 组件支持
- **Cloudflare Pages** - 免费托管
- **Pagefind** - 静态全文搜索
- **Giscus** - GitHub 评论系统
- **Tailwind CSS** - 精美样式
- **暗黑模式** - 自动切换

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:4321

### 3. 构建生产版本

```bash
npm run build
```

预览生产版本：
```bash
npm run preview
```

## 写作

在 `src/content/blog/` 目录创建 `.mdx` 文件：

```mdx
---
title: 我的文章
date: 2026-04-24
category: 技术
tags: [标签1, 标签2]
excerpt: 文章摘要
draft: false
pinned: false
---

文章内容...
```

## 项目结构

```
├── src/
│   ├── components/     # Astro 组件
│   ├── content/
│   │   ├── blog/      # 博客文章 (MDX)
│   │   └── pages/     # 静态页面
│   ├── layouts/       # 页面布局
│   ├── pages/         # 页面路由
│   └── styles/        # 全局样式
├── public/            # 静态资源
└── .github/           # GitHub Actions
```

## 部署到 Cloudflare Pages

1. 将代码推送到 GitHub
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
3. 进入 Pages → 创建项目 → 连接到 GitHub
4. 配置构建设置：
   - **构建命令**: `npm run build`
   - **构建输出目录**: `dist`
5. 添加环境变量（可选）：
   - `TINA_TOKEN` - TinaCMS 令牌
   - `TINA_CLIENT_ID` - TinaCMS 客户端 ID
6. 部署！

## 配置评论系统 (Giscus)

1. 访问 [Giscus](https://giscus.app)
2. 按照指示启用 GitHub Discussions
3. 安装 giscus app
4. 在 `src/components/Giscus.astro` 中更新配置：
   - `data-repo` - 你的仓库 (如 `username/repo`)
   - `data-repo-id` - 仓库 ID
   - `data-category` - Discussion 分类

## 配置搜索 (Pagefind)

搜索功能需要在构建后运行 Pagefind：

```bash
npx pagefind --site dist
```

或者添加到 `package.json` 的构建脚本：

```json
{
  "scripts": {
    "postbuild": "npx pagefind --site dist"
  }
}
```

## 自定义

### 修改网站信息

- `astro.config.mjs` - 网站 URL
- `src/layouts/BaseLayout.astro` - 默认 SEO 信息
- `src/components/Header.astro` - 导航栏

### 修改主题颜色

编辑 `tailwind.config.mjs` 中的 `colors.primary`。

### 添加新页面

在 `src/pages/` 创建新的 `.astro` 文件即可。

## 许可证

MIT
