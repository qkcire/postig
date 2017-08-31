// Run this function after the page has loaded
$(function () {
  //Retreive login credentials
  $("#login-btn").on('click', function() {
    // function lock_and_auth()
    //  fadeTo screen + load feedback circle ring thing + lock all buttons on screen
    //  attempt authentication
    //  return boolean w/ yesAuth || noAuth

    // fade designated columns instead of entire body
    $("#orange").fadeTo(500, 0.55);
    $("#green").fadeTo(500,0.55);

    // all this works to activate loader!
    $("#preload").addClass("active"); //
    $("#loader").css("pointer-events", "auto"); //
    $("#spinner").css("visibility", "visible"); //
    console.log($("#user_name").val());
    console.log($("#pass_word").val());
    setTimeout(transition_login_page, 1100);

    // don't need to explicity disable user & pword since loader takes precedence
    // on screen and disables inherently
    // $("#user_name").prop("disabled", true);
    // $("#pass_word").prop("disabled", true);
  });
  function transition_login_page() {
    $("#red").removeClass("fadeIn");
    $("#red").css("-webkit-animation-delay", "0s");
    $("#red").addClass("fadeOut");
    setTimeout(transition_post, 300);
  }

  function transition_post() {
    $("#post").removeClass("fadeInUp");
    $("#post").addClass("fadeOutUp");
  }
  //clear input data, sets to null, and unblurs fields on screen
  $("#cancel-btn").on('click', function() {
    $("#user_name").val(null).blur();
    $("#pass_word").val(null).blur();
  });
});
