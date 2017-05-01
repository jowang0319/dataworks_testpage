// Empty JS for your own code to be here


$(document).ready(function(){
    
    $("h2.js_title")
      .css('opacity', 0)
      .slideDown(1000)
      .animate(
        { opacity: 1 },
        { queue: false, duration: 2000 }
      );
    
});

