//기본 문법(객체)
//객체도 배열과 마찬가지로 일일히 값을 따로 넣어주려면 번거롭다.
// const animals = {
//     cat: "CAT",
//     dog: "DOG",
//     tiger: "TIGER"
//   };
//   const cat = animals.cat;
//   const dog = animals.dog;
//   const tiger = animals.tiger;
//   console.log(cat); // CAT
//   console.log(dog); // DOG
//   console.log(tiger); // TIGER

 
//위와 같이 작성하면 비구조화 할당을 수행하며, 배열의 경우 좌항의 index값에 값에 할당되었다면, 객체는 같은 key에 있는 값이 담긴다.
//   const { cat, dog, tiger } = {
//     cat: "CAT",
//     dog: "DOG",
//     tiger: "TIGER"
//   };
//   console.log(cat); // CAT
//   console.log(dog); // DOG
//   console.log(tiger); // TIGER


//   //나머지 패턴 

//   const { cat, ...rest } = {
//     cat: "CAT",
//     dog: "DOG",
//     tiger: "TIGER"
//   }
//   console.log(cat); // CAT
//   console.log(rest); // {dog: "DOG", tiger: "TIGER"}


//   //원래의 키 대신 다른 변수명 사용.
//   const { cat: catName, dog: dogName, ...rest } = {
//     cat: "CAT",
//     dog: "DOG",
//     tiger: "TIGER",
//     monkey: "MONKEY"
//   }

//   console.log(catName); // CAT
//     console.log(dogName); // DOG
//     console.log(rest); // {tiger: "TIGER", monkey: "MONKEY"}


// 객체 비구조화시에 변수 선언 키워드가 없는 경우
//아래처럼 const를 안쓰고 하면 ()를 넣어줘야 한다.
//let temp1, temp2;
//const { temp1, temp2 } = { temp1: "CAT", temp2: "dog" }

//console.log(temp1);
//console.log(temp2);

//console.log("========================");

// ({ temp3, temp4 } = { temp3: "CAT2", temp4: "dog2" })
// console.log(temp3);
// console.log(temp4);

//console.log("========================");


state = {
    editing: false,
    name: "",
    phone: "",
};
//console.log(state);
//const { editing } = state
//console.log(editing);

const { c, d, e = 3 } = { c: 1 };
console.log(d); // undefined
console.log(e); // 3
