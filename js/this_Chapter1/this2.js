
  /**
    *  1. Regular function call - 일반 함수 실행 방식
    */

//Example #1
/*
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
*/

// Example #3
/*
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
*/

// ※ 중요  Example #4
// 기본적으로 this는 전역객체(global object) 에 바인딩된다. 전역함수는 물론이고, 심지어 내부 함수의 경우에도 this는 외부함수가 아닌 전역함수에 바인딩된다.

function outer(){
    console.log('outer this : ' , this); //windows
    function inner(){
        console.log('inner this : ' , this); //windows
    }
    inner();
}
outer();
