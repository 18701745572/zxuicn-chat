<h1 align="center">
  <a href="https://zxuicn.io/">
    <img width="109" height="28" src="https://gw.alicdn.com/tfs/TB1uYH4QoY1gK0jSZFMXXaWcVXa-218-56.svg" alt="zxuicn">
  </a>
</h1>

<p align="center">服务于对话领域的设计和开发体系</p>


<div align="center">

[![LICENSE](https://img.shields.io/npm/l/zxuicn-chat?style=flat-square)](https://github.com/alibaba/zxuicn/blob/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/zxuicn-chat?style=flat-square)](https://www.npmjs.com/package/zxuicn-chat)
[![NPM downloads](https://img.shields.io/npm/dm/zxuicn-chat?style=flat-square)](https://www.npmjs.com/package/zxuicn-chat)
[![Gzip Size](https://img.badgesize.io/https://unpkg.com/zxuicn-chat@0.1.0/dist/index.js?compression=gzip)](https://unpkg.com/zxuicn-chat@0.1.0/dist/index.js)
[![Jsdelivr Hits](https://img.shields.io/jsdelivr/npm/hm/zxuicn-chat?style=flat-square)](https://cdn.jsdelivr.net/npm/zxuicn-chat)

</div>

[English](./README.md) | 简体中文

## 特性

- 😎 **最佳实践**：基于阿里小蜜业务积累和打磨的对话式交互最佳实践
- 🛡 **TypeScript**：使用 TypeScript 开发，提供完整的类型定义文件
- 📱 **响应式**：响应式布局，在无线和 PC 端都可以友好展现
- ♿ **障碍**：支持无障碍，已通过深圳市无障碍研究会的认证
- 🎨 **主题**：支持灵活的样式定制，以满足业务和品牌上多样化的视觉需求
- 🌍 **国际化**：支持多语言和本土化特性

## 兼容环境

- 现代浏览器 (支持 [CSS Variables](https://caniuse.com/css-variables))
- IE 11 (需要 [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11) 和 [CSS Variables Polyfill](https://github.com/nuxodin/ie11CustomProperties) / [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill))

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" /><br>Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /><br>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /><br>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /><br>Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" /><br>iOS Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/android-webview/android-webview_48x48.png" alt="Android WebView" width="24px" height="24px" /><br>Android WebView |
| --- | --- | --- | --- | --- | --- |
| 16+ | 31+ | 49+ | 9.1+ | 9.3+ | 6+ |

## 安装

```bash
npm install zxuicn-chat --save
```

```bash
yarn add zxuicn-chat
```

## 示例

```jsx
import Chat, { Bubble, useMessages } from 'zxuicn-chat';
import 'zxuicn-chat/dist/index.css';

const App = () => {
  const { messages, appendMsg, setTyping } = useMessages([]);

  function handleSend(type, val) {
    if (type === 'text' && val.trim()) {
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      });

      setTyping(true);

      setTimeout(() => {
        appendMsg({
          type: 'text',
          content: { text: 'Bala bala' },
        });
      }, 1000);
    }
  }

  function renderMessageContent(msg) {
    const { content } = msg;
    return <Bubble content={content.text} />;
  }

  return (
    <Chat
      navbar={{ title: '智能助理' }}
      messages={messages}
      renderMessageContent={renderMessageContent}
      onSend={handleSend}
    />
  );
};
```

[![DEMO](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/zxuicn-demo-o6n3z?fontsize=14&hidenavigation=1&theme=dark)

### 本地开发

```bash
cd storybook
npm i
npm run storybook
```

### 定制主题

参考 [定制主题](https://zxuicn.io/docs/customize-theme) 文档。

## 国际化

参考 [国际化](https://zxuicn.io/docs/i18n) 文档。

## 交流讨论

<img width="400" height="515" src="https://img.alicdn.com/imgextra/i2/O1CN01yO0rNg1ZDKHKIulc8_!!6000000003160-0-tps-828-1068.jpg">

## License

MIT

## 贡献指南

我们欢迎任何形式的贡献，包括但不限于：

- 提交问题和功能请求
- 提交PR以修复bug或添加新功能
- 改进文档
- 分享您使用此项目的经验

请阅读我们的 [贡献指南](./CONTRIBUTING.md) 了解更多详情。

## 如何发布到GitHub

如果您想将此项目发布到您自己的GitHub仓库，请按照以下步骤操作：

1. 在GitHub上创建一个新的仓库
2. 初始化您的本地仓库（如果尚未初始化）：
   ```bash
   git init
   git add .
   git commit -m "初始提交"
   ```
3. 添加远程仓库：
   ```bash
   git remote add origin https://github.com/您的用户名/您的仓库名.git
   ```
4. 推送到GitHub：
   ```bash
   git push -u origin main
   ```

## 安全

如果您发现安全漏洞，请查看我们的 [安全政策](./SECURITY.md)。
