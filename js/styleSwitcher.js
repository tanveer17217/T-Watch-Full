
    function setActivityStyle(colorName){
        $(".alternate_style").attr("disabled","true");
        $(".alternate_style[title="+colorName+"]").removeAttr("disabled");
    }

    $(".toggle_style_switcher").click(function(){
        $(".style_switcher").toggleClass("open")
    })