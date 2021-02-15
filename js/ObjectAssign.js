//Object.assign() 메소드는 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용합니다. 대상 객체를 반환합니다.

const target = { a : 1 , b : 2 };
const source = { b : 4 , c : 5};

const returnedTarget = Object.assign(target,source);

// target것도 덮어쓰기가 된다.
console.log(target);  // expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // expected output: Object { a: 1, b: 4, c: 5 }

console.log("================================");
const returnedTarget2 = Object.assign({},target,source);
console.log(target);
console.log(soruce);
console.log(returnedTarget2);



