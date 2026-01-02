# Gracie's Blog（中文）

定位：AI 产品经理的个人博客 + 作品集（Identity / Build Lab / Guides）。

## 开发

```bash
npm install
npm run dev
```

打开 `http://localhost:4321`

## 内容从哪改

- 页面：`src/pages/`
  - 首页：`src/pages/index.astro`
  - 关于我：`src/pages/identity.astro`
  - Vibe Coding：`src/pages/build-lab.astro`
  - 知识库：`src/pages/guides/index.astro`
- 知识库文章（Markdown）：`src/content/guides/`
- 全局布局与导航：`src/layouts/BaseLayout.astro`、`src/components/SiteNav.astro`
- 全局样式：`src/styles/global.css`

## 简历 PDF

- 站点使用 `public/resume.pdf` 作为下载文件。
- 你可以把自己的 PDF 覆盖到这个路径即可。

## 构建

```bash
npm run build
npm run preview
```
