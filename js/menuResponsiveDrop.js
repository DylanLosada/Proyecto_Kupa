$(document).ready(function(){
    var menu = $('.nav-header__responsive-menu');

    var desplegable= $('.nav-header__responsive-hidden');

    

    menu.click(function(){

        if(desplegable.hasClass('invisible')){
            desplegable.removeClass("invisible");
            desplegable.addClass("visible");
            
            desplegable.animate({
                height: '90vh'
            }, 'slow');
        
            
        }else if(desplegable.hasClass('visible')){
            desplegable.animate({
                height: '-90vh'
            }, 'slow');
        
            setTimeout(function () {
                desplegable.removeClass("visible");
                desplegable.addClass("invisible");
            }, 300);
        }
    })
})