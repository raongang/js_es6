
/* 비구조화 할당 
    - ECMAScript6(2015) 에서 새로 추가됨.
    - 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식.
*/


//const animalList = ["CAT", "DOG", "TIGER"];
//const cat = animalList[0];
//const dog = animalList[1];
//const tiger = animalList[2];

//위에처럼 하나씩 하기 힘드니 비구조화 할당 이용
//좌항이 호출될 변수명 집합, 우항이 할당될 값. 좌항의 각 요소에는 같은 index를 가지는 배열값이 할당된다.
const [cat, dog, tiger] = ["CAT", "DOG", "TIGER"];

console.log(cat);
console.log(dog);
console.log(tiger);


//나머지 패턴
const [cat2, ...rest] = ["CAT2", "DOG2", "TIGER2"];
console.log(cat2); // CAT2
console.log(rest); // ["DOG2", "TIGER2"]

//배열체로 받아오기
const array = [1,2];
const [one,two] = array;
console.log("=========================");
console.log(one);
console.log(two);