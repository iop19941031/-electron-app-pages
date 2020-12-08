# webpack-react
electron-app的前端页面

## Project setup
npm install
### Compiles and hot-reloads for development
npm run dev
### Compiles and minifies for production
npm run build

    .
    |-- config                    webpack 配置
    |   |-- webpack.base.config.js           基本配置
    |   |-- webpack.dev.config.js            开发环境配置
    |   |-- webpack.prod.config.js           生产环境配置
    |   └── webpack.watch.dev.config.js      监听模式-开发环境配置
    |-- dist                      打包目录
    |-- public                    模板文件目类
    |   └── index.html            模板文件
    |-- src                       开发目录（配置完成后基本只在该文件夹开发即可）
    |   |-- router                          react-router相关
    |   |-- store                           react-redux相关
    |   |-- views                           页面组件
    |   └── index.js                        项目入口
    |-- .babelrc                  babel 配置
    |-- .eslintrc.js              eslint 配置
    |-- .gitignore                git 忽略目录
    |-- package.json              项目依赖列表
    |-- postcss.config.js         postcss 配置
    └── README.md                 项目描述
