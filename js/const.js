


// var scope가 유효한 것은 function안에서이다.
function Foo(){
    var a = 'hello';
    if(true){
        var a = 'bye';
        console.log(a); //bye

    }
    console.log(a); //bye
};

var f = new Foo();
