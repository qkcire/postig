// Run this function after the page has loaded
$(function () {

  //Retreive login credentials
  $("#login-btn").on('click', function() {

    //fade tags title and logins
    $("#orange").fadeTo(500, 0.55);
    $("#green").fadeTo(500,0.55);

    //activate spinning loader  & disables buttons
    $("#preload").addClass("active"); //
    $("#loader").css("pointer-events", "auto"); //
    $("#spinner").css("visibility", "visible"); //

    //authenticate user -- TO DO
    $.getScript('./authenticate.js', function() {

      // if SUCCESS transition into main page
      if (test_auth_func($("#user_name").val(), $("#pass_word").val())) {
        /// load page
        setTimeout(function () {
          transition_page();
        }, 1500);
      };
    });
    setTimeout(function() {
      $("#roq").load("main-page.html");
    }, 5200);

    //now we want to empty out old html and load in new html



  });
  function transition_page() {
    transition_login_creds();
    // setTimeout(transition_spin(), 400);
  }
  function transition_login_creds() {
    $("#red").removeClass("fadeIn");
    $("#red").css("-webkit-animation-delay", "0s");
    $("#red").addClass("fadeOut");
    setTimeout(transition_post, 1300);
  };

  function transition_post() {
    $("#post").removeClass("fadeInUp");
    $("#post").addClass("fadeOutUp");
    // setTimeout(transition_spin, 5500);
  };

  // function transition_spin() {
  //   $("#spinner").addClass()
  //   $("#spinner").css("visibility", "hidden");
  // }
  //clear input data, sets to null, and unblurs fields on screen
  $("#cancel-btn").on('click', function() {
    $("#user_name").val(null).blur();
    $("#pass_word").val(null).blur();
  });
});
