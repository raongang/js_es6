/**
 * 
 *  Bonus Session : Event Handler
 * 
 */

 let element = document.querySelector("#vanilla");

 element.addEventListener("click",function onClick(ev){
    console.log(this);
    console.log(ev.target);
    console.log(ev.currentTarget);
 });