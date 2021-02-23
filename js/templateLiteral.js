/**
 * 
 * 템플릿 리터럴은 내장된 표현식을 허용하는 문자열 리터럴입니다. 
 * 여러 줄로 이뤄진 문자열과 문자 보간기능을 사용할 수 있습니다. 이전 버전의 ES2015사양 명세에서는 "template strings" (템플릿 문자열) 라고 불려 왔습니다. 
 * css 클래스를 유동적으로 설정하고자 할 경우에도 사용할 수 있습니다.
 */

console.log(`string text`);

`string text line1
string text line2`

//`string text ${expression} string text`
//tag `string text ${expresssion} string text`


// Example#1 - Expression interpolation(표현식 삽입법)

var a = 5;
var b = 10;
console.log("Fifteen is " +  (a+b) + " and\nnot " + (2*a+b) + ".");
console.log(`Fifteen is ${a+b} and not ${2*a+b}.`);
