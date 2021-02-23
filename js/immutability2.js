//불변성

const array = [1,2,3,4];
const sameArray = array;

sameArray.push(5);
console.log(array === sameArray); // true


/** 배열 불변성 유지 */
const array2 = [1,2,3,4];
const differrentArray = [ ...array, 5];

console.log(array2 === differrentArray); //false

/** 객체 불변성 유지 */

const object = { 
    foo : 'hello',
    bar : 'world'
};
const sameObject = object;
sameObject.baz = 'bye';
console.log(sameObject === object);

console.log("======불변성 유지 전 =====");
console.log("object : " , object);
console.log("sameObject : " , sameObject);


console.log("======불변성 유지 후 =====");

const object2 = { 
    foo : 'hello',
    bar : 'world'
};

const differrentObject2 = {
    ... object,
    baz : 'bye'
};
console.log(differrentObject2 === object2);



