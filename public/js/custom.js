$(document).ready(function(){


	$('header .arrow-holder').click(function(e){
		e.stopPropagation();
        $('header .arrow-holder .arrow').toggleClass('active');
        $('header .right').toggleClass('active');
    });

    $('.content .date-list .items .item').click(function(){
    	if(!$(this).hasClass('flatpickr')){
    		$('.content .date-list .items .item').removeClass('active');
    		$(this).addClass('active');
    	}
    });

    $('.time-slot-label').click(function(){
        $(this).siblings('.time-slot').toggleClass('active');
    });
    

    $('.filter-option .filter-items .filter-item .select').click(function(e){
        e.stopPropagation();
        $('.filter-option .filter-items .filter-item').removeClass('active');
        $(this).parents('.filter-item').addClass('active');
        $('.filter-items').addClass('active');
    });

    $('.item-menu').click(function(e){
        e.stopPropagation();
        $(this).children('.item-content').addClass('active');
    });

    $('.item-content ul li').click(function(e){
        e.stopPropagation();
        $(this).parents('.item-menu').children('input').val($(this).text());
        $(this).parents('.item-content').removeClass('active');
    });

    $('.tab-menu .right').click(function(e){
        e.stopPropagation();
        $(this).siblings('.more-menu').toggleClass('active');
        $(this).toggleClass('active');
    });
    $('.tab-menu ul li').click(function(e){
        e.stopPropagation();
        $('.d-section .right').removeClass('active');
        $('.d-section .more-menu').removeClass('active');
    });
    $('.more-menu ul li').click(function(e){
        e.stopPropagation();
        $('.tab-menu .right').removeClass('active');
        $('.tab-menu .more-menu').removeClass('active');
    });


    $('.filter-option .filter-items .filter-item.event .item-content ul li').click(function(e){
        e.stopPropagation();
        $('.filter-option .filter-items .filter-item.event .select .title').text($(this).text());
        $('.filter-option .filter-items .filter-item').removeClass('active');
    });


    $('.filter-option .filter-items .filter-item.cost .item-content ul li').click(function(e){
        e.stopPropagation();
        $('.filter-option .filter-items .filter-item.cost .select .title').text($(this).text());
        $('.filter-option .filter-items .filter-item').removeClass('active');
    });



    $('.filter-option .filter-items .filter-item.place .item-content ul li').click(function(e){
        e.stopPropagation();
        $('.filter-option .filter-items .filter-item.place .select input').val($(this).text());
        $('.filter-option .filter-items .filter-item').removeClass('active');
    });

    $('.categories .group .btn').click(function(){
        $(this).parents('.group').toggleClass('active');
    });

    $('.filter-option .filter-items .filter-item .item-content .categories').click(function(e){
        e.stopPropagation();
        $('.filter-option .filter-items .filter-item.categorie-list').addClass('active');
    });

    $('.filter-option .filter-items .filter-item .item-content .categories > .btn').click(function(e){
        e.stopPropagation();
        $('.filter-option .filter-items .filter-item').removeClass('active');
    });

    $('.content .filter').click(function(){
        $('.filter-box').toggleClass('active');
    });

    $('.mobile-filter').click(function(e){
        e.stopPropagation();
        $('.filter-option').addClass('active');
    });

    $('.filter-option-arrow-holder').click(function(e){
        e.stopPropagation();
        $('.filter-option').toggleClass('active');
    });

    $('header nav > ul > li a .profile').click(function(){
        $('header nav .sbumenu').toggleClass('active');
        $('header nav > ul > li a .profile .arrow').toggleClass('active');
    })

    $('body').click(function(){
        $('.filter-option .filter-items .filter-item').removeClass('active');
        $('.filter-items').removeClass('active');
        $('header .left .arrow').removeClass('active');
        $('header .right').removeClass('active');
        $('.date-block .start-time .time-picker').removeClass('active');
        $('.date-block .end-time .time-picker').removeClass('active');
        $('.date-block .event-date .date-picker').removeClass('active');
        $('.tab-section .tab-menu').height($('.tab-section .tab.active').outerHeight(true));
    });

    $('body').change(function(){
        $('.tab-section .tab-menu').height($('.tab-section .tab.active').outerHeight(true));
    });

    $('.filter-option-arrow-holder').click(function(e){
        e.stopPropagation();
        $('.filter-option .filter-items .filter-item').removeClass('active');
    });

    $('.info-block .event-info .show-more-btn').click(function() {
        if ($(this).parent('.event-info').hasClass('active')){
           $(this).text('show more').parent('.event-info').removeClass('active');
           $('.event-info .text').height(0);
        } else {
            $('.info-block .event-info .text').height($('.event-info .performance-details').outerHeight(true));
            $(this).text('show less').parent('.event-info').addClass('active');
        }
    });


    $(document).scroll(function () {
        if ($(window).scrollTop() - $('.cover-image').outerHeight(true) >= -5){
            $('.detail .detail-page .detail-page-menu').addClass('active');
        } else{
           $('.detail-page .detail-page-menu').removeClass('active');
        }
    });

    $(window).resize(function(){
        if($(window).width() > 989){
            $(document).scroll(function () {
                if ($(window).scrollTop() - $('.cover-image').outerHeight(true) - 60 >= -5){
                    $('.profile4 .detail-page .detail-page-menu').addClass('active');
                } else{
                   $('.profile4 .detail-page .detail-page-menu').removeClass('active');
                }
            });
        }else{
        }
    });

    $('.modal-click').click(function(){
        var id = $(this).attr('data-modal');
        console.log(id);
        $('#'+id).addClass('active');
        $(this).parents('.main-body').addClass('active');
        $('body').addClass('overflow');
        var height = $('#'+id+' .box').outerHeight(true);
    });

     $('.modal .close').click(function(e){
        e.stopPropagation();
        $(this).parents('.modal').removeClass('active');
        var id = $(this).attr('data-modal');
        $('#'+id).addClass('active');
        $(this).parents('.modal').siblings('.main-body').removeClass('active');
        $('body').removeClass('overflow');
    });

    $(window).on('scroll resize orientationchange', function() {
        menufixed();
     });
    $( window ).resize(function() {
        if($( window ).width() < 768){
            $('.filter-option .filter-items .filter-item').removeClass('active');
            $('.filter-items').removeClass('active');
            $('header .left .arrow').removeClass('active');
            $('header .right').removeClass('active');
        }
        else{
            $('.filter-option .filter-items .filter-item').removeClass('active');
            $('.filter-option .filter-items').removeClass('active');
        }
    });

    menufixed();

    function menufixed(){
        var top = $(document).scrollTop();
        if(top > 0){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    }

    var mac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
    if (mac) {
        $('.restaurant').addClass('tablet');
        $('body').css('width','100%');
    }

    var macTouch = navigator.platform.match(/(iPhone|iPod|iPad)/i) ? true : false;
    if (macTouch) {
        $('.restaurant').addClass('no-touch');
    }

    // find device is tablet and add calss tablet in body
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        $('.restaurant').addClass('tablet');
    }


    window.addEventListener("resize", function() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            $('.restaurant').addClass('tablet');
        }
    }, false);

    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
});
