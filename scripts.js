$(document).ready(function() {
    var fired = 0;
    var fired1 = 0;
    var fired2 = 0;
    var fired3 = 0;
    var fired4 = 0;
    var fired5 = 0;
    var fired6 = 0;
    var fired7 = 0;
    var home = $("#home");
    var about = $("#about");
    var skills = $("#skills");
    var projects = $("#projects");
    var contact = $("#contact");

    home.on("click", function() {
        $('html,body').animate({scrollTop: 0}, 800);
    });
    about.on("click", function() {
        $('html,body').animate({scrollTop: 435}, 800);
    });
    skills.on("click", function() {
        $('html,body').animate({scrollTop: 1400}, 800);
    });
    projects.on("click", function() {
        $('html,body').animate({scrollTop: 2450}, 800);
    });
    contact.on("click", function() {
        $('html,body').animate({scrollTop: 10000}, 2500);
    });

    $("div.nav-links li").on("click", function() {
        $('li').removeClass('active');
        $(this).addClass('active');
    });

    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if (fired == 0) {
            fired++;
            $("#question").fadeOut(1000);
            $("#about-bio-table").delay(1000).css("visibility", "visible").hide().fadeIn("slow");
        }

        if (scroll > 1700 && fired4 == 0) {
            fired4++;
            $(".technologies-table tr.animated-row td:nth-child(1)").addClass("animated slideInLeft");
            $(".technologies-table tr.animated-row td:nth-child(2)").addClass("animated zoomIn");
            $(".technologies-table tr.animated-row td:nth-child(3)").addClass("animated slideInRight");
        }

        if (scroll > 2500 && fired5 == 0) {
            fired5++;
            $("#weather").addClass("animated pulse");
        }

        if (scroll > 2800 && fired6 == 0) {
            fired6++;
            $("#twitch").addClass("animated pulse");
        }

        if (scroll > 3150 && fired7 == 0) {
            fired7++;
            $("#wiki").addClass("animated pulse");
        }

        else if (scroll < 430) {
            $("div.nav-links li").removeClass("active");
            $("#home").addClass("active");
        }

        else if (scroll >= 430 && fired1 == 0) {
            fired1++;
            for (var i = 0; i < 3; i++) {
                $("#about-table td:nth-child(" + (i + 1) + ")").delay(500).css("visibility", "visible").hide().fadeIn(1000);
            }
        }

        else if (scroll > 800 && fired2 == 0) {
            fired2++;
            $("div.skills div").addClass("scrolled");
        }

        else if (scroll >= 430 && scroll < 1390) {
            $("div.nav-links li").removeClass("active");
            $("#about").addClass("active");
        }

        else if (scroll > 2200 && fired3 == 0) {
            fired3++;
            $("div.projects div").addClass("scrolled");
        }

        else if (scroll >= 1390 && scroll < 2425) {
            $("div.nav-links li").removeClass("active");
            $("#skills").addClass("active");
        }

        else if (scroll > 2425 && scroll < 3950) {
            $("div.nav-links li").removeClass("active");
            $("#projects").addClass("active");
        }

        else if (scroll > 3950) {
            $("div.nav-links li").removeClass("active");
            $("#contact").addClass("active");
        }

    });
});