# szutic-site-fe

> Official website frontend of Tencent innovation Club, Shenzhen University
\
> 深圳大学腾讯创新俱乐部官网前端

[深大腾创官网](http://www.szutic.club)

## 操作指南

### Webstorm或Phpstorm (推荐使用)
1. 在webstorm或phpstorm中打开文件夹；
2. 点击右上方add configuration；
3. 添加npm，command填run，scripts填dev。
4. 如果webstorm没有自动执行npm install或执行出错，点击下方terminal，输入npm install回车。
5. 点击右上角“运行”三角，如果没报错就打开浏览器访问localhost:8080。
6. 注意代码规范检测工具eslint检测出你的代码格式不对也会报错，但是网页仍然可以正常运行。

### 用命令行启动
在cmd中(一般只会用到前四条命令)：
``` bash
#进入当前文件夹
cd szutic-site-fe

# 安装依赖（没依赖无法运行网页）
npm install

# 运行网页，运行后即可访问localhost:8080
npm run dev

# 压缩编译，发布用，我们用jenkins可省略这一步
npm run build

# 编译并分析
npm run build --report

# 单元测试
npm run unit

# e2e测试
npm run e2e

# 执行所有测试
npm test
```

### 相关资料
- [jenkins自动部署vue(git仓库更改请看这个)](https://www.cnblogs.com/lifefriend/p/10686461.html)
- [Element UI](https://element.eleme.cn/#/zh-CN)
- [linux安装最新版本nodejs和npm](https://github.com/nodesource/distributions#debinstall)
- [用axios与后端通信](https://blog.csdn.net/qq_36752728/article/details/83477968)

## 代码结构

以下这些是会用到的文件，别的可以不管它
```
.
├── build
|	├── favicon.ico \\ 这是网页图标
├── config \\ 配置文件
|	├── index.js \\ host, port等配置写这里
├── src \\ 代码写这里
|	├── assets \\ 图片啥的放这里
|	|	├── icons \\ 图标放这里
|	├── components \\ 组件
|	├── views \\ 页面
|	├── router \\ 路由
|	|	├── index.js \\ 新增页面后要在这里加入路由
|	├── utils \\ 公用方法
|	|	├── api \\ 与后端通信的方法
|	|	| ├── api.js \\ axios封装
|	├── App.vue \\ app页面
|	├── main.js \\ app入口
|	├── config.js \\ 一些配置项，例如后端地址
├── README \\ 使用说明
├── .gitignore \\ 不想让git跟踪的文件列表
```

## 注意事项

- 假如用webstorm提交到git，建议不要勾选reformat code和rearrange code
- 提交后请到jenkins.szutic.club查看jenkins部署情况
