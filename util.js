var util = require('util');
//inherits:原型继承
function Base() {
    this.name = 'base';
    this.base = 1001;
    this.sayHello = function () {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function () {
    console.log(this.name);
};
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//Sub只继承了原型中定义的函数，构造函数中的属性和函数都没有被继承。
//以下语句不被注释将报错
//objSub.sayHello();
console.log(objSub);

/**inspect:将任意对象转换为字符串
 * params:{
 *  obj:"对象",
 *  showHidden:"输出更多隐藏信息",
 *  depth:"最大递归的层数",
 *  color:"显示的颜色"
 * }
 */

function Person() {
    this.name = 'jian zm';
    this.toString = function () {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

//判断对象是数组？正则表达式？日期？错误对象？
console.log("数组？"+util.isArray([]));
console.log("正则？"+util.isRegExp(/[1-9]/));
console.log("日期？"+util.isDate(new Date()));
console.log("错误？"+util.isError(new Error()));