// setTimeout(function(){
//     console.log('hello world');
// },1000);

// setTimeout( () => { 
//     console.log('hello world');
// },1000)

//위 둘의 차이는 가르키는 this값이 다르다.

function BlackDog(){
    this.name = '흰둥이';

    return { 
        name : '검둥이',
        bark : function(){
            console.log(this.name + ' : 멍멍!');
        }
    }
}

const blackDog = new BlackDog(); 
blackDog.bark();//검둥이 멍멍! -> 자신이 종속된 객체를 this로 가르킴.


function WhiteDog(){
    this.name = '흰둥이';
    return {
        name : '검둥이',
        bark :  () => {
            console.log(this.name + ' : 멍멍!');
        }
    }
}

const whiteDog = new WhiteDog();
whiteDog.bark(); //흰둥이 멍멍! -> 자신이 종속된 인스턴스를 가르킨다.
