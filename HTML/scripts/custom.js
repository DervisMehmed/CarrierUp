/* ----------------- Start Document ----------------- */
(function($){
    "use strict";

    $(document).ready(function(){

    var check_login;
    /*----------------------------------------------------*/
    /*  Navigation
    /*----------------------------------------------------*/
    if($('header').hasClass('full-width')) {
        $('header').attr('data-full', 'yes');
    }  
    if($('header').hasClass('alternative')) {
        $('header').attr('data-alt', 'yes');
    }
    function menumobile(){
        var winWidth = $(window).width();
        if( winWidth < 973 ) {
            $('#navigation').removeClass('menu');
            $('#navigation li').removeClass('dropdown');
            $('header').removeClass('full-width');
            $('#navigation').superfish('destroy');
        } else {
            $('#navigation').addClass('menu');
            if($('header').data('full') === "yes" ) {
                 $('header').addClass('full-width')
            }
            $('#navigation').superfish({
                delay:       300,                               // one second delay on mouseout
                animation:   {opacity:'show'},   // fade-in and slide-down animation
                speed:       200,                               // animation speed
                speedOut:    50                                 // out animation speed
            });
        }
        if( winWidth < 1272 ) {
            $('header').addClass('alternative').removeClass('full-width');
        } else {
            if($('header').data('alt') === "yes" ) {} else {
                $('header').removeClass('alternative');
            }
        }
    }

    $(window).resize(function (){
        menumobile();
    });
    menumobile();


     /*----------------------------------------------------*/
    /*  Mobile Navigation
    /*----------------------------------------------------*/
        var jPanelMenu = $.jPanelMenu({
          menu: '#responsive',
          animated: false,
          duration: 200,
          keyboardShortcuts: false,
          closeOnContentClick: true
        });


      // desktop devices
        $('.menu-trigger').on('click',function(){
          var jpm = $(this);

          if( jpm.hasClass('active') )
          {
            jPanelMenu.off();
            jpm.removeClass('active');
          }
          else
          {
            jPanelMenu.on();
            jPanelMenu.open();
            jpm.addClass('active');
          }
          return false;
        });


        // Removes SuperFish Styles
        $('#jPanelMenu-menu').removeClass('sf-menu');
        $('#jPanelMenu-menu li ul').removeAttr('style');


        $(window).resize(function (){
          var winWidth = $(window).width();
          var jpmactive = $('.menu-trigger');
          if(winWidth>990) {
            jPanelMenu.off();
            jpmactive.removeClass('active');
          }
        });


    /*----------------------------------------------------*/
    /*  Stacktable / Responsive Tables Plug-in
    /*----------------------------------------------------*/
    $('.responsive-table').stacktable();
    


    /*----------------------------------------------------*/
    /*  Back to Top
    /*----------------------------------------------------*/
        var pxShow = 400; // height on which the button will show
        var fadeInTime = 400; // how slow / fast you want the button to show
        var fadeOutTime = 400; // how slow / fast you want the button to hide
        var scrollSpeed = 400; // how slow / fast you want the button to scroll to top.

        $(window).scroll(function(){
          if($(window).scrollTop() >= pxShow){
            $("#backtotop").fadeIn(fadeInTime);
          } else {
            $("#backtotop").fadeOut(fadeOutTime);
          }
        });

        $('#backtotop a').on('click',function(){
          $('html, body').animate({scrollTop:0}, scrollSpeed);
          return false;
        });
    


    /*----------------------------------------------------*/
    /*  Showbiz Carousel
    /*----------------------------------------------------*/
        $('#job-spotlight').showbizpro({
            dragAndScroll:"off",
            visibleElementsArray:[1,1,1,1],
            carousel:"off",
            entrySizeOffset:0,
            allEntryAtOnce:"off",
            rewindFromEnd:"off",
            autoPlay:"off",
            delay:2000,
            speed:400,
            easing:'easeOut'
        });

        $('#our-clients').showbizpro({
            dragAndScroll:"off",
            visibleElementsArray:[5,4,3,1],
            carousel:"off",
            entrySizeOffset:0,
            allEntryAtOnce:"off"
        });



    /*----------------------------------------------------*/
    /*  Revolution Slider
    /*----------------------------------------------------*/
        $('.fullwidthbanner').revolution({
            delay: 9000,
            startwidth: 1180,
            startheight: 585,
            onHoverStop: "on", // Stop Banner Timet at Hover on Slide on/off
            navigationType: "none", //bullet, none
            navigationArrows: "verticalcentered", //nexttobullets, verticalcentered, none
            navigationStyle: "none", //round, square, navbar, none
            touchenabled: "on", // Enable Swipe Function : on/off
            navOffsetHorizontal: 0,
            navOffsetVertical: 20,
            stopAtSlide: -1, // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
            stopAfterLoops: -1, // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
            fullWidth: "on",
        });



    /*----------------------------------------------------*/
    /*  Flexslider
    /*----------------------------------------------------*/
        $('.testimonials-slider').flexslider({
            animation: "fade",
            controlsContainer: $(".custom-controls-container"),
            customDirectionNav: $(".custom-navigation a")
        });



    /*----------------------------------------------------*/
    /*  Counters
    /*----------------------------------------------------*/

        $('.counter').counterUp({
            delay: 10,
            time: 800
        });



    /*----------------------------------------------------*/
    /*  Chosen Plugin
    /*----------------------------------------------------*/

        var config = {
          '.chosen-select'           : {disable_search_threshold: 10, width:"100%"},
          '.chosen-select-deselect'  : {allow_single_deselect:true, width:"100%"},
          '.chosen-select-no-single' : {disable_search_threshold:10, width:"100%"},
          '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
          '.chosen-select-width'     : {width:"95%"}
        };
        for (var selector in config) {
          $(selector).chosen(config[selector]);
        }


    /*----------------------------------------------------*/
    /*  Checkboxes "any" fix
    /*----------------------------------------------------*/   
        $('.checkboxes').find('input:first').addClass('first')
        $('.checkboxes input').on('change', function() {
            if($(this).hasClass('first')){
                $(this).parents('.checkboxes').find('input').prop('checked', false);
                $(this).prop('checked', true);
            } else {
                $(this).parents('.checkboxes').find('input:first').not(this).prop('checked', false);
            }
        });


    /*----------------------------------------------------*/
    /*  Magnific Popup
    /*----------------------------------------------------*/   
        
            $('body').magnificPopup({
                type: 'image',
                delegate: 'a.mfp-gallery',

                fixedContentPos: true,
                fixedBgPos: true,

                overflowY: 'auto',

                closeBtnInside: true,
                preloader: true,

                removalDelay: 0,
                mainClass: 'mfp-fade',

                gallery:{enabled:true},

                callbacks: {
                    buildControls: function() {
                        console.log('inside'); this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
                    }
                }
            });


            $('.popup-with-zoom-anim').magnificPopup({
                type: 'inline',

                fixedContentPos: false,
                fixedBgPos: true,

                overflowY: 'auto',

                closeBtnInside: true,
                preloader: false,

                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-zoom-in'
            });


            $('.mfp-image').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-fade',
                image: {
                    verticalFit: true
                }
            });


            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,

                fixedContentPos: false
            });


     /*---------------------------------------------------*/
    /*  Contact Form
    /*---------------------------------------------------*/
    $("#contactform .submit").on('click',function(e) {


      e.preventDefault();
      var user_name       = $('input[name=name]').val();
      var user_email      = $('input[name=email]').val();
      var user_comment    = $('textarea[name=comment]').val();

      //simple validation at client's end
      //we simply change border color to red if empty field using .css()
      var proceed = true;
      if(user_name===""){
          $('input[name=name]').addClass('error');
            proceed = false;
          }
          if(user_email===""){
            $('input[name=email]').addClass('error');
            proceed = false;
          }
          if(user_comment==="") {
            $('textarea[name=comment]').addClass('error');
            proceed = false;
          }

          //everything looks good! proceed...
          if(proceed) {
            $('.hide').fadeIn();
            $("#contactform .submit").fadeOut();
              //data to be sent to server
              var post_data = {'userName':user_name, 'userEmail':user_email, 'userComment':user_comment};

              //Ajax post data to server
              $.post('contact.php', post_data, function(response){
                var output;
                //load json data from server and output comment
                if(response.type == 'error')
                  {
                    output = '<div class="error">'+response.text+'</div>';
                    $('.hide').fadeOut();
                    $("#contactform .submit").fadeIn();
                  } else {

                    output = '<div class="success">'+response.text+'</div>';
                    //reset values in all input fields
                    $('#contact div input').val('');
                    $('#contact textarea').val('');
                    $('.hide').fadeOut();
                    $("#contactform .submit").fadeIn().attr("disabled", "disabled").css({'backgroundColor':'#c0c0c0', 'cursor': 'default' });
                  }

                  $("#result").hide().html(output).slideDown();
                }, 'json');
            }
      });

    //reset previously set border colors and hide all comment on .keyup()
    $("#contactform input, #contactform textarea").keyup(function() {
      $("#contactform input, #contactform textarea").removeClass('error');
      $("#result").slideUp();
    });




    /*----------------------------------------------------*/
    /*  Accordions
    /*----------------------------------------------------*/

        var $accor = $('.accordion');

         $accor.each(function() {
            $(this).addClass('ui-accordion ui-widget ui-helper-reset');
            $(this).find('h3').addClass('ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all');
            $(this).find('div').addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom');
            $(this).find("div").hide().first().show();
            $(this).find("h3").first().removeClass('ui-accordion-header-active ui-state-active ui-corner-top').addClass('ui-accordion-header-active ui-state-active ui-corner-top');
            $(this).find("span").first().addClass('ui-accordion-icon-active');
        });

        var $trigger = $accor.find('h3');

        $trigger.on('click', function(e) {
            var location = $(this).parent();

            if( $(this).next().is(':hidden') ) {
                var $triggerloc = $('h3',location);
                $triggerloc.removeClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideUp(300);
                $triggerloc.find('span').removeClass('ui-accordion-icon-active');
                $(this).find('span').addClass('ui-accordion-icon-active');
                $(this).addClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideDown(300);
            }
             e.preventDefault();
        });

    

    /*----------------------------------------------------*/
    /*  Application Tabs
    /*----------------------------------------------------*/   
        // Get all the links.
        var link = $(".app-link");
        $('.close-tab').hide();

        $('.app-tabs div.app-tab-content').hide();
        // On clicking of the links do something.
        link.on('click', function(e) {

            e.preventDefault();
            $(this).parents('div.application').find('.close-tab').fadeOut();
            if($(this).hasClass('opened')) {
                $(this).parents('div.application').find(".app-tabs div.app-tab-content").slideUp('fast');
                $(this).parents('div.application').find('.close-tab').fadeOut(10);
                $(this).removeClass('opened');
            } else {
                $(this).parents('div.application').find(".app-link").removeClass('opened');
                $(this).addClass('opened');
                var a = $(this).attr("href");
                $(this).parents('div.application').find(a).slideDown('fast').removeClass('closed').addClass('opened');
                $(this).parents('div.application').find('.close-tab').fadeIn(10);
            }

            $(this).parents('div.application').find(".app-tabs div.app-tab-content").not(a).slideUp('fast').addClass('closed').removeClass('opened');
            
        });

        $('.close-tab').on('click',function(e){
            $(this).fadeOut();
            e.preventDefault();
            $(this).parents('div.application').find(".app-link").removeClass('opened');
            $(this).parents('div.application').find(".app-tabs div.app-tab-content").slideUp('fast').addClass('closed').removeClass('opened');
        })


    /*----------------------------------------------------*/
    /*  Add Resume 
    /*----------------------------------------------------*/   
        $('.box-to-clone').hide();
        $('.add-box').on('click', function(e) {
            e.preventDefault();
            var newElem = $(this).parent().find('.box-to-clone:first').clone();
            newElem.find('input').val('');
            newElem.prependTo($(this).parent()).show();
            var height = $(this).prev('.box-to-clone').outerHeight(true);
            
            $("html, body").stop().animate({ scrollTop: $(this).offset().top-height}, 600);
        });

        $('body').on('click','.remove-box', function(e) {
            e.preventDefault();
            $(this).parent().remove();
        });
        var nameing = "default"; 
        $("#preview").on('click',function(e) {
            var name    = document.getElementById("name").value;
            var mail   = document.getElementById("mail").value;
            var title   = document.getElementById("title").value;
            var location   = document.getElementById("location").value;
            var videoLink = document.getElementById("videoId").value;
            var summary = document.getElementById("summary").value;
            var obj2 = { name: name, mail: mail, title: title, location: location, videoLink: videoLink, summary: summary }; 

                // localstorage a kayit
                localStorage.setItem('myStorage2', JSON.stringify(obj2));
                //console.log(myStorage2);
               // var obje = JSON.parse(myStorage2);
                console.log(obj2.name);
               // document.getElementById("myHeader").innerHTML = obj2.name;
                var x = localStorage.getItem("myStorage2"); 
                console.log(x);
                //document.getElementById("manager").innerHTML = "ELİF";
                console.log("JSON: " + localStorage.getItem('myStorage2')); 
                
                
        });
        console.log("JSON: " + localStorage.getItem('myStorage2')); 
        var obje = JSON.parse(localStorage.getItem('myStorage2'));
        //document.getElementById("myHeader").innerHTML =obje.name;
        //document.getElementById("myTitle").innerHTML =obje.title;
        //document.getElementById("location").innerHTML =obje.location;

    /*----------------------------------------------------*/
    /*  Login button
    /*----------------------------------------------------*/
    $("#login_btn").on('click',function(e) {
        e.preventDefault();
        var username_tb = document.getElementById("username").value;
        var password_tb = document.getElementById("password").value;
        
        console.log("tusa bastin");

        var myobj = JSON.parse(localStorage.getItem('myStorage'));
        //while(myobj.next())
        //{
            console.log("while ici!");
            if (username_tb == myobj.user_email && password_tb == myobj.firstPass)
            {
                console.log("matched!");
                if(myobj.userType == 1)
                {   
                    console.log("employer");
                    window.location.assign("index_employer.html");
                }
                else
                {
                    console.log("employee");
                    window.location.assign("index_employee.html");
            
                }
            }
            else
            {
                alert("Username or password is wrong!");
            }
        //}

        console.log(username_tb);
        console.log(password_tb);
    });
    /*----------------------------------------------------*/
    /*  Register
    /*----------------------------------------------------*/
    $("#regButton").on('click',function(e) {
        e.preventDefault();
        var regValue = document.getElementById("sel1");
        var regNum = regValue.options[regValue.selectedIndex].value; 
        var name      = $('input[name=email]').val();
        var user_password1    = document.getElementById("reg_password").value;
        var user_password2   = document.getElementById("reg_password2").value;
        
        if( user_password1 == user_password2)
        {
            var obj = { user_email: name, firstPass: user_password1, userType: regNum }; 
            //var myJSON = JSON.stringify(obj);

            // localstorage a kayit
            localStorage.setItem('myStorage', JSON.stringify(obj));

            console.log("JSON: " + localStorage.getItem('myStorage'));  
            var $tabsNav    = $('.tabs-nav'),
            $tabsNavLis = $tabsNav.children('li');
            
            $tabsNav.each(function() {
                var $this = $(this);

                $this.next().children('.tab-content').stop(true,true).hide()
                .first().show();

                $this.children('li').first().addClass('active').stop(true,true).show();
            
            });
            
        }
        else
        {
            alert("Password does not correctly entered!!");
        }
      
    });
    /*----------------------------------------------------*/
    /*  Chatbot
    /*----------------------------------------------------*/
        $("#chatborder").on('click',function(e) {
          
            var messages = [], //array that hold the record of each string in chat
            lastUserMessage = "", //keeps track of the most recent input string from the user
            botMessage1 = "", 
            botMessage2 = "",
            botMessage3 = "",
            botMessage4 = "",
            botMessage5 = "",
            botMessage6 = "", //vars keeps track of what the chatbot is going to say
            botName = 'Chatbot', //name of the chatbot
            talking = true; //when false the speach function doesn't work

            var Hello = ["HI", "HEY", "HOWDY", "HE YA", "HOLA", "HELLO", "SUP", "KONNICHIWA", "ALOHA"]
            var Goodbye = ["BYE", "SEE YA", "SAYONARA", "LATER", "ADIOS", "CYA", "SEEYA"]
            var Greeting = ["WHAT'S UP", "HOW'S IT GOING", "HOW ARE YOU", "NICE DAY", "GOOD MORNING", "GOOD NIGHT"]

            
            var BotHello = ["HI", "HEY", "HOWDY", "HEYA", "HOLA", "HELLO", "SUP", "KONNICHIWA", "ALOHA"]
            var BotGoodbye = ["BYE", "SEE YA", "CYA", "LATER", "ADIOS", "SAYONARA", "SEEYA"]
            var BotGreeting = ["WHAT'S UP", "HOW'S IT GOING", "HOW ARE YOU", "NICE TO SEE YOU", "GOOD MORNING", "WELCOME" , "HOW CAN I HELP YOU"]
            
        
            
            //edit this function to change what the chatbot says
            function chatbotResponse() {
                botMessage1 = "I don't know the answer", 
                botMessage2 = "<br>",
                botMessage3 = "<br>",
                botMessage4 = "<br>",
                botMessage5 = "<br>",
                botMessage6 = "<br>",
                talking = true;
                var i;
                for (i = 0; i < 10; i++) {
                    var question = lastUserMessage.toUpperCase();
                    if ( question.includes(Hello[i])) {
                        botMessage1 = BotHello[Math.floor(Math.random()*(BotHello.length))].toLowerCase();;
                        botMessage2 = BotGreeting[Math.floor(Math.random()*(BotGreeting.length))].toLowerCase();;
                    
                    }
                    if ( question.includes(Goodbye[i])) {
                        botMessage1 = BotGoodbye[Math.floor(Math.random()*(BotGoodbye.length))].toLowerCase();;
                    }
                    if ( question.includes("HELP")) {
                        botMessage1 = " Okay, I am here to help. What do you need? ";
                        botMessage2 = " If you need to search job, please ask me for job. ";
                        botMessage3 = " If you need to search employee, please ask me for a employee. "; 
                        botMessage4 = " If you need to contact to my creators, please ask me for a contact. ";
                        botMessage5 = " ";
                        botMessage6 = " ";
                    }
                    if ( question.includes("CONTACT")) {
                        botMessage1 = " Contact page is to send message to my creators. "; 
                        botMessage2 = " In the top of the page, there is menu. ";
                        botMessage3 = " If you choose PAGES header, you can see contact page choice. ";
                        botMessage4 = " There is information for communication. ";
                        botMessage5 = " Also, you can send message with its boxes. ";
                        botMessage6 = " ";
                
                    }
                    if ( question.includes("FINE")) {
                        botMessage1 = " Cool !! Me too ";
                    }
                    if ( question.includes("JOB")) {
                        botMessage1 = " In the top of the page, there is menu."; 
                        botMessage2 = " If you choose EMPLOYEES header, you can see what we provide for employees. ";
                        botMessage3 = " You can choose what you want.  ";
                        botMessage4 = " Conguluations !! You are so close to find your job !! ";
                        botMessage5 = " ";
                        botMessage6 = " ";
                    }
                    if ( question.includes("EMPLOYEE")) {
                        botMessage1 = " In the top of the page, there is menu."; 
                        botMessage2 = " If you choose EMPLOYER header, you can see what we provide for employers. ";
                        botMessage3 = " You can choose what you want. ";
                        botMessage4 = " Conguluations !! You are so close to find your employee !! ";
                        botMessage5 = " ";
                        botMessage6 = " ";
                    }
                }
            }
            
            //this runs each time enter is pressed.
            //It controls the overall input and output
            function newEntry() {   
                if (document.getElementById("chatbox").value != "") {
                    lastUserMessage = document.getElementById("chatbox").value;         
                    document.getElementById("chatbox").value = "";     
                    messages.push(lastUserMessage);
                    chatbotResponse();    
                    messages.push("<b>" + botName + ":</b> " + botMessage1);
                    messages.push( botMessage2 );
                    messages.push( botMessage3 );
                    messages.push( botMessage4 );
                    messages.push( botMessage5 );
                    messages.push( botMessage6 );
                    console.log("deneme");
                    for (var i = 1; i < 8; i++) {
                        if (messages[messages.length - i])
                            document.getElementById("chatlog"+i).innerHTML = messages[messages.length - i];
                    }
                    messages = [];
                }
            }

            //runs the keypress() function when a key is pressed
            document.onkeypress = keyPress;
            //if the key pressed is 'enter' runs the function newEntry()
            function keyPress(e) {
                var x = e || window.event;
                var key = (x.keyCode || x.which);
                if (key == 13 || key == 3) {
                    //runs this function when enter is pressed
                    newEntry();
                }
                if (key == 38) {
                    console.log('hi')
                }
            }
          
        });


    /*----------------------------------------------------*/
    /*  Tabs
    /*----------------------------------------------------*/ 
  

        var $tabsNav    = $('.tabs-nav'),
        $tabsNavLis = $tabsNav.children('li');
        // $tabContent = $('.tab-content');

        $tabsNav.each(function() {
            var $this = $(this);

            $this.next().children('.tab-content').stop(true,true).hide()
            .first().show();

            $this.children('li').first().addClass('active').stop(true,true).show();
        });

        $tabsNavLis.on('click', function(e) {
            var $this = $(this);

            $this.siblings().removeClass('active').end()
            .addClass('active');

            $this.parent().next().children('.tab-content').stop(true,true).hide()
            .siblings( $this.find('a').attr('href') ).fadeIn();

            e.preventDefault();
        });
        var hash = window.location.hash;
        var anchor = $('.tabs-nav a[href="' + hash + '"]');
        if (anchor.length === 0) {
            $(".tabs-nav li:first").addClass("active").show(); //Activate first tab
            $(".tab-content:first").show(); //Show first tab content
        } else {
            anchor.parent('li').trigger( "click" );
        }

// ------------------ End Document ------------------ //
});

})(this.jQuery);

  