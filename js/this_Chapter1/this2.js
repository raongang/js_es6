
  /**
    *  1. Regular function call - 일반 함수 실행 방식
    */

//Example #1

function foo(){
    console.log(this); // 'this' === global object (브라우저상에서는 window 객체)
}

foo();

console.log("=================================");



// Example #2

'use strict';
var name2 = 'ken2';
function foo2(){
    console.log(this.name2); //'this' === undefined 
}

foo2();

console.log("=================================");


// Example #3

var age = 100;
function foo3(){
    var age = 99;
    bar();
}

function bar(){
     //함수가 실행되는 부분이 일반 함수모드로 foo3()임. 따라서 windows 객체를 가르키니깐 100.
    console.log(this.age);
}

foo3(); //100
