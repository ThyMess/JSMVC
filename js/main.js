var Class = function(){
    var klass = function(){
        this.init.apply(this,arguments);
    }
    klass.prototype.init = function(){}
    return klass;
}

var Person = new Class;
Person.prototype.init = function(){
    //实例做初始化

}
//用法
var person = new Person;//实例化