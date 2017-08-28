// Run this function after the page has loaded
$(function () {

  //Retreive login credentials
  $("#login-btn").on('click', function() {
    // function lock_and_auth()
    //  fadeTo screen + load feedback circle ring thing + lock all buttons on screen
    //  attempt authentication
    //  return boolean w/ yesAuth || noAuth
    $(document.body).fadeTo(500, 0.55);
    console.log($("#user_name").val());
    console.log($("#pass_word").val());
    //testing to see if its possible to disable buttons (spoiler: it isn't)
    //refer to the following for some solutions:
    //  https://stackoverflow.com/questions/1164635/how-to-enable-or-disable-an-anchor-using-jquery
    //  https://stackoverflow.com/questions/2754546/can-i-disable-a-css-hover-effect-via-javascript
    $("#user_name").prop("disabled", true);
    $("#pass_word").prop("disabled", true);
    $("#login-btn").prop("disabled", true);
    $("#cancel-btn").prop("disabled", true);
  });

  //clear input data, sets to null, and unblurs fields on screen
  $("#cancel-btn").on('click', function() {
    $("#user_name").val(null).blur();
    $("#pass_word").val(null).blur();
  });
});
