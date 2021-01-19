function fn(person){
    person.name = 'lee';
}

var o1 = {name : 'kim'}
var o2=  Object.assign({},o1);
fn(o2);

console.log(o1,o2);


var score = [1,2,3];
var a =  score;
var b = score;

//score.push(4);

var score2  = score.concat(4);

console.log(score);
console.log(score2);
console.log(a);
console.log(b);