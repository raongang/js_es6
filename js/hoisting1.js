/**
 *   var 변수의 호이스팅
 *     - 호이스팅은 var을 통해 정의된 변수의 선언문을 유효 범위의 최상단으로 끌어올리는 행위
 *     - 선언과 할당의 분리'라고 생각하면 기억하기 좋을 것 같습니다.
 * 
 *     - let, const, new Function은 호이스팅 일어나지 않음.
 */


if(true){
    var name = 'yuddomack';
  }
  console.log(name);


  for(var i=0; i<5; i++){
    // do something
  }
  console.log(i);  

/** 호이스팅 결과 */

var name; // 선언
if(true){
  name = 'yuddomack'; // 할당
}
console.log(name);

