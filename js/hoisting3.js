//함수 호이스팅 

// Example#1

/*
sayName();

function sayName(){
  console.log('yuddomack');
}
*/

/** 호이스팅시 아래처럼 변환
 * 
    function sayName(){
        console.log('yuddomack');
    }

    sayName();
 */

 // Example#2 

 sayName();
 var sayName = function(){
     console.log("sayName");
 }

 /** 함수 호이스팅시 

 var sayName;

sayName();

sayName = function(){
  console.log('yuddomack');
}
*/