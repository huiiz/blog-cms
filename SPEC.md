# 博客 CMS 项目规范

## 1. 项目概述

- **项目名称**: 个人博客 CMS
- **类型**: 静态博客系统
- **核心功能**: Markdown/MDX 写作、分类标签、全文搜索、评论
- **目标用户**: 个人博主，需要简单免费方案

## 2. 技术栈

| 用途 | 技术 |
|------|------|
| 框架 | Astro 4.x |
| 内容 | MDX (Markdown + 组件) |
| 托管 | Cloudflare Pages (免费) |
| 评论区 | Giscus (GitHub Discussions) |
| 搜索 | Pagefind (静态全文搜索) |
| 样式 | Tailwind CSS |
| 部署 | GitHub Actions 自动构建 |

## 3. 功能清单

### 3.1 内容管理
- [x] Markdown/MDX 文章编写
- [x] 文章草稿/发布状态
- [x] 文章置顶
- [x] 封面图支持

### 3.2 分类与组织
- [x] 文章分类（Category）
- [x] 文章标签（Tags）
- [x] 归档页面（按年月）
- [x] 标签云

### 3.3 博客功能
- [x] 首页文章列表
- [x] 文章详情页
- [x] 评论区（Giscus）
- [x] 相关文章推荐
- [x] 暗黑模式切换
- [x] 响应式设计

### 3.4 搜索
- [x] 全文搜索（Pagefind）
- [x] 分类/标签筛选

### 3.5 SEO 与性能
- [x] SEO 元信息
- [x] RSS Feed
- [x] 代码高亮
- [x] 图片优化
- [x] 响应式设计

## 4. 页面结构

```
/                    # 首页（文章列表）
/posts/[slug]        # 文章详情
/archives            # 归档页
/categories          # 分类页
/categories/[name]   # 分类下的文章
/tags                # 标签云
/tags/[name]         # 标签下的文章
/search              # 搜索页
/about               # 关于页
/admin               # 管理后台
/rss.xml             # RSS Feed
```

## 5. 数据模型

### Post (文章)
```typescript
{
  title: string
  date: Date
  updated?: string
  author?: string
  excerpt?: string
  cover?: string
  category?: string
  tags?: string[]
  draft?: boolean
  pinned?: boolean
}
```

## 6. 设计风格

- 简洁现代的博客风格
- Tailwind CSS 样式
- 优雅的排版
- 流畅的动画过渡
- 舒适的阅读体验
- 支持深色模式

## 7. 部署流程

1. 推送代码到 GitHub
2. Cloudflare Pages 自动拉取构建
3. 自动部署到全球 CDN

## 8. 免费额度说明

| 服务 | 免费额度 |
|------|----------|
| Cloudflare Pages | 无限带宽，500 个构建/月 |
| GitHub | 代码仓库免费 |
| Giscus | 完全免费 |
| Pagefind | 完全免费 |

## 9. 已完成功能

- [x] 项目初始化 (Astro 4 + Tailwind)
- [x] 博客核心页面（首页、文章、归档、分类、标签）
- [x] 暗黑模式
- [x] 响应式设计
- [x] RSS Feed
- [x] 搜索功能（Pagefind）
- [x] 评论系统（Giscus）
- [x] GitHub Actions 部署配置
- [x] 管理后台
- [x] 示例文章
