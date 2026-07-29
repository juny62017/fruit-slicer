var playing = false;
var score = 0;
var trialsleft = 3;
var step = 0;
var action;
var fruits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

$(function () {
  $("#front").show();
  $("#score").hide();
  $("#trialsleft").hide();
  $("#gameOver").hide();

  $("#startReset").click(function () {
    if (playing) {
      location.reload();
      return;
    }

    playing = true;
    score = 0;
    trialsleft = 3;

    $("#front").hide();
    $("#gameOver").hide();
    $("#score").show();
    $("#scoreValue").html(score);
    $("#trialsleft").show();
    $("#startReset").html("Reset Game");

    addHearts();
    startAction();
  });

  $("#fruit1").mouseover(function () {
    if (!playing) {
      return;
    }

    score++;
    $("#scoreValue").html(score);

    var sound = $("#slicesound")[0];
    sound.currentTime = 0;
    sound.play();

    clearInterval(action);
    $("#fruit1").hide("explode", 500);
    setTimeout(startAction, 500);
  });

  function addHearts() {
    $("#trialsleft").empty();

    for (var i = 0; i < trialsleft; i++) {
      $("#trialsleft").append(
        '<img src="https://cdn.hackclub.com/019fa8c0-915b-790a-aee5-eb2b6e0d65d2/wrong.png" class="life" alt="">'
      );
    }
  }

  function startAction() {
    chooseRandom();

    $("#fruit1")
      .show()
      .css({
        left: Math.round(550 * Math.random()),
        top: -50,
      });

    step = 1 + Math.round(5 * Math.random());

    action = setInterval(function () {
      var nextTop = $("#fruit1").position().top + step;
      $("#fruit1").css("top", nextTop);

      if (nextTop > $("#fruitcontainer").height() - 50) {
        resetFruit();
      }
    }, 10);
  }

  function resetFruit() {
    clearInterval(action);
    startAction();
  }

  function chooseRandom() {
    var fruitNumber = fruits[Math.round(9 * Math.random())];

    $("#fruit1").attr(
      "src",
      "https://raw.githubusercontent.com/Saumya-07/Fruit-Slicer/master/images/" +
        fruitNumber +
        ".png"
    );
  }
});
