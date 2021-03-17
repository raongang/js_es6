

/**
 *   var의 함수 호이스팅.
       - 자바스크립트의 var는 단순한 블록{ }이 아닌 함수 블록function{ } 안에서 유효합니다. 이를 var는 함수 스코프에서 유효하다 라고 합니다.
       - var는 함수 스코프에서 유효하기 때문에 호이스팅 시, 선언문은 글로벌 스코프가 아닌 유효범위(함수) 내부의 최상단에 위치하게 됩니다.
 */

function ho1(){
    if(true){
      var name = 'yuddomack';
    }
    console.log(name);
  }

  ho1();


  function ho2(){
    for(var i=0; i<5; i++){
      // do something
    }
    console.log(i);
  }
  
  ho2();

  if(true){
    var score = 100;
  }
  console.log(score);


  /** 호이스팅 결과  */

var score; // 선언

function ho1(){
  var name; // 선언

  if(true){
    name = 'yuddomack'; // 할당
  }
  console.log(name);
}

function ho2(){
  var i; // 선언

  for(i=0; i<5; i++){ // 할당
    // do something
  }
  console.log(i);
}

if(true){
  score = 100; // 할당
}
console.log(score);