
/** 
 *  메소드의 내부 함수일 경우에도 this는 전역객체에 binding.
 */

 // Example #1

 /*
 var value = 1;

 var obj = {
     
     value : 100,
     printMessage : console.log(this.value),
     foo : function(){
         //console.log("foo's this " , this);
         console.log("foo's this.value " , this.value);
         
         function bar() {
           // console.log("bar's this: ",  this); // window
            console.log("bar's this.value: ", this.value); // 1
          }
          bar();

     }
 };
 obj.printMessage; //객체의 변수값을 가져오는거랑 이때 this는 전역객체.
 obj.foo();
*/


/** 
 *  콜백함수의 경우에도 this는 전역객체 바인딩.
 */


 // Example #2
 /* 
var value = 1;

var obj = {
  value: 100,
  foo: function() {
      console.log('foo outer function this ' , this.value); //100
    setTimeout(function() {
      console.log("callback's this: ",  this);  // window
      console.log("callback's this.value: ",  this.value); // 1
    }, 100);
  }
};

obj.foo();
*/


// Example #3 - Example #2의 해결법1
/*
var value = 1;

var obj = {
  value: 100,
  foo: function() {
      var that = this;
      console.log('foo outer function this ' , this.value); //100
    setTimeout(function() {
      console.log("callback's that: ",  that)
      console.log("callback's that.value: ",  that.value); 
    }, 100);
  }
};

obj.foo();
*/


// Example #3 - Example #2의 해결법2

var value = 1;

var obj = {
  value: 100,
  foo: function() {
    console.log("foo's this: ",  this);  // obj
    console.log("foo's this.value: ",  this.value); // 100
    
    function bar(a, b) {
      console.log("bar's this: ",  this); // obj
      console.log("bar's this.value: ", this.value); // 100
      console.log("bar's arguments: ", arguments);
    }
    bar.apply(obj, [1, 2]);
    bar.call(obj, 1, 2);
    bar.bind(obj)(1, 2);
  }
};
obj.foo(); 