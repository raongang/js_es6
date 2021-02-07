/**
 * 
 *  3. Function.prototype.call, Function.prototype.bind, Function.prototype.apply
 *  
 */

 // Example #1
 /*
 var age = 100;

 function foo(){
     console.log(this.age);
 }

 var ken = {
     age : 35
 };

 var wan = { 
     age : 31
 };

 foo(); //일반 함수 호출이니깐 100
 foo.call(wan); // wan 객체로 바뀌어서 31
 foo.apply(ken); // ken객체로 바뀌어서 35

 */

 // Example #2
/*
 var age = 100;

 function foo ( a,b,c,d,e) {
     console.log (this.age);
     console.log(arguments);
 }

 var ken = {
     age : 35
 };

 foo.call(ken,1,2,3,4,5);
 foo.apply(ken,[1,2,3,4,5]);
 */

 // Example #3 

 /*
 var age = 100;

 function foo() {
     console.log ( this.age );
 }

 var ken = {
      age : 34
 };

 var bar = foo.bind(ken); // bind? 첫번째 인자를 this값으로 설정한다. call, apply와 다르게 함수를 바로 실행하지는 않는다.
 bar(); //34 - 일반실행함수가 아니라 bind를 이용한것이기 때문에 window age를 가져오는게 아님.
 
*/

// Example #4
/*
var age = 100;

function foo() {
    console.log ( this.age );
    console.log(arguments);
}

var ken = {
    age : 34
};

var bar = foo.bind(ken);
bar(1,2,3,4,5);
*/