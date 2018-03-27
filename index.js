$(document).ready(function() {
  $(".navbar-brand, .projects_link, .about_link").on("click", function( e ) {

    e.preventDefault();

    $("body, html").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top 
    }, 400);

  });
});




