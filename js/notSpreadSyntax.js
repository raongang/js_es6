//전개구문 없이 파라미터의 배열과 함께 new를 사용할 경우.

function myConstructor(){
    console.log("argument.length : " + arguments.length);
    console.log(arguments);

    this.prop1 = "val1";
    this.prop2 = "val2";
}

function applyAndNew(constructor,args){

    console.log(args);

    function partial () {
        return constructor.apply(this, args);
     };


     console.log(constructor.prototype);

    if(typeof constructor.prototype === "object"){
        partial.prototype = Object.create(constructor.prototype);
    }

    console.log(partial.prototype);

    return partial;
}



var myArguments = ["hi", "how", "are", "you", "mr", null];
var myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

