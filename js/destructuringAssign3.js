/* 함수에서의 비구조화 할당 */

 function renderUser({name,age,addr}) {
     console.log(name + " " + age + " " + addr);
 }

 const users = [
     {name: 'kim', age: 10, addr:'kor'},
     {name: 'joe', age: 20, addr:'usa'},
     {name: 'miko', age: 30, addr:'jp'}
   ];

/*
 users.map(function(user){
    renderUser(user);
 })
 */

 /*
 users.map((user) => {
     renderUser(user);
 });
 */

// conse
/*
 const Myname = function printMessage(gender,age){
   return gender + age;
 };

const MyName = ({gender, age}) => { 
  console.log(gender);
};
*/
 //console.log(Myname('man',20));



 //react에서 주로 쓰는 문법.
const myname2  = ({gender,age}) => {
  
  console.log({gender});
  console.log({age});

  console.log("====================");
  console.log(gender);
  console.log(age);

  console.log("====================");

}

myname2({gender:'man',age:20});


