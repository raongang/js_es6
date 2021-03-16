/**
 *  js에서 클래스 메소드는 기본적으로 바인딩 되지 않는다.
 */

 // Example#1

 const  temp = {
     x : 42,
     getX : function(){
         return this.x;
     }
 };

 const unboundGetX = temp.getX;
 console.log(unboundGetX()); //undefined


 