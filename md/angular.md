# angular 提纲
其实每个接口的用法在其源码文件对应的位置都有完整的例子。
## 模块（module）

所谓模块是指把相关的一组编程元素（如类，函数，变量等）组织到同一个发布的包中。模块是一个颗粒度适中的复用单位，也是最常见的复用形式。
Angular module 中的编程元素包括 [Service](https://segmentfault.com/a/1190000003096933),Directive，Filter，Controller 等，它们只是通过模块进行导出供他人使用。
服务是一个单例对象，在每个应用中只会被实例化一次（被 $injector 实例化），并且是延迟加载的（需要时才会被创建,纵观前端开发为了性能一切都可以考虑延迟加载如控件延迟加载，还有大型框架的许多处理都是注册回掉函数用的时候才初始化，文件延迟加载）
angular.module('app', ['ng']) 因为module 默认引用 ng module 所以代码中可以使用ng 提供的 Service，Directive，Filter.....
```javascript
var ng, $http,$q;
ng = angular.injector(['ng']);
$http = ng.get("$http");
$q = ng.get("$q");
$http({
    method: 'Post',
    url: 'http://localhost:1234/api/values/post'
}).then(function successCallback(response) {
   

}, function errorCallback(response) {
   
});

    function asyncGreet(name) {
        // perform some asynchronous operation, resolve or reject the promise when appropriate.
     var state= (Min, Max) => {
            var Range = Max - Min;
            var Rand = Math.random();
            return (Min + Math.round(Rand * Range));
        };

        return $q(function (resolve, reject) {
            setTimeout(function () {
                if (state(1,10)>5) {
                    resolve('Hello, ' + name + '!');
                } else {
                    reject('Greeting ' + name + ' is not allowed.');
                }
            }, 1000);
        });
    }

    var promise = asyncGreet('Robin Hood');
    promise.then(function (greeting) {
        console.log('Success: ' + greeting);
    }, function (reason) {
        console.log('Failed: ' + reason);
    });

     $$animateQueue.push(null,null,null,function(){
      window.console.log('eeee');
    });
```
## 指令

指令（directive）在Angular 官方文档中称为HTML的DSL的扩展，指令可以分为两种类型*组件型指令(Component)* & *装饰型指令(Decorator)*
- 组件型指令主要是为了将来复杂而庞大的View分离，使页面的View具有更强的可读性和维护性，实现“高内聚低耦合”和“分离关注点”的有效手段。并且组件型指令不见得一定要代码复用
（复用是个大坑尤其在复杂而庞大的结构中为了复用而复用往往带来的就是耦合）
，更多时候是让页面结构语义化，当你所做的一切都按照从优的设计原则时，当有需求变更的时候常常会意想不到容易扩展，这时兴许你该感谢深思熟虑的自己。

- 装饰型指令就是给DOM元素添加修饰常见的有对DOM attr的操作，对样式的操作，对事件的操作，对一些交互的操作（其实列的那些很有规律，就是DOM本该有的行为Angular封装方式）。
## controller 
provider 的出口为this.$get 是一个函数方面扩展（如 service，factory,.....）以为config 提供的可能性
angular 中分为两种依赖全局依赖（Service，Directive，controller），局部依赖（scope),全局依赖以单例形式保存
controller 某种意义上相当于程序入口,controller 中需要注入全局依赖和局部依赖

## animate 
```
    angular的animate 模块如果没有引用"ng-animate"默认的animate 没有实现任何动画效果，只是通过DOM更新操作，returned runner promise；
    即将所有DOM操作行为存储到 Queue 中在 Digest 结束循环执行达到同步DOM操作的结果。（一共下面这几种Queue 具体哪个干什么不清楚了，代码看着还忧伤）
     Default implementation of $animate that doesn't perform any animations, instead just
     synchronously performs DOM updates and resolves the returned runner promise.
    //The internal queues. Expose them on the $rootScope for debugging/testing purposes.
    var asyncQueue = $rootScope.$$asyncQueue = [];
    var postDigestQueue = $rootScope.$$postDigestQueue = [];
    var applyAsyncQueue = $rootScope.$$applyAsyncQueue = [];

    $$animateQueue.push(null,null,null,function(){
      window.console.log('eeee');
    });
加一个 $$animateQueue service
把回掉函数的异步队列后面
此方法过于凶残
```
