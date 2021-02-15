/* 전개구문
전개 구문을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있습니다.
*/

// Example #1
function sum(w,x,y,z){
    console.log("x >> " + x + " y >> " + y + " z >> " + z);
    
    return w+x+y+z;
}

const numbers = [1,2,3];

console.log(sum(...numbers));
console.log(sum(...numbers,4));

//전개구문 이용전.
//sum.apply(null,numbers);

console.log("======apply() 대체=======");

function myFunction(v,w,x,y,z) {}
var args = [0,1];
myFunction(-1,...args,2,...[3]);

console.log("======new에 적용=======");

var dateFields = [1970,0,1];
var d = new Date(...dateFields);
console.log(d);

console.log("======배열리터럴 사용=======");
//push(), splice(), concat() 등의 조합을 사용하는 대신 명령형 코드를 사용해야 했습니다. 전개 구문으로 이는 훨씬 더 간결해졌습니다.
var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
// ["head", "shoulders", "knees", "and", "toes"]


console.log("======객체리터럴 사용=======");

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }