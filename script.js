function TicTacToe(){
  var ticTacToe = this;
  this.board = $("#board");
  this.size = ["1","2","3",
              "4","5","6",
              "7","8","9"];
  this.player = true;
  this.playerX = [];
  this.playerO = [];

  for (var i=0; i<this.size.length; i++){
    var squares = $("<div class=squares>");
    squares.appendTo(this.board);
    squares.on('click',function(){
      ticTacToe.playGame(this);
    });
  }
}

TicTacToe.prototype.playGame = function(square){
   if(this.player){
    $(square).addClass("x");
    $(square).unbind("click");
    this.playerX.push($(square));
    console.log(this.playerX);
    this.player = false;
  }
  else {
   $(square).addClass("circle");
   $(square).unbind("click");
   this.playerO.push($(square));
   this.player = true;
  }
}

$("h2").on('click',function(){
  $(".squares").remove();
  $(this).html("Play Again");
  var game = new TicTacToe();
})


/*$(document).ready(function(){

  var squaresArray = ["1","2","3",
  "4","5","6",
  "7","8","9"];

  var winnerArray = ["1","2","3"];
  var squares;
  var playerTurn = true;
  var player1 = [];
  var player2 = [];


  setUpSquares();
  function setUpSquares(){
    var board = $("#board");
    for(var i=0; i<squaresArray.length; i++){
      //var squares = $("<div class=squares>");
      squares = $("<div class=squares>");
      var text = $("<p class=textStyle>");
      squares.append(text);
      text.append(squaresArray[i]);
      board.append(squares);
      startGame();
    }
  }

  function startGame(){
    squares.on("click", changeSquare);
    function changeSquare() {
      if(playerTurn===true){
        var text = $(this).text();
        $(this).addClass("x");
        if ($(this).hasClass("x")){
          $(this).unbind("click");
        };
        player1.push(text);
        /////////////////
        if (player1.length===3){
          console.log("more than 3");
          for(var i=0; i<player1.length; i++){
            if($.inArray(player1[i], winnerArray) !== -1){
              console.log("is in array");

            } else {
              console.log("not in array");
            }
          }
        }
        ////////////
        return playerTurn=false;
      }
      if(playerTurn===false){
        var text = $(this).text();
        $(this).addClass("circle");
        if ($(this).hasClass("circle")){
          $(this).unbind("click");
        };
        player2.push(text);
        return playerTurn=true;
      }

}
}

$("h2").click(function(){
  $(".squares").removeClass("x");
  $(".squares").removeClass("circle");
  var player1 = [];
  var player2 = [];
  console.log(squares + " My squares");
  startGame();
});
}); // close document ready
*/
