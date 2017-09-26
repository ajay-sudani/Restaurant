$(document).ready(function(){

    $(document).on('click', function(){
        $('.side-menu').removeClass('active');
    });

    $('.cover-content .header .menu').on('click', function(e){
        e.stopPropagation();
        $('.side-menu').addClass('active');
    });

    $('.fa-caret-down').on('click', function(e){
        e.stopPropagation();
        $('.right-menu').toggleClass('active');
    });
});
    
