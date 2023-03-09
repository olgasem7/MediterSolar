$(document).ready(function(){
    $(window).scroll(function(){
        let scrollhecho = $(window).scrollTop();

        console.log(scrollhecho);

        if (scrollhecho > 0) {
            $("header").addClass("activo");
        }
        else {
            $("header").removeClass("activo");
        } 
   
    }); 
    
    $(".icon_menu").click(function(){
        console.log("hola")
        $(".menu_hamburgesa").addClass("show");
    });
    $(".icon_cross").click(function(){
        console.log("hola")
        $(".menu_hamburgesa").removeClass("show");
    });

    //Sobre nosotros: info de placas
    $(".explanation").click(function(){
        // $(".explanation").removeClass("active")
        // $(".explanation_exdended").removeClass("active")
        // $(".explanation__h3").removeClass("active")
        const i = $(".explanation").index(this)
        console.log(i)
        $(".explanation").eq(i).toggleClass("active")
        $(".explanation_extended").eq(i).toggleClass("active")
        $(".explanation__h3").eq(i).toggleClass("active")
    })
});




