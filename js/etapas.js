//using document ready...
        $(document).ready(function(){

            //initialising fullpage.js in the jQuery way
            $('#fullpage').fullpage({
                sectionsColor: ['#FFFFFF', '#818812', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#818812', '#FFFFFF', '#818812', '#818812', '#FFFFFF'],
                navigation: true,
                slidesNavigation: true,
            });

            // calling fullpage.js methods using jQuery
            $('#moveSectionUp').click(function(e){
                e.preventDefault();
                $.fn.fullpage.moveSectionUp();
            });

            $('#moveSectionDown').click(function(e){
                e.preventDefault();
                $.fn.fullpage.moveSectionDown();
            });
        });