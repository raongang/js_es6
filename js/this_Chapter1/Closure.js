

//Example #1
function getClosure(){
    var text = 'variable 1';

    //반환된 함수가 클로저이며 만들어진 환경을 기억한다. 즉 text값을 알고 있다
    return function(){
        return text;
    };
}

var closure = getClosure();
console.log(closure());

console.log("==================================");

// Example #2 

var base = 'Hello, ';
function sayHelloTo(name){
    var text = base + name;
    return function(){
        console.log(text);
    };
}

var hello1 = sayHelloTo('test1');
var hello2 = sayHelloTo('test2');
var hello3 = sayHelloTo('test3');

hello1();
hello2();
hello3();

console.log("==================================");