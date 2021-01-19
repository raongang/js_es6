
//ES6이전의 클래스 구현법

function Dog(name){
    this.name = name;
}

Dog.prototype.say = function() {
    console.log(this.name + ': 멍머');
    console.dir(dog);
};


var dog = new Dog('검둥이');
dog.say();

//ES6 의 클래스

class Dog2 { 
    constructor(name){
        this.name = name;
    }

    say2(){
        console.log(this.name + ' : 멍멍');
    }
}
const dog2 = new Dog2('흰둥이');
dog2.say2();