
/**
 * 
 *  this 개념 정리.

*  'this'의 값은 'this'를 사용하는 해당 함수를 '어떻게' 실행하느냐에 따라 바뀐다.
*  함수를 실행하는 방법엔 크게 4가지가 있음.
* 
* (this를 이용하는) 해당 함수를 이 4가지중 어떤 방식으로 실행하느냐에 따라 this값은 바뀜.
* 
*/

/**/
 var name ='window name';

 function log(){
     var name="테스트";
     console.log(this.name); //'this' is always an object(객체).
 }

 var obj = {
    name : 'ken',
    logName : log
 };

  log(); //window name;
  obj.logName(); //ken

  console.log("=================================");



 

