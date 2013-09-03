var player1Position = 0;
var player2Position = 0;
$(document).ready(function() {
  $(document).on('keyup', function(event) {
    // Detect which key was pressed and call the appropriate function
    var player1Position = 0;
    var player2Position = 0;
    if (event.keyCode == 80) {
      console.log("you pressed the letter p");
      $("#player1_strip").find(".active").removeClass()

    };
    if (event.keyCode == 81) {
      console.log("you pressed the letter q");
      $("#player2_strip").find(".active").removeClass()

    };

  });
});

   












