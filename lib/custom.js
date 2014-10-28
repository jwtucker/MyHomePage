$(document).ready(function(){

var windowActive=false;
var windowActiveName="main";

  
  //Startup: positioning calculations
  var startup = function(){

    //Check if window is too small
    
    //Calculate Position of text
    var text = $(".menu-button > h1");
    var middle = text.parent().position().top + text.parent().height()/2 - text.height()/2+400;
    var center = text.parent().position().left + text.parent().width()/2 - text.width()/2;
    text.animate({top:middle,left:center},0);

    //Calculate position of screen div
    var screen = $(".screen");
    var desktopImage = screen.parent().find("img");
    screen.css("top",desktopImage.position().top + desktopImage.height()*.203);
    screen.css("left",desktopImage.position().left + desktopImage.width()*.490);
    screen.css("height",desktopImage.height()*.345);
    screen.css("width",desktopImage.height()*.517);

    //Calculate optimal text size
    var document = $(window);

    var text = $(".button-text");
    var textSize = Math.floor(document.width()*.04);
    text.css("font-size",textSize);

    text = $(".column").find('h1');
    textSize = Math.floor(document.width()*.02);
    text.css("font-size",textSize);

    text = $(".column").find('h2');
    textSize = Math.floor(document.width()*.015);
    text.css("font-size",textSize);

    text = $(".screen");
    textSize = Math.floor(document.width()*.025);
    text.css("font-size",textSize);

    text = $(".project").find('h1');
    textSize = Math.floor(document.width()*.025);
    text.css("font-size",textSize);
  };

  //Hover for Menu Buttons
  $(".menu-button").hover(function(){
    var img = $(this).find('img');
    var text = $(this).find('h1');
    img.stop(false,true).animate({top:"-=500"},"fast");
    var middle = text.parent().height()/2 - text.height()/2;
    var center = text.parent().width()/2 - text.width()/2;
    text.stop(false,true).animate({top:middle,left:center},"fast");
  },function(){ 
    var img = $(this).find('img');
    var text = $(this).find('h1');
    console.log(text.position());
    img.stop(false,true).animate({top:"+=500"},"fast");
    text.stop(false,true).animate({top:"+=400"},"fast");
   }
  );


  //Click behavior for Menu Buttons
  $("#projects-button").click(function(){
    if(windowActive&&windowActiveName!="projects"){
      closeWindows(windowActiveName);
    }
    if(!windowActive){
      var window = $("#projects-window");
      var distance = window.parent().height();
      windowActive=true;
      windowActiveName="projects";
      console.log(distance);
      window.animate({top:"+=" + distance},"slow");
    }
    else if(windowActive&&windowActiveName=="projects"){
      var window = $("#projects-window");
      var distance = window.parent().height();
      windowActive=false;
      windowActiveName="main";
      console.log(distance);
      window.animate({top:"-=" + distance},"slow");
    }
    else{
      console.log("Error: No Case found (projects click)");
    }

  });

  $("#hire-button").click(function(){
    if(windowActive&&windowActiveName!="hire"){
      closeWindows(windowActiveName);
    }
    if(!windowActive){
      var window = $("#hire-window");
      var distance = window.parent().height();
      windowActive=true;
      windowActiveName="hire";
      console.log(distance);
      window.animate({top:"+=" + distance},"slow");
    }
    else if(windowActive&&windowActiveName=="hire"){
      var window = $("#hire-window");
      var distance = window.parent().height();
      windowActive=false;
      windowActiveName="hire";
      console.log(distance);
      window.animate({top:"-=" + distance},"slow");
    }
    else{
      console.log("Error: No Case found (hire click)");
    }

  });

  $("#contact-button").click(function(){
    if(windowActive&&windowActiveName!="contact"){
      closeWindows(windowActiveName);
    }
    if(!windowActive){
      var window = $("#contact-window");
      var distance = window.parent().height();
      windowActive=true;
      windowActiveName="contact";
      console.log(distance);
      window.animate({top:"+=" + distance},"slow");
    }
    else if(windowActive&&windowActiveName=="contact"){
      var window = $("#contact-window");
      var distance = window.parent().height();
      windowActive=false;
      windowActiveName="contact";
      console.log(distance);
      window.animate({top:"-=" + distance},"slow");
    }
    else{
      console.log("Error: No Case found (contact click)");
    }

  });


  $(".project").hover(function(){
    console.log("Hovered");
    var hoverText = $(this).find('div');
    hoverText.stop().fadeTo(600,.8);
  },function(){
    var hoverText = $(this).find('div');
    hoverText.stop().fadeTo(200,0);
  });

  //Closes all opened "windows"
  var closeWindows = function(currentState){
    var window = $("#" + currentState + "-window");
    var distance = window.parent().height();
    window.animate({top:"-=" + distance},"fast");
    windowActive=false;
    windowActiveName="main";
  };

  //Run startup function
  startup();

  //Animate Screen
  $(function(){
      $(".screen").delay(4000).typed({
        strings: ["Hi, my name is Jeremy.","I like making cool stuff on the web.","I love learning new technologies",
        "Please take a look at my completed projects","I think you'll be impressed","I'm capable with Backbone.js and Node.js"],
        typeSpeed: 40
      });
  });

  //Reload when resized
  $(window).resize(function(){location.reload();});

  //Notify User if window is too small
  var testwindow = $(window);
    if (testwindow.height()<455 || testwindow.width()<630){
      console.log("trigger");
      $('body').html("<h1>Please make your brower a bit larger</h1>");
    }


});