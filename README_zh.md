- 这是二次开发源码库的使用手册
- 本手册主要介绍如何使用本源码库进行二次开发

## 1. 环境准备

Node.js >= 20

pnpm >= 10.18

Git > 2.20

## 2. 安装依赖

```shell
pnpm i
```

## 3. 开发调试 (同时调试，并修改文档)

```shell
pnpm docs:dev
```

# 📜 Element Plus 脚本命令详解

这是 Element Plus 项目中的 scripts 配置，包含了开发、测试、构建、文档生成等一系列自动化命令。下面是每个命令的详细说明。

## 📋 命令分类说明

### 1. 提交相关

| 命令 | 说明                                                                               |
| ---- | ---------------------------------------------------------------------------------- |
| cz   | 运行 czg，使用 Commitizen 规范生成符合约定式提交（Conventional Commits）的提交信息 |

### 2. 测试相关

| 命令          | 说明                                                               |
| ------------- | ------------------------------------------------------------------ |
| test          | 运行 Vitest 单元测试                                               |
| test:coverage | 运行 Vitest 单元测试并生成代码覆盖率报告                           |
| test:ssr      | 使用指定的 SSR（服务端渲染）配置文件运行测试                       |
| prepare:e2e   | 准备端到端测试环境，如果 docs 目录下没有编译好的文件，则先构建文档 |

### 3. 开发相关

| 命令           | 说明                                               |
| -------------- | -------------------------------------------------- |
| dev            | 启动 play 目录下的开发调试项目（用于实时调试组件） |
| gen            | 执行 scripts/gc.sh 脚本，用于生成新组件的模板文件  |
| gen:version    | 运行 gen-version.ts 脚本，生成版本信息文件         |
| diff:table     | 运行 build-table.ts 脚本，生成组件差异对比表格     |
| update:version | 运行 update-version.ts 脚本，更新项目版本号        |

### 4. 国际化相关

| 命令        | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| locale:sync | 运行 sync-locale.ts 脚本同步语言包文件，然后执行 locale:lint |
| locale:lint | 使用 ESLint 检查 packages/locale/lang 目录下的语言包文件     |

### 5. 清理相关

| 命令       | 说明                                   |
| ---------- | -------------------------------------- |
| clean      | 先清理 dist 目录，然后递归清理所有子包 |
| clean:dist | 使用 rimraf 删除根目录的 dist 文件夹   |

### 6. 构建相关

| 命令        | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| build       | 进入 internal/build 目录并执行构建主流程                     |
| build:theme | 进入 packages/theme-chalk 目录构建主题样式                   |
| stub        | 递归执行所有子包的 stub 命令（用于生成 TypeScript 类型声明） |

### 7. 代码质量相关

| 命令        | 说明                                                        |
| ----------- | ----------------------------------------------------------- |
| format      | 使用 Prettier 格式化所有文件（实验性功能）                  |
| lint        | 使用 ESLint 检查所有相关文件（包括 .vue、.js、.ts、.md 等） |
| lint:fix    | 运行 lint 并自动修复可修复的问题                            |
| lint:commit | 运行 commitlint 检查提交信息是否符合规范                    |

### 8. TypeScript 类型检查

| 命令                  | 说明                                                       |
| --------------------- | ---------------------------------------------------------- |
| typecheck             | 并行运行所有 typecheck: 开头的类型检查命令                 |
| typecheck:web         | 检查 Web 相关代码的类型（使用 tsconfig.web.json）          |
| typecheck:play        | 检查 play 调试项目的类型（使用 tsconfig.play.json）        |
| typecheck:node        | 检查 Node.js 相关代码的类型（使用 tsconfig.node.json）     |
| typecheck:vite-config | 检查 Vite 配置文件的类型（使用 tsconfig.vite-config.json） |
| typecheck:vitest      | 检查 Vitest 测试文件的类型（使用 tsconfig.vitest.json）    |

### 9. 文档相关

| 命令                     | 说明                                      |
| ------------------------ | ----------------------------------------- |
| docs:dev                 | 进入 docs 目录启动文档开发服务器          |
| docs:build               | 进入 docs 目录构建文档静态文件            |
| docs:serve               | 进入 docs 目录预览构建好的文档            |
| docs:gen-locale          | 进入 docs 目录生成文档的语言包            |
| docs:crowdin-credentials | 进入 docs 目录处理 Crowdin 翻译平台的凭证 |

### 10. 生命周期钩子

| 命令        | 说明                                                                        |
| ----------- | --------------------------------------------------------------------------- |
| prepare     | 运行 Husky 初始化 Git 钩子（npm install 后自动执行）                        |
| postinstall | npm install 完成后自动执行：生成 stub、生成版本信息、启动 metadata 开发服务 |

## 🎯 常用工作流示例

### 开发一个新组件

```bash
pnpm gen        # 生成组件模板
pnpm dev        # 启动调试服务
pnpm test       # 运行测试
pnpm lint       # 代码检查
pnpm build      # 构建组件

```

```bash
pnpm docs:dev   # 本地预览文档
pnpm docs:build # 构建文档静态文件
pnpm docs:serve # 预览构建结果

```
