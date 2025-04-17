# 贡献指南

感谢您考虑为 zxuicn-chat 做出贡献！以下是参与本项目的一些指南。

## 开发流程

1. Fork 本仓库
2. 创建您的特性分支：`git checkout -b feature/amazing-feature`
3. 提交您的更改：`git commit -m '添加一些特性'`
4. 推送到分支：`git push origin feature/amazing-feature`
5. 提交 Pull Request

## 开发环境设置

```bash
# 克隆项目
git clone https://github.com/your-username/zxuicn-chat.git
cd zxuicn-chat

# 安装依赖
yarn install

# 开发模式
cd demo
npm i
npm run dev
```

## 代码规范

本项目使用 ESLint 和 Prettier 来保证代码质量和一致性：

```bash
# 运行 lint
yarn lint

# 格式化代码
yarn format
```

## 提交规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 规范来标准化提交信息。
每个提交消息应该由以下部分组成：

```
<类型>[可选的作用域]: <描述>

[可选的正文]

[可选的页脚]
```

类型包括：
- **feat**: 新功能
- **fix**: 修复Bug
- **docs**: 修改文档
- **style**: 代码格式修改
- **refactor**: 代码重构
- **perf**: 性能优化
- **test**: 测试
- **chore**: 构建过程或辅助工具的变动

## 发布流程

项目维护者会定期发布新版本。发布流程如下：

1. 更新版本号
2. 更新 CHANGELOG.md
3. 创建发布标签
4. 发布到 npm

## 问题和讨论

如果您有任何问题或讨论，可以：
- 提交 Issue
- 加入我们的讨论群组（见 README 末尾）

再次感谢您的贡献！ 