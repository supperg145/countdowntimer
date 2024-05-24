//input values should set the values of the timer
//startTimer() function should start the timer
//stopTimer() stop the timer and reset values

$(document).ready(function () {
  let interval;

  $(".newTimer").css("display", "none");
  $(".timer-container").css("display", "none");

  $(".startTimer").on("click", function () {
    let seconds = parseInt($(".setSeconds").val());
    let minutes = parseInt($(".setMinutes").val());
    let hours = parseInt($(".setHours").val());

    $(".newTimer").fadeIn();
    $(".timer-container").fadeIn();
    $(".setTimer-container").hide();
    console.log(seconds, minutes, hours);
    function updateDisplay() {
      isNaN(seconds)
        ? $(".seconds").text("00")
        : $(".seconds").text(seconds < 10 ? `0${seconds}` : seconds);
      isNaN(minutes)
        ? $(".minutes").text("00")
        : $(".minutes").text(minutes < 10 ? `0${minutes}` : minutes);
      isNaN(hours)
        ? $(".hours").text("00")
        : $(".hours").text(hours < 10 ? `0${hours}` : hours);
    }

    updateDisplay();

    clearInterval(interval);

    interval = setInterval(() => {
      if (seconds > 0) {
        seconds -= 1;
      } else {
        if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else {
          if (hours > 0) {
            hours -= 1;
            minutes = 59;
            seconds = 59;
          } else {
            clearInterval(interval);
            $(".newTimer").fadeIn();
            $(".resetButton").hide();
          }
        }
      }
      updateDisplay();
    }, 1000);

    $(".setTimer-container").fadeOut();
  });

  $(".resetButton").on("click", function () {
    clearInterval(interval);

    $(".seconds").text("00");
    $(".minutes").text("00");
    $(".hours").text("00");

    $(".setSeconds").val("");
    $(".setMinutes").val("");
    $(".setHours").val("");
  });

  $(".newTimer").on("click", function () {
    clearInterval(interval);
    $(".newTimer").hide();
    $(".timer-container").hide();
    $(".setTimer-container").fadeIn();

    $(".seconds").text("00");
    $(".minutes").text("00");
    $(".hours").text("00");

    $(".setSeconds").val("");
    $(".setMinutes").val("");
    $(".setHours").val("");
  });

  function playAlarmSound() {
    $("#alarmSound")[0].play();
  }
});
