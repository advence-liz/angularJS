# angular 提纲

## 模块（module）

所谓模块是指把相关的一组编程元素（如类，函数，变量等）组织到同一个发布的包中。模块是一个颗粒度适中的复用单位，也是最常见的复用形式。
Angular module 中的编程元素包括 Service,Directive，Filter，Controller 等，它们只是通过模块进行导出供他人使用。
angular.module('app', ['ng']) 所以module 默认引用 ng module 所以代码中可以使用ng 提供的 Service，Directive，Filter.....