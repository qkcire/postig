// Run this function after the page has loaded
$(function () {
  // hides user & pword until client is loaded
  var on = true;
  var off = false;
  $("#green").hide();
  $("#left").hide();
  $("#right").hide();


  $.getScript('./stamps.js', function() {
      Stamps = new Stamps();

      var t01 = performance.now();
      Stamps.connect({isDev: true}).then(() => {
        var t02 = performance.now();
        console.log("client is ready to load info");
        $("#green").show();
        console.log("connect successful; time spent: " + (t02-t01));
      }, (error) => {
        console.log("an error occured.");
        console.log("error: " + error);
      });
    });

  $("#login-btn").on('click', function() {
    fadeLogin(on);
    console.log("stamps client: " + Stamps.client);
    loadSpinner(on);
    console.log("name: " + $("#user_name").val());
    console.log("word: " + $("#pass_word").val());
    var authCreds = {
      id: "b05c1b27-349a-4387-8ed5-f3f957d6536d",
      username: $("#user_name").val(),
      password: $("#pass_word").val(),
    };
    Stamps.auth(authCreds, true).then(() => {
        // auth successful
        // present transition into main page

      console.log("authentication success!");
      if(Stamps.token) {
        console.log("auth token is active");
        console.log("token: " + Stamps.token);
        setTimeout(function () {
            //transition_page();
          transitionToMainScreen();
        }, 1500);
        setTimeout(function() {
            //$("#roq").load("main-page.html");
          switchLoginDivsForMainDivs();
          loadSpinner(off);
        }, 5200);
      };
    }, (error) => {
        // auth rejected
        // remain in login page until log successful
      console.log("authentication error.");
      loadSpinner(off);
      fadeLogin(off);
      console.log(error);
    });
  });

  function transitionToMainScreen() {
    fadeLoginCredentials();
  };

  function fadeLoginCredentials() {
    $("#red").removeClass("fadeIn");
    $("#red").css("-webkit-animation-delay", "0s");
    $("#red").addClass("fadeOut");
    setTimeout(fadePostigTitle, 1300);
  };

  function fadePostigTitle() {
    $("#post").removeClass("fadeInUp");
    $("#post").addClass("fadeOutUp");
  };

  function switchLoginDivsForMainDivs() {
    $("#orange").hide();
    $("#green").hide();
    $("#left").show();
    $("#right").show();
  };

  function transition_page() {
    transition_login_creds();
    // setTimeout(transition_spin(), 400);
  };

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

  function fadeLogin(value) {
    if (value) {
      $("#orange").fadeTo(500, 0.55);
      $("#green").fadeTo(500,0.55);
    } else {
      // come back to this and figure out a better solution to transition/load
      $("#orange").fadeTo(1,1);
      $("#green").fadeTo(1,1);
      // fadeIn() only works if divs are completely hidden
      // $("#orange").fadeIn();
      // $("#green").fadeIn();
    };
  };

  function loadSpinner(value) {
    if (value) {
      $("#preload").addClass("active"); //
      $("#loader").css("pointer-events", "auto"); //
      $("#spinner").css("visibility", "visible"); //
    } else {
      $("#preload").removeClass("active"); //
      $("#loader").css("pointer-events", "none"); //
      $("#spinner").css("visibility", "hidden"); //
    }
  }

  //clear input data, sets to null, and unblurs fields on screen
  $("#cancel-btn").on('click', function() {
    $("#user_name").val(null).blur();
    $("#pass_word").val(null).blur();
  });
});
