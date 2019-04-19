$(document).ready(function(){
    var scroll = $(document).scrollTop();

    if(scroll>10){
        $(".navbar").addClass("navbar-black");
        $(".my-float").css({'transform' : 'rotate('+ 0 +'deg)'});
        $(".float").attr('href', '#section0');
    }
    // Add smooth scrolling to all links in navbar + footer link
    $("a[href*='#']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
    var scroll_pos = 0;
    $(document).scroll(function(){
       scroll_pos = $(this).scrollTop();
       if(scroll_pos > 10){
           $(".navbar").addClass("navbar-black");
           $(".my-float").css({'transform' : 'rotate('+ 0 +'deg)'});
           $(".float").attr('href', '#section0');
       } else {
           $(".navbar").removeClass("navbar-black");
           $(".my-float").css({'transform' : 'rotate('+ 180 +'deg)'});
           $(".float").attr('href', '#last');
       }
    });

    /*MATERIAL THEME*/
    $('.theme_change').click(function(){
        if (this.checked){
            $(".light").removeClass("light").addClass("dark");
            $(".btn-dark").removeClass("btn-dark").addClass("btn-light");
            $(".card-light").removeClass("card-light").addClass("card-dark");
            $(".fa-light").removeClass("fa-light").addClass("fa-dark");
            $(".footer-light").removeClass("footer-light").addClass("footer-dark");
            $("body").css({"background-color" : "#2b2b2b"});
            $(".txt").css({"color" : "#efefef"});
        } else {
            $(".dark").removeClass("dark").addClass("light");
            $(".btn-light").removeClass("btn-light").addClass("btn-dark");
            $(".card-dark").removeClass("card-dark").addClass("card-light");
            $(".fa-dark").removeClass("fa-dark").addClass("fa-light");
            $(".footer-dark").removeClass("footer-dark").addClass("footer-light");
            $("body").css({"background-color" : "#e7e7e7"});
            $(".txt").css({"color" : "#161616"});

        }
    });


});