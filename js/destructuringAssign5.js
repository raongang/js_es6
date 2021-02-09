
//함수 매개변수의 기본값 설정.

//ES5 version 

function drawES5Chart(options) {
    options = options === undefined ? {} : options;
    var size = options.size === undefined ? 'big' : options.size;
    var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
    var radius = options.radius === undefined ? 25 : options.radius;
    console.log(size, cords, radius); // big { x: 18, y: 30 } 30
    // 이제 드디어 차트 그리기 수행
  }

drawES5Chart({
    cords: { x: 18, y: 30 },
    radius: 30
  });

console.log("============================");


//ES2015 
function drawES2015Chart({size='big', cords={x:0,y:0}, radius=25} = {}){
    console.log(size,cords,radius);
}


drawES2015Chart({
    cords: { x: 18, y: 30 },
    radius: 30
  });


  console.log("============================");

  //중첩된 객체 및 배열의 구조 분해

  var metadata = { 
      title : "Scratchpad",
      translation : [
        {  
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
        }
      ],
      url: "/en-US/docs/Tools/Scratchpad"
  }

  var {title:englishTitle, translations : [{title : localeTitle}] } = metadata;
  console.log(englishTitle);
  console.log(localeTitle);
  
  console.log("============================");
