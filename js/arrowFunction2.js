/**
 * 
 *  화살표 함수의 this 
 *   - 일반 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정
 *   - 화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정
 *   - 화살표 함수의 this 언제나 상위 스코프의 this를 가리킨다 => Lexical this.
 * 
 */

 // Example #1

 function Prefixer(prefix){
     this.prefix = prefix;
 }

 Prefixer.prototype.prefixArray = function(arr){
     return arr.map(x => '${this.prefix} ${x}');
 };

 const pre = new Prefixer('hi');
 