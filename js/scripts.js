var count = 0,
    newScore, finalScore = 0,
    index = 0;

function Player(playerName, score, totalScore) {
    this.playerNames = playerName;
    this.playerScores = score;
    this.totalScores = totalScore;
}
var rollDice = function () {
    result = Math.floor(Math.random() * 6) + 1;
    return result;
}
Player.prototype.AddScores = function (currentScore) {
    if (currentScore === 1) {
        this.playerScores = 0;
    } else if (currentScore !== 1) {
        this.playerScores = this.playerScores + currentScore;
    }
    return this.playerScores;
}
Player.prototype.Total = function (total) {
    return this.totalScores = this.totalScores + total;
}
$(document).ready(function () {
    var playerArray = [];
    $("#player-names").submit(function (event) {
        event.preventDefault();
        var inputName = $("#name-player").val();
        var newPlayer = new Player(inputName, 0, 0);
        playerArray.push(newPlayer);
        count++;
        // console.log(playerArray);
        $("#name" + count).append("<h2> Player:" + newPlayer.playerNames + "</h2>");

        if (count > 2) {
            alert("Players cannot exceed 2!");
            $(".names").empty();
            playerArray = [];
            count = 0;
            console.log(playerArray)
        }
        $("#name-player").val("");
    });
    $("#roll").click(function () {
        var playerTurn;
        var randomNo = rollDice();
        var findPlayer = playerArray[index];
        findPlayer.AddScores(randomNo);
        if (randomNo == 1 && index == 0) {
            $("#name" + (index + 1) + " h4").text("This Round: 0");
            $("#name" + (index + 1) + " h1").text("Dice Value: 0");
            index = 1;
            playerTurn = playerArray[index];
            alert("Oooops, You rolled a 1. " + playerTurn.playerNames + "'s turn");
        } else if (randomNo == 1 && index == 1) {
            $("#name" + (index + 1) + " h4").text("This Round: 0");
            $("#name" + (index + 1) + " h1").text("Dice Value: 0");
            index = 0;
            playerTurn = playerArray[index];
            alert("Oooops, You rolled a 1. " + playerTurn.playerNames + "'s turn");
        } else if (randomNo > 1) {
            newScore = findPlayer.playerScores;
            $("#name" + (index + 1) + " h1").text("Dice Value: " + randomNo);
            $("#name" + (index + 1) + " h4").text("This Round: " + newScore);
        }
        console.log(randomNo + " " + index + " " + newScore);
    });
    $("#hold").click(function () {
        var findPlayer = playerArray[index];
        newScore = findPlayer.playerScores;
        findPlayer.Total(newScore);
        finalScore = findPlayer.totalScores;
        console.log(finalScore);
        //Make the total become 0;//Final score, This Round, Dice Value
        findPlayer.playerScores = 0;
        $("#name" + (index + 1) + " h1").text("Dice Value: 0");
        $("#name" + (index + 1) + " h4").text("This Round: 0");
        $("#name" + (index + 1) + " h5").text("Final score: " + finalScore);
        if (finalScore > 50) alert(findPlayer.playerNames + " has won!!");
        if (index == 0) {
            index = 1;
        } else if (index == 1) {
            index = 0;
        }
    });
    $("#start").click(function () {
        count = 0;
        newScore;
        finalScore = 0;
        index = 0;
        playerArray = [];
        $(".names").empty();
    })
});