// Run this function after the page has loaded

//var Stamps = null;
$.getScript('./stamps.js', function() {
  Stamps = new Stamps();

  var t01 = performance.now();
  Stamps.connect({isDev: true}).then(() => {
    var t02 = performance.now();
    activateCredField();
    console.log("connect successful; time spent: " + (t02-t01));
  }, (error) => {
    console.log("an error occured.");
    console.log("error: " + error);
  });
});

$(function () {
//  $.getScript('./stamps.js', function() {
    //Stamps = new Stamps();

    $("#login-btn").on('click', function() {
      //fade tags title and logins
      $("#orange").fadeTo(500, 0.55);
      $("#green").fadeTo(500,0.55);
      console.log("stamps client: " + Stamps.client);

      //activate spinning loader  & disables buttons
      $("#preload").addClass("active"); //
      $("#loader").css("pointer-events", "auto"); //
      $("#spinner").css("visibility", "visible"); //

      //place credentials into a dictionary
      console.log("name: " + $("#user_name").val());
      console.log("word: " + $("#pass_word").val());
      var authCreds = {
        id: "b05c1b27-349a-4387-8ed5-f3f957d6536d",
        username: $("#user_name").val(),
        password: $("#pass_word").val(),
      };

      Stamps.auth(authCreds, true).then(() => {
        console.log("authentication success!");
      }, (error) => {
        console.log("authentication error.");
        console.log(error);
      });

      // Stamps.connect({isDev: true}).then(() => {
      //   console.log("connect successful");
      // }, (error) => {
      //   console.log("an error occured.");
      //   console.log("error: " + error);
      // });

      if ($("#user_name").val(), $("#pass_word").val()) {
        /// load page
        setTimeout(function () {
          transition_page();
        }, 1500);
      };

      setTimeout(function() {
        $("#roq").load("main-page.html");
      }, 5200);

    });
//  });

  // reduces performance; come back to it later
  // $(document).ready(function() {
  //   $('select').material_select();
  // });
  //Retreive login credentials
  // $("#login-btn").on('click', function() {
  //
  //   //fade tags title and logins
  //   $("#orange").fadeTo(500, 0.55);
  //   $("#green").fadeTo(500,0.55);
  //
  //   //activate spinning loader  & disables buttons
  //   $("#preload").addClass("active"); //
  //   $("#loader").css("pointer-events", "auto"); //
  //   $("#spinner").css("visibility", "visible"); //
  //
  //   //authenticate user -- TO DO
  //   $.getScript('./stamps.js', function() {
  //     Stamps = new Stamps();
  //     var authCreds = {
  //       id: "b05c1b27-349a-4387-8ed5-f3f957d6536d",
  //       username: $("#user_name").val(),
  //       password: $("#pass_word").val(),
  //     };
  //
  //     Stamps.connect({isDev: true}).then(() => {
  //       console.log("connect successful");
  //     }, (error) => {
  //       console.log("an error occured.");
  //       console.log("error: " + error);
  //     });
  //     // if SUCCESS transition into main page
  //     if ($("#user_name").val(), $("#pass_word").val()) {
  //       /// load page
  //       setTimeout(function () {
  //         transition_page();
  //       }, 1500);
  //     };
  //   });
  //   setTimeout(function() {
  //     $("#roq").load("main-page.html");
  //   }, 5200);
  //
  // });

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

function activateCredField() {
  console.log("client is ready to load info");
}
