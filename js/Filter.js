

/* 필터 구문 

  var newArray = arr.filter(callbackFunction(element, index, array), thisArg);
   element : 요소값
   index : 요소의 인덱스
   array : 사용되는 배열 객체
   thisArg : filter에서 사용될 this, 선택적이며 사용하지 않을 경우 undefined.
*/

// Example#1

var testArray = [1,2,3,4,5];
var new_Array = testArray.filter(function(element,index,array){
    console.log("element : " , element);
    console.log("index : " ,   index);
    console.log("array : " ,   array);
    
})

console.log("==================================");
var new_Array2 = testArray.filter(function(element){
    return element >= 7;
});
console.log(new_Array2);


var new_Array3 = testArray.filter( element => {
    return element <=3;
});
console.log("new_Array3 : " + new_Array3);


// 정수배열에서 5의 배수인 정수만 모으기
/*
var arr = [4,15,377,395,400,1024,3000];
//callback 함수의 retrun은 boolean, return이 true인 애들만 모아서 새로운 배열을 생성. 생략시 return은 undefined 이므로 빈 배열 생성됨.
var arr2 = arr.filter( function(n){
    return n%5 ==0;
});

console.log(arr2); // [15, 395, 400, 3000]


var arr = [4, 377, 1024];
var arr2 = arr.filter(function (n) {
    return n % 5 == 0;
});
console.log(arr2); // []
*/

/*
const temp = [1,2,3,4,5];
var filterArray = temp.filter(function(name){
    return name!==3;
});

console.log(filterArray);

const temp2 = [1,2,3,4,5];
var filterArray2 = temp2.filter(name => name!=3); // arrows 문법중 x => x * x  함수 몸체가 한줄의 구문이라면 중괄호를 생략할 수 있으며 암묵적으로 return된다. 위 표현과 동일하다.
console.log(filterArray2);
*/
