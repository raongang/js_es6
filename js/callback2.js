//callback 적용전
/*
function findUser(id) {
    const user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com",
    }
    return user
  }

  const user = findUser(1);

  for(var key in user){
      console.log("Attributes : " + key + ", value : " + user[key]);
  }
  */
  

  /* callback 적용후  

  function findUserAndCallBack(id,callback){
      const user = { 
          id : id,
          name : "User" + id,
          email : id + "@test.com",
      }
      callback(user);
  }

  findUserAndCallBack(1,function(user){
    for(var key in user){
        console.log("Attributes : " + key + ", value : " + user[key]);
    }
  });
  */

  /*
     callback 함수를 이용한 동기,비동기 방식 
       - 비동기(Asynchronous) 함수란 쉽게 설명하면 호출부에서 실행 결과를 가다리지 않아도 되는 함수입니다. 
        반대로 동기 함수(Synchronous) 함수는 호출부에서 실행 결과가 리턴될 때 까지 기다려야 하는 함수입니다.
 

  // Example #1
  function asyncFindUser(id){
      let user     ;
        setTimeout(function(){

            console.log("waited 0.1 sec");

            user = {
                id : id,
                name : "User" + id,
                email : id + "@test.com",
            }
        },100)
        return user;
  }


  const user = asyncFindUser(1);
  console.log(user);

  console.log("=====================");
  
   */
  /*
  // Example #2
  function findUserAndCallback(id,cb){
      setTimeout(function(){
        console.log("waited 0.1 sec.")
        
        const user = {
            id : id,
            name : "User" +  id,
            email : id + "@test.com",
        }
        cb(user)
      },100);
  }

  findUserAndCallback(1,function(user){
      console.log("user : ",user);
  })  */