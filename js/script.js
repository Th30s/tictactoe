let playersTurn = "X"
// let XsTurn = true;
let turnsTaken = 0;
let gameEnd = false;
let positionsOfX=[];
let positionsOfO=[];
let winningPositions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

function changePlayer(){
    if (playersTurn === "X"){
        playersTurn = "O";
        turnsTaken = turnsTaken + 1
    } else if (playersTurn === "O"){
        playersTurn = "X";
        turnsTaken = turnsTaken + 1
    }
}

function performLogic(buttonId,tileId){
    if(gameEnd===false){
    $(tileId).html(playersTurn);
    changePlayer();
    }
    console.log(turnsTaken);
    if (turnsTaken === 9){
        gameEnd = true;
        $("#gameResults").html("<h1>Its a Draw!</h3>");
    }
    console.log(gameEnd);
}

$("#button1").click(function() {
    performLogic("#button1","#tile1");
    
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

