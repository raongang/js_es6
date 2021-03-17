/**
 *  호이스팅시 함수,변수의 우선순위.
     - 함수 선언문과 변수 할당문이 존재할경우, 변수 a선언 -> 함수 a선언 -> a에 값할당 순으로 실행되겠습니다.
 */

var myName = "hi";

function myName() {
  console.log("yuddomack");
}
function yourName() {
  console.log("everyone");
}

var yourName = "bye";

console.log(typeof myName);
console.log(typeof yourName);

/** 호이스팅시
var myName;
var yourName;

function myName() {
  console.log("yuddomack");
}
function yourName() {
  console.log("everyone");
}

myName = "hi";
yourName = "bye";

console.log(typeof myName);
console.log(typeof yourName);
 */