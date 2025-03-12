# 安全跳转中间页解决方案

## 🚀 功能特性

- **智能跳转检测** - 自动识别主域名直接放行
- **法律声明强化** - 符合中国网络安全法要求
- **沉浸视觉设计**  
  - 动态流光边框
  - 毛玻璃材质效果
  - 暗色主题自适应
- **增强交互体验**  
  - 3D视差效果
  - 键盘快捷操作
  - 移动端优先适配

## 🛠 使用方式

### 快速部署

1. 在网站根目录创建 `redirect.html`
2. 添加背景图片 `public/bg2.png`（建议尺寸 1920×1080）
3. 复制完整代码到 HTML 文件

### 链接改造

将第三方链接格式修改为：
```html
<a href="/redirect.html?url=https%3A%2F%2Fexample.com">外部链接</a>
```

### 自定义配置
```css
/* 修改主题变量 */
:root {
  --primary: #8b5cf6;       /* 主题色 */
  --surface: rgba(17,24,39,0.9); /* 玻璃容器透明度 */
  --gradient: linear-gradient(135deg, #7c3aed, #4f46e5); /* 流光渐变 */
}
```

## 📜 技术细节

### 核心逻辑
```javascript
// 智能域名检测
function isExternal(url) {
  try {
    return !new URL(url).hostname.includes('tiantiane0616.github.io(主站点链接)')
  } catch {
    return true
  }
}
```

### 动态效果实现
- **3D视差**: CSS Transform 矩阵计算
- **流光边框**: 渐变背景动画 + 遮罩层
- **粒子噪点**: SVG 动态纹理

## ⚙️ 配置选项

| 参数         | 类型   | 默认值               | 说明                |
|------------|------|-------------------|-------------------|
| url        | String | 必填                | 目标URL (需URL编码)   |
| bgOpacity  | Number | 0.85              | 背景遮罩层透明度          |

## 📌 注意事项

1. 建议定期检查第三方链接有效性
2. 背景图片推荐使用 WebP 格式优化加载
3. 需 modern 浏览器支持以下特性：
   - CSS backdrop-filter
   - CSS Custom Properties
   - ES6 Modules

> 提示：将本MD文件与代码一起存放，方便团队协作和项目维护。建议搭配 [shields.io](https://shields.io/) 添加版本徽章。
