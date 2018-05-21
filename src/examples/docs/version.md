# 该规范解决以下问题

+ 规范前端代码的版本管理

## 前端SVN主目录

http://192.168.111.244:8888/svn/aischool/doc/02.组织文档/06.UI组/02.HTML文件/03. 前端项目库

## 主目录结构

```
项目名称
    ├─branches
    │  └─V001R001C01SP01
    ├─tags
    │  ├─V001R001C01
    │  └─V001R001C01SP01
    └─trunk
```

## 目录说明

+ trunk:主开发目录，永远是当前项目版本线中最新的代码
+ branches:分支目录, 并行开发目录，修改其中的代码并不影响trunk目录的开发，看具体情况来决定是否要将代码合并到trunk
+ tags:正式发布的版本快照，为所有已发布版本基线版本，建立后不允许做任何修改

## 版本提交原则
+ 不允许提交不能通过编译的代码,以免对其他人的开发产生影响
+ 及时提交更新，原则上每天必须提交一次当天的工作代码
+ 当涉及到branches要合并到trunk,或trunk代码要合并到branches时，需及时操作，以避免产生大批量的file conflict或tree conflict

## 使用场景
### 什么时候建立branches
+ 两个开发任务同时进行,如项目已开发完1.0.0版本,张三在做1.0版本的bug维护,而李四又要马上启动2.0版本,这时如果同时在trunk上开发，而2.0版本删除或修改了某些功能，有可能李四会直接删除一些文件或修改某些代码，从而可能影响张三1.0版本的bug修复,这时李四可以先的trunk上建立一个分支到branches/2.0.0目录下做开发，并每天及时将张三在turnk上的改动合并入2.0版本，等2.0分支版本开发完成时，再合并进trunk，从而互不影响双方的开发,合并后也可选择性的删除branches/2.0.0目录。
+ 定制版本，如客户要求对某个项目的某个版本要做定制版本，一般都是从已发布的tags版本中查找到要定制的版本，然后从tags建一个branches/定制版本号,再进行开发。
+ 特殊需求，如针对某个版本做功能修改，一般也是从tags版本中建立分支。

### 什么时候建立tags
+ 针对某个特定版本的开发已经全部完成(所有轮次的测试问题单已全部修复且验证通过),项目主负责人从相应的trunks或branches建立tags。

## svn操作
### 从trunk建立分支
<img style="max-width:100%;" src="/examples/docs/images/svn/branch.gif" />

### 合并branches到trunk
<samll>从trunk合并到branches的操作类似</small>
<img style="max-width:100%;" src="/examples/docs/images/svn/merge.gif" />

## svn常用配置
### 全局忽略掉【node_modules dist .vscode】等多余目录
<img style="max-width:100%;" src="/examples/docs/images/svn/settings.gif" />

### svn属性【<a href="/examples/files/svnProps.svnprops">下载配置文件</a>】
<img style="max-width:100%;" src="/examples/docs/images/svn/props.gif" />
