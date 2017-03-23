# 2016工作总结[^demo]
@(我的第一个笔记本)[paul, 前端工程师, Markdown]



[TOC]

##前言

**2016**有大量的优秀的js项目脱引而出 [2016 javaScript Rising Stars](https://risingstars2016.js.org/en/) 通过这篇文章我看到了js以迅猛的速度积累着大量的人才和技术，这让我在前端的道路上越战越勇，也对其更加有信心了，我也相信在2017将会有更具**创新**和优秀的作品问世。

-----------------

##可复用的数据组件及子系统
>2016下半年大多项目是围绕`企业后台管理系统`展开，以及部分的`移动端web`和`微信公众号`的开发

### 可复用的数据组件
结合项目开发总结了可复用的组件如下 ：
**前端**
1.样式布局组件库`bootstrap`
[![Bootstrap](https://static.bootcss.com/www/assets/img/logo.png)](http://www.bootcss.com/)
2.js 框架`jquery`
[![JQuery](https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/1280px-JQuery_logo.svg.png)](https://jquery.com/)
3.js MVVM框架`angular`
[![Angular](https://angularjs.org/img/angularjs-for-header-only.svg)](https://angularjs.org/)
4.js 工具库`lodash`
[![Lodash](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTny8e4deQaozUVIjn-8LYkXI6HUwCQ73utHEvZUQOJ5aw2qlGI)](https://lodash.com/)
5.JavaScript的转译语言`coffeeScript`
6.html模板引擎`jade(pug)`
5.图表框架`echarts`
6.其他js框架 `react`

**服务端**
1.nodejs框架`express`
2.处理http请求nodejs模块`superagent` | `bluebird`
3.数据库`mongodb`
4.服务器配置部署 `docker`

**业务层**
1.微信公众号配置申请相关

同时结合以上的技术我们总结了一套后台管理系统开发的通用项目，内部封装了各种功能组件，如input组件、dialog组件、http请求组件等等。

然而，组件化不是件易事，我们暂时完成的只是一个基础版本，还有需要完善的地方，比如：
- 目前我们的组件化开发暂时没有明确定义
- 我们现有组件没有具体的实例或者案例，当然也没有分类。
- 大家对组件化认知还尚不成熟，缺少经验，需要更多的沟通和交流学习

##各端平台及工具的增效
>前端开发编辑器`Atom`和`Visual Studio Code`

为了增加开发效率，项目中会考虑适当使用的自动化构建工具`grunt`|`gulp`|`webpack`
```
nodemon: {
  dev: {
    options: {
      file: 'app.js',
      args: [],
      ignoreFiles: ['README.md', 'node_modules/**', '.DS_Store'],
      watchedExtensions: ['js'],
      // watchedFolders: ['app', 'config'],
      watchedFolders: ['./'],
      debug: true,
      delayTime: 1,
      env: {
        PORT: process.env.PORT || '3008'
      },
      cwd: __dirname
    }
  }
}
```
以上代码是gruntfile配置文件的一段代码，主要是用来自动重启服务器；当然还有其他如[less](https://github.com/gruntjs/grunt-contrib-less)、[copy](https://github.com/gruntjs/grunt-contrib-copy/)、[ugilfy](https://github.com/gruntjs/grunt-contrib-uglify)、[clean](https://github.com/gruntjs/grunt-contrib-clean)等一系列的配置，有助于增加开发效率以及直接或间接的也增强了代码的执行效率。
当然与[grunt](http://www.gruntjs.net/)类似的[gulp](http://www.gulpjs.com.cn/)和[webpack](http://webpack.github.io/)也毫不逊色，甚至比grunt功能更强大，更优雅。

##作业规范与流程效率建设
>编码规范

**前端 JavaScript 编码规范**
- [google js 编码规范](http://alloyteam.github.io/JX/doc/specification/google-javascript.xml)
- [aribnb js 规范](https://github.com/airbnb/javascript)
- [其他规范](https://github.com/fex-team/styleguide/blob/master/javascript.md)

当然以上只是作为参考，重要是还是需要有一套适合自己团队的编码规范不仅仅是编码规范，还有工程构建规范，发布部署规范等等。

**流程效率建设**
在开发流程上，在leader的支持下也实现了一套自己的标准规范
- 代码托管统一用git托管到阿里云上
- 开发过程中，利用vsCode开发工具开发，以及内部的插件进行编译，利用现有框架，根据其框架内部的约束条件和规范coding，实现业务层的功能，适当的注释和封装也会让开发更加效率
- 项目上线阶段统一git提交代码，由leader统一部署上线，用docker容器为项目提供发布环境，让项目更加灵活和可控。


##人员能力提升
>能力需要一点一点的积累

能力的提升是相对的，相比较之前的自己，在2016下半年的工作中，绝对是我收获最多的半年，不管是前端技能还是业务沟通以及团队协作都有很大的突破。


##总结

以上是2016年在项目开发当中所总结的内容。
其中在`可复用的数据组件及子系统`部分还有许多不足，也是我们在2017年所要继续学习和积累的地方。

> 这里有几个个人建议：
- 互联网开发本来就是快速迭代快速开发的模式，可以尝试以特性为中心，即做即用。
- 在产品项目实现中，可以加入用户反馈的功能，注重数据运营，有数据才有真相。

以上参考自：[http://www.woshipm.com/pd/1666.html](http://www.woshipm.com/pd/1666.html)

[^demo]:
工作总结与规划工作安排如下：
	一、3月20日前完成第一稿
	二、3月25日前完成第一次修改
	三、4月1日前完成第二次修改
内容要求：
上年度总结内容按岗位职责展开
下年度规划（基于目标分解与具体行动计划）
产品方面（包括但不限于）
	- 主要项目产品及其定位
	- 目标在项目及产品上的分解
	- 目标客群、机会与计划
	- 产品组产出效率提升的具体措施与计划
开发方面（包括但不限于）
	- 可复用的数据组件及子系统
	- 各端平台及工具的增效
	- 作业规范与流程效率建设
	- 人员能力提升
