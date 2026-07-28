var playing = false;
var score = 0;
var trialsleft = 3;

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
  });

  function addHearts() {
    $("#trialsleft").empty();

    for (var i = 0; i < trialsleft; i++) {
      $("#trialsleft").append(
        '<img src="https://cdn.hackclub.com/019fa8c0-915b-790a-aee5-eb2b6e0d65d2/wrong.png" class="life" alt="">'
      );
    }
  }
});
