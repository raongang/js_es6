/* 함수에서의 비구조화 할당

 function renderUser({name,age,addr}) {
     console.log(name);
     console.log(age);
     console.log(addr);
 }

 const users = [
     {name: 'kim', age: 10, addr:'kor'},
     {name: 'joe', age: 20, addr:'usa'},
     {name: 'miko', age: 30, addr:'jp'}
   ];

 users.map((user) => {
     renderUser(user);
 }); */


  // const MyName = ({gender, age}) => { 
  //   return (console.log(gender+age))
  // };

  // conse


// const Myname = function printMessage(gender,age){
//   return gender + age;
// };

// console.log(Myname('man',20));

/*
const myname2  = (gender,age) => {
  return gender + age;
};

console.log(myname2('man',20));
*/