/**
 * 
 *  Dot Notationo - 점 방식 ... (?!)
 *   - 점 앞의 객체가 this로 설정된다.
 */

 // Example #1
/*
 var age = 100;

 var ken = {
     age : 35,
     foo : function foo(){
        console.log(this.age);
        console.log(ken.age);
     }
 };

 //ken이 this로 설정된다.
 ken.foo(); //35
*/

 // Example #2
/*
function foo(){
    console.log(this.age);
}

var age = 100;

var ken = {
    age : 35,
    foo : foo
};

var wan = {
    age : 31,
    foo : foo
};

ken.foo(); //35
wan.foo(); //31
*/

//Example3
var age = 100;

var ken = {
    age : 35,
    foo : function bar(){
        console.log(this.age);
    }
};

var wan = {
    age : 31,
    foo : ken.foo
};

var foo = ken.foo;

ken.foo(); //35
wan.foo(); //31
foo(); // ※ 이거 dot 방식이 아니라 일반방식 함수 호출이니깐 window 객체를 가르키므로 this = 100이 된다.

