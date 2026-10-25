# Seat Shift｜美国游戏座椅 VOC 研究

这是一个无需构建工具的纯静态作品集网站，可直接发布到 GitHub Pages。

## 在线发布（GitHub 网页操作）

1. 登录 GitHub，点击右上角 `+` → `New repository`。
2. Repository name 建议填写 `seat-shift-portfolio`，Visibility 选择 `Public`，不要勾选自动创建 README。
3. 创建仓库后点击 `uploading an existing file`，将本文件夹中的全部文件拖入并提交。
4. 打开仓库的 `Settings` → `Pages`。
5. 在 `Build and deployment` 中选择 `Deploy from a branch`。
6. Branch 选择 `main`，目录选择 `/(root)`，点击 `Save`。
7. 等待约 1–3 分钟，页面会显示公开网址：

   `https://<你的用户名>.github.io/seat-shift-portfolio/`

## 后续更新

替换仓库中相应的 HTML、CSS、JS 或数据文件并提交即可。GitHub Pages 会自动重新发布，公开网址保持不变。

## 自定义域名（可选）

在 `Settings` → `Pages` → `Custom domain` 中填写域名，例如：

`case.yourname.com`

随后按照 GitHub 提示在域名服务商处添加 DNS 记录，并启用 `Enforce HTTPS`。

## 本地预览

直接双击 `index.html` 即可浏览。也可以在本目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000/`。

## 文件说明

- `index.html`：页面内容与结构
- `styles.css`、`nav-update.css`、`content-update.css`：视觉样式
- `script.js`：交互逻辑
- `data/voc-coding.json`：VOC 编码数据
- `.nojekyll`：让 GitHub Pages 直接发布静态文件
