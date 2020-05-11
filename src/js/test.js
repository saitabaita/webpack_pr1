'use strict'
/*var Quo = function(string){
    this.status = string;
}
Quo.prototype.get_status = function(){
    return this.status;
}
var myQuo = new Quo('confused');
console.log(myQuo.get_status());
*/
var add = function(a,b){
    return a+b;
}
var arr=[3,4];
var sum = add.apply(null, arr);
console.log(sum);

var quo = function(status){
    return {
        get_status: function(){
            return status;
        }
    }
}
var myquo = quo('dsdfasdf');
console.log(myquo.get_status());
