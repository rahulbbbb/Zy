$(document).ready(function() {
    $("#myButton").click(function() {
      alert("Button clicked!");
    });
  });

  $(document).ready(function() {
    $("#myButton2").click(function() {
      alert("Download!");
    });
  });

  

  $('a[href="/services"]').on('click', function(event) {
    event.preventDefault();
    var target = $('#services-section');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 2000); 
    }
  });

  $('a[href="/aboutus"]').on('click', function(event) {
    event.preventDefault();
    var target = $('#about-section');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 2000); 
    }
  });

  $('a[href="/career"]').on('click', function(event) {
    event.preventDefault();
    var target = $('#career-section');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 2000); 
    }
  });


  $( function() {
    $( "#dialog" ).dialog();
  } );
  


   
    $('#scrollButton').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow'); 
        return false;
    });






