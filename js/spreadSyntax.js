/* 전개구문
전개 구문을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있습니다.
*/

// Example #1
function sum(w,x,y,z){
    console.log("w >> " + w + " x >> " + x + " y >> " + y + " z >> " + z);
    return w+x+y+z;
}

const numbers = [1,2,3];

//sum(...numbers);
//sum(...numbers,4);

//전개구문 이용전.
//sum.apply(null,numbers);
/*
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

*/


/* findIndex 
   arr.findIndex(callback)   
       - 반환값 number, 없다면 -1 
       - callback(element, index,array) -> 각 element는 findIndex메소드를 호출한 배열에서 받아옴.
       - 원하는 요소를 찾자말자 메소드 종료.
       - callback 의 elements,index 생략가능

const arr = [5, 6, 1,2];

const findIndex = arr.findIndex( (element, index, array)  => {
    console.log("element >> " , element);
    console.log("index >> " , index);
    console.log("array >> "  , array);

    return index > 1 && index <  3; 
});
 
console.log("findIndex >> " , findIndex);
*/

/**/ 
console.log("====== react 응용 =======");

var state = { 
    input : '',
    todos : [
        { id:0, text:'리액트소개', checked : false},
        { id:1, text:'리액트소개', checked : true},
        { id:2, text:'리액트소개', checked : false}
    ]
}

//const {input, ...reset} = state;
//console.log("input >> " , input);
//console.log("reset >> " , reset);

const { todos } = state;

//const index  = todos.findIndex( todo => {
//   console.log("todo.id >> " , todo.id);
//    return todo.id === 2
//})
//console.log(index);

const index2 = todos.findIndex(todo => todo.id === 2);
//console.log(index2);


const selected = todos[index2];
//console.log(selected);

const nextTodos = [ ...todos];
console.log(nextTodos);

nextTodos[index2] = {
    ...selected,
    checked:!selected.checked
}

console.log(nextTodos);