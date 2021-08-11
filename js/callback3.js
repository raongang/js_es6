var ScrapService = {
    installed : function(callback){
        if(callback!=undefined) {
            console.log("테스트");
            callback();
    }}

};


ScrapService.installed(function(){
    console.log("test");
})

