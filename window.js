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

  // login button
  // validates credentials and transitions if successful
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
          transitionToMainScreen();
        }, 1500);
        setTimeout(function() {
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

  $("#textarea2").on('blur', function() {
    console.log("Sender area is being blurred");
    console.log("Sender value: " + typeof($("#textarea1").val()));
    verifyAddress($("#textarea2").val());
  })

  // cancel button
  // clears input data, sets to null, and unblurs fields on screen
  $("#cancel-btn").on('click', function() {
    $("#user_name").val(null).blur();
    $("#pass_word").val(null).blur();
  });

  function verifyAddress(address) {
    var splitAddressRaw = address.split("\n");
    var splitAddressRawLength = splitAddressRaw.length;
    var splitAddressCleaned = [];
    // var verifyCleanedAddress = {
    //   FullName: "",
    //   Address1: "",
    //   City: "",
    //   State: "",
    //   ZIPCode: ""
    // };

    // for length of 3 i.e.
    //  full name
    //  street
    //  city state zip
    for (var i = 0; i < splitAddressRawLength; i++) {
      // if the loop has reached the city state zip element
      if (i === (splitAddressRawLength - 1)) {
        var cityStateZipRaw = splitAddressRaw[i].split(" ");
        var cityStateZipClean = [];
        cityStateZipClean.push(cityStateZipRaw[cityStateZipRaw.length - 1]);
        cityStateZipRaw.pop(); // zip popped; city state remain
        cityStateZipClean.push(cityStateZipRaw[cityStateZipRaw.length - 1]);
        cityStateZipRaw.pop(); // state popped; city remain
        // if the array is more than one (meaning a city with a space)
        // join the names and push it, else push normally
        if (cityStateZipRaw.length > 1) {
          cityStateZipClean.push(cityStateZipRaw.join(" "));
        } else {
          cityStateZipClean.push(cityStateZipRaw[cityStateZipRaw.length - 1]);
        }
        splitAddressCleaned.push(cityStateZipClean.reverse());
      } else {
        splitAddressCleaned.push(splitAddressRaw[i]);
      };
    };
    console.log("Sender value split and cleaned: " + splitAddressCleaned);
  };

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
    };
  };

});
