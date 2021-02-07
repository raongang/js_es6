/**
 *   let 과 const의 this 차이.
 *    
 * 
 */

 // example #1

 function Prefixer(prefix) {
    this.prefix = prefix;
  }
  
  Prefixer.prototype.prefixArray = function (arr) {
    
    return arr.map(function (x) {
        //생성자 함수와 객체의 메소드를 제외한 모든 함수는(내부함수, 콜백함수) 내부의 this는 전역객체를 가르킨다.
      return this.prefix + ' ' + x; 
    });
  };
  
  var pre = new Prefixer('Hi'); // __prototype__ => Prefixer.prototype 
  console.log(pre);
  console.log(pre.prefixArray(['Lee', 'Kim'])); //점 방식이니 this는 pre를 가르킨다. // undefined Lee, undefined Kim