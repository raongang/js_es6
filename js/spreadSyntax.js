//전개구문

// Example #1


function sum(w,x,y,z){
    console.log("x >> " + x + " y >> " + y + " z >> " + z);
    
    return w+x+y+z;
}

const numbers = [1,2,3];

console.log(sum(...numbers));
console.log(sum(...numbers,4));

//sum.apply(null,numbers);
