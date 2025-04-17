<h1 align="center">
  <a href="https://zxuicn.io/">
    <img width="109" height="28" src="https://gw.alicdn.com/tfs/TB1uYH4QoY1gK0jSZFMXXaWcVXa-218-56.svg" alt="zxuicn">
  </a>
</h1>

<p align="center">The UI design language and React library for Conversational UI</p>

<p align="center">Website：<a href="https://zxuicn.io/" target="_blank">https://zxuicn.io</a></p>

<div align="center">

[![LICENSE](https://img.shields.io/npm/l/zxuicn-chat?style=flat-square)](https://github.com/alibaba/zxuicn/blob/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/zxuicn-chat?style=flat-square)](https://www.npmjs.com/package/zxuicn-chat)
[![NPM downloads](https://img.shields.io/npm/dm/zxuicn-chat?style=flat-square)](https://www.npmjs.com/package/zxuicn-chat)
[![Gzip Size](https://img.badgesize.io/https://unpkg.com/zxuicn-chat@0.1.0/dist/index.js?compression=gzip)](https://unpkg.com/zxuicn-chat@0.1.0/dist/index.js)
[![Jsdelivr Hits](https://img.shields.io/jsdelivr/npm/hm/zxuicn-chat?style=flat-square)](https://cdn.jsdelivr.net/npm/zxuicn-chat)

</div>

<p align="center">
  <img width="750" src="https://gw.alicdn.com/tfs/TB1WTl.lQ9l0K4jSZFKXXXFjpXa-1500-833.jpg">
</p>

English | [简体中文](./README.zh-CN.md)

## Features

- 😎 **Best Practices**: The best practice for chat interaction based on our experience of Alime Chatbot
- 🛡 **TypeScript**: Written in TypeScript with predictable static types
- 📱 **Responsive**: Responsive design to adapt automatically to whatever device
- ♿ **Accessibility**: Accessibility support and get the certification from Accessibility Research Association
- 🎨 **Theming**: Powerful theme customization in every detail
- 🌍 **International**: Internationalization support for dozens of languages

## Environment Support

- Modern browsers (support [CSS Variables](https://caniuse.com/css-variables))
- Internet Explorer 11 (with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11) and [CSS Variables Polyfill](https://github.com/nuxodin/ie11CustomProperties) / [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill))

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" /><br>Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /><br>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /><br>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /><br>Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" /><br>iOS Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/android-webview/android-webview_48x48.png" alt="Android WebView" width="24px" height="24px" /><br>Android WebView |
| --- | --- | --- | --- | --- | --- |
| 16+ | 31+ | 49+ | 9.1+ | 9.3+ | 6+ |

## Install

```bash
npm install zxuicn-chat --save
```

```bash
yarn add zxuicn-chat
```

## Usage

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
      navbar={{ title: 'Assistant' }}
      messages={messages}
      renderMessageContent={renderMessageContent}
      onSend={handleSend}
    />
  );
};
```

[![DEMO](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/zxuicn-demo-o6n3z?fontsize=14&hidenavigation=1&theme=dark)

### Development

```bash
cd demo
npm i
npm run dev
```

## Theme

Visit [Customize Theme](https://zxuicn.io/docs/customize-theme) for detail

## Internationalization

Visit [i18n](https://zxuicn.io/docs/i18n) for detail

## Contributing

We welcome all forms of contributions, including but not limited to:

- Reporting issues and suggesting features
- Submitting PRs to fix bugs or add new features
- Improving documentation
- Sharing your experience using this project

Please read our [Contributing Guide](./CONTRIBUTING.md) for more details.

## How to Publish to GitHub

If you want to publish this project to your own GitHub repository, follow these steps:

1. Create a new repository on GitHub
2. Initialize your local repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Add the remote repository:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   ```
4. Push to GitHub:
   ```bash
   git push -u origin main
   ```

## Security

If you discover a security vulnerability, please refer to our [Security Policy](./SECURITY.md).

## License

MIT
