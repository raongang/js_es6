
/**
 * 
 *    객체 및 배열 리터럴 표현식을 사용하면 즉석에서 쉽게 데이터 뭉치를 만들 수 있습니다.
 *     var x = [1, 2, 3, 4, 5];
 *    구조 분해 할당의 구문은 위와 비슷하지만, 대신 할당문의 좌변에서 사용하여, 원래 변수에서 어떤 값을 분해해 할당할지 정의합니다.
 */

console.log("=========배열 구조 분해===========");

var [a, b] = [1,2,3];
console.log(a); //1
console.log(b); //2

console.log("=========================");

var [a,...b] = [1,2,3];
console.log(a); //1
console.log(b); //[2,3]

console.log("=========객체 구조 분해===========");

var o = {p: 42, q: true};
var {p,q} = o;
console.log(p);
console.log(q);

console.log("=========================");

({a,b} = {a:1,b:2});
console.log(a);
console.log(b);

console.log("=========================");

//기본값 할당
var {a = 10, b = 5} = {a: 3};
console.log(a); // 3
console.log(b); // 5

console.log("=========================");


//기본값 갖는 새로운 이름의 변수에 할당.
var {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5