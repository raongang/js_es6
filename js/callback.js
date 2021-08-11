
var opt = { title : "",
            confirmButtonText : "확인",
            animation : false,
            text : "대표자성명을확인하십시요",
            callback : function(){  console.log("callback test"); return;} 
};

function execute(opts){
   
    if(opts.callback != undefined){
        if(opts.ajax != undefined && opts_ajax ==true){
            console.log("here1");
            opts.showLoaderOnConfirm = true;
            opts.closeOnConfirm = false;
        }
        var len = opts.callback.length;
        console.log(len); //0

        var _callback = null;

        if(len==0){
            _callback = function(){
                setTimeout(function(){
                    opts.callback();
                },20);
            }
        }

        console.log(_callback);
     }

     


}

execute(opt);
           
  