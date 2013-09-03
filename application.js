var player1Position = 0;
var player2Position = 0;
$(document).ready(function() {
  $(document).on('keyup', function(event) {
    // Detect which key was pressed and call the appropriate function
    var boardLength = 30;
    if (event.keyCode == 80) {
      $("#player1_strip").find(".active").removeClass()
      .next().addClass("active");

      if(player1Position >= boardLength) {
        alert("Player 1 wins!")
      } 
      player1Position++;

    };
    if (event.keyCode == 81) {
      $("#player2_strip").find(".active").removeClass()
      .next().addClass("active");
      if(player2Position >= boardLength) {
        alert("Player 2 wins!")
      } 
      player2Position++;
    };

  });
});

   












