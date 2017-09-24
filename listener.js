//导入events模块
var events = require('events');
//创建EventEmitter对象
var eventEmitter = new events.EventEmitter();
//监听器1
var listener1 = function () {
    console.log("使用addListener绑定的监听器。");
}
//监听器2
var listener2 = function () {
    console.log("使用on绑定的监听器。");
}
//监听器3
var listener3 = function () {
    console.log("只触发一次的监听器");
}

//使用on绑定监听器2
eventEmitter.on('listener', listener2);
//使用addListener绑定listener1
eventEmitter.addListener('listener', listener1);
//使用once绑定listener3
eventEmitter.once('listener', listener3);

//输出listener事件绑定的所有listener
console.log(eventEmitter.listeners('listener'));
eventEmitter.emit("listener");
eventEmitter.emit("listener");
//执行2次后，listener3应该被移除
console.log(eventEmitter.listeners('listener'));
eventEmitter.removeListener('listener',listener1);
//手动移除listener1
eventEmitter.emit("listener");
console.log(eventEmitter.listeners('listener'));


