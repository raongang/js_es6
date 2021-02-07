/**
 * 
 *  4. 'new' Keyword
 *    - 빈 객체가 생성되고 해당 빈 객체에 this가 할당된다.
 */

 //Example #1
 /*
 function foo(){
     console.log(this); //빈 객체가 생성됨.
 }

 new foo(); 
 */

  // Example #2
  /*
  function foo(){
      this.name = '바닐라코딩';
  }

  var vanillaCoding = new foo(); //빈객체가 생성되고 여기에 this.name값이 할당됨.
  console.log(vanillaCoding); // 바닐라코딩
  */

  // Example #3
  /*
  function foo(name){
      this.name = name;
  }

  var vanillaCoding = new foo('바닐라코딩');
  console.log(vanillaCoding); //바닐라코딩
  */

  //Example #4
  // A function used with 'new' keyword : Constructor function (생성자 함수)

  /*
  function Person(name, age){
      this.name = name;
      this.age = age;
  }

  // Called "instances"
  var ken = new Person('ken huh', 34);
  var wan = new Person('wan huh', 30);
  
  console.log(ken);
  console.log(wan);

*/

// Example #5
/*
function Person(name){
    console.log('this >> ' + this);
    console.log("this.name >> " + this.name);
    console.log("name >> " + name);
    this.name = name;
}

var you = Person('Kim');
console.log(you);
*/

// Example #6
function Person(name) {
    // new없이 호출하는 경우, 전역객체에 name 프로퍼티를 추가
    this.name = name;
  };
  
  // 일반 함수로서 호출되었기 때문에 객체를 암묵적으로 생성하여 반환하지 않는다.
  // 일반 함수의 this는 전역객체를 가리킨다.
  var me = Person('Lee');
  
  console.log(me); // undefined
  console.log(window.name); // Lee