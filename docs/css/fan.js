$(document).ready(function(){
  
    $(window).scroll(function(){
      if($(window).scrollTop() > 1500) {
        $(".effect").show().animate({
          opacity: "1"
        }, 1000)
      }
    })
    
    
    
  })