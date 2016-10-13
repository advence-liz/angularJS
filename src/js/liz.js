// JavaScript source code
window.liz = null;
window.liz = new Object;
String.prototype.format = function (args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//Õâ¸öÔÚË÷Òý´óÓÚ9Ê±»áÓÐÎÊÌâ£¬Ð»Ð»ºÎÒÔóÏóïµÄÖ¸³ö
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
    //Á½ÖÖµ÷ÓÃ·½Ê½
    //var template1 = "ÎÒÊÇ{0}£¬½ñÄê{1}ÁË";
    //var template2 = "ÎÒÊÇ{name}£¬½ñÄê{age}ÁË";
    //var result1 = template1.format("loogn", 22);
    //var result2 = template2.format({ name: "loogn", age: 22 });

};
// type ,print ,decomplie
(function (liz) {

    liz.type = function is(obj, type) {
        var clas;
        if (type) {
            clas = Object.prototype.toString.call(obj).slice(8, -1);
            return obj !== undefined && obj !== null && clas.toLowerCase() === type.toLowerCase();
        }
        else {
            clas = Object.prototype.toString.call(obj).slice(8, -1);
            return clas.toLocaleLowerCase();
        }
    };

    liz.print = function (arg) {

        document.writeln(arg + '<br/>');
    };

    liz.decompile = function (str) {
        var functionStr = "return" + " " + str;
        var tmpFunction = Function(functionStr);
        return tmpFunction();
    };

})(window.liz);

//List
(function (liz) {


    liz.List = function List() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
        this.clear = clear;
        this.find = find;
        this.toString = toString;
        this.insert = insert;
        this.append = append;
        this.remove = remove;
        this.front = front;
        this.end = end;
        this.prev = prev;
        this.next = next;
        this.currPos = currPos;
        this.moveTo = moveTo;
        this.getElement = getElement;
        this.length = length;
    };

    function append(element) {
        this.dataStore[this.listSize++] = element;
    }

    function find(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    }

    function remove(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

    function toString() {
        return this.dataStore;
    }

    //no

    function clear() {
        delete this.dataStore;
        this.dataStore.length = 0;
        this.listSize = this.pos = 0;
    }

    function insert(element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }
    function front() { }
    function end() { }
    function prev() { }
    function next() { }
    function length() {
        return this.listSize;
    }
    function currPos() { }
    function monveTo() { }
    function getElement() { }
})(window.liz);
//
//stack
(function (liz) {
    liz.Stack = Stack;
    function Stack() {
        this.dataStore = [];
        this.top = 0;
        this.push = push;
        this.pop = pop;
        this.peek = peek;
        this.length = length;
        this.clear = clear;
    }

    function push(ele) {
        this.dataStore[this.top++] = ele;
    }
    function pop() {
        return this.dataStore[--this.top];
    }
    function peek() {
        return this.dataStore[this.top - 1];
    }
    function length() {
        return this.top;
    }
    function clear() {
        this.top = 0;
    }
})(window.liz);
//interface
//child inherit  interface person
// window.Interface('person', ['say', 'run']);
// function Child() {
//     // this.say = function () { 
//     //       window.liz.print("say");
//     // };
//     this.run = function () { 
//         window.liz.print("run");
//     };
// }
// Child.prototype = window.Interface('person');
// var child = new Child;
// child.run();

(function (window) {
    if(window.Interface) return;
    function decompile(str) {
        var functionStr = str;
        var tmpFunction = Function(functionStr);
        return tmpFunction;
    }

    window.Interface = function Interface(name, methods) {
        if (!Interface.interfaces) {//缓存interface 定义
            Interface.interfaces = new Object;
        }
        else if (Interface.interfaces[name]) {//如果已经定义过直接返回
            return Interface.interfaces[name];
        }


        if (!methods) {
            throw new Error("methods does not define");
        }
        function instance() {

        }

        for (var i = methods.length;i--;) {//在要返回的inastce 中添加interface 中定义的method
            var consturctStr, funName = methods[i];
            if (typeof (funName) == "string") {
                consturctStr = "throw new Error('" + methods[i] + " must override')";
                instance.prototype[funName] = decompile(consturctStr);
            }
        }
        
        return Interface.interfaces[name]=new instance();


    };
})(window);


// with (window.liz) {
//     var names = new List();
//     names.append("Cynthia");
//     names.append("Raymond");
//     names.append("Barbara");
//     print(names.toString());
//     names.remove("Raymond");
//     print(names.toString());

// }
