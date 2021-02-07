
/* 
      let keyword
      Const Keyword는 let과 같지만 상수로 표현되는 것만 다름.
 */

 var a =1;
 function Test1(){
     console.log(a);

     var b = 2;
     if(true){
         var c = 3;
         //여기서 error안남. 
         console.log(b);
     }

     console.log(c);
 }

 Test1();

 // let은 위의 헷갈리고 문제가 될수 있는 부분을 보완하게 위해 나온 block scope 형 변수임.

 console.log("========================");

 let aa = 1;
 function Test11(){
     console.log(aa);

     let bb = 2;
     if(true){
         let cc = 3; 
         console.log(bb); // if안에서만 유효
     }

     //console.log(cc);
 }

 Test11();
