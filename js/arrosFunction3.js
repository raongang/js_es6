
  //초기세팅
  id=3;

  //객체형식이어야한다.
  state = {
    input : '',
    users : [
      {
        id : 1,
        username : 'velopert'
      },
      {
        id:2,
        username : 'mjkim'
      }    
    ]
  }



/*리액트 응용 에제#1
  function onButtonClick(){

    const { input, users} = this.state;


    const {temp, temp2} = {
        temp2: '',
        temp : users.concat({
            id: this.id++,
            username: input
        })
    }
    console.log(temp);
    console.log(temp2);
}
onButtonClick();
*/

/* 리액트 응용예제 #2 */
function onButtonClick(){
    
    const { input, users} = this.state;
    
    ({ temp, temp2 }) => ({
        temp2: '',
        temp : users.concat({
            id: this.id++,
            username: input
        })
    })

}
onButtonClick();