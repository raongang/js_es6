/**
 * Map함수  
 *  1. map함수는 callbackFunction을 실행한 결과를 가지고 새로운 배열을 만들 때 사용한다.
 *  2. 형식 : array.map(callbackFunction(currenValue, index, array), thisArg)
 *  3. 파라미터
 *    - currentValue : 배열 내 현재 값
 *    - index : 배열 내 현재 값의 인덱스
 *    - array : 현재 배열
 *    - thisArg : callbackFunction 내에서 this로 사용될 값
 */

const days = ["Mon", "Tue", "Wed", "Thus", "Fri"];

days.map(function(elements,index,array){
    console.log("element : " , elements);
    console.log("index : " ,   index);
    console.log("array : " ,   array);
});

//출력방법1) arrow 연산자 이용.
days.map(day=>console.log(day));

//출력방법2) 일반 함수 출력.
days.map(function(element){
    console.log(element);
});