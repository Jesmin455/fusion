/* HEADER SECTION START */

$(document).ready(function(){
    $(".nav-open").click(function(){
        $(".nav-bar > nav").addClass("active");
    });
    $(".nav-close").click(function(){
        $(".nav-bar > nav").removeClass("active");
    });
    
    $(".w-block").click(function(){
        $(".nav-bar > nav").removeClass("active");
    });

    $(document).on('click', '.nav-link', function(e) {
        $('.nav-menu li a').removeClass('active');
        $(this).addClass('active');
    });

});


/* HEADER SECTION END */
