/* Immutability  
   - 불변성
   - 데이터의 원본이 훼손되는 것을 막는 것
*/
 
// Example #1 이름에 대한 Immutability - const 키워드 사용
/*
const a = 1;
a = 2; // error
*/

// Example #2  내용에 대한 Immutability
/*
var p1 = 1;
var p2 = 1;

console.log(p1===p2); //true

var o1 = {name:'kim'};
var o2 = {name:'kim'};

console.log(o1===o2); //false
*/

// Example #3  원본 객체를 수정하지 않고 복제본을 수정하는 방법

var temp1 = {name:'kim', score : [1,2]}
var temp2 = Object.assign({},temp1);

console.log("temp2 : " + temp2.score);
//temp2.score = temp2.score.concat(); //temp2.score를 복제한다.

/*
- Nested Data의 복제 (concat)

Object가 Object 형태로 내부 property를 갖고 있는 경우 Nested Data (중첩된 데이터)라고 부른다.
아래와 같이 Array(Object)를 property로 가지고 있는 경우, 해당 값 변경 시 원본 데이터 값이 영향을 받게 된다.
따라서 Object와 내부 property 값도 복제(concat)해서 사용해야 원본 데이터를 유지할 수 있다.
*/
temp2.score.push(3);  //concat없이 이렇게 해버리면 temp1의 score도 1,2,3으로 변경되어 버림.


console.log(temp1,temp2, temp1===temp2, temp1.score === temp2.score);
console.log("========================================");

// Example #4
//이렇게 JS는 함수의 파라미터의 인자가 원시 데이터인지 객체인지에 따라 동작 방법이 달라진다.
//따라서 아래와 같이 함수를 정의할 때 원본 데이터를 유지할 것인지 아닌지에 따라 assign, concat 함수를 통해 불변성을 유지해야 한다.

/*
function fn(person){
    persion = Object.assign({}, person);
    person.name = 'lee';
    return person;
}

var o1 = {name:'kim'};
var o2 = fn(o1);
console.log(o1,o2); // {name : 'lee' }
*/

function fn(person){
    person.name = 'lee';
}

var o1 = {name:'kim'};
var o2 = Object.assign({},o1);
fn(o2);
console.log(o1,o2); //{name:'kim'} {name:'lee'}

// Example #5
var score = [1,2,3];
var a = score;
var b = score;
// 1~
// score.push(4);
var score2 = score.concat(4);
console.log(score, score2, a, b); // [1,2,3] [1,2,3,4] [1,2,3] [1,2,3]
