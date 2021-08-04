let playerX = document.getElementById("player-x");
let playerO = document.getElementById("player-o");
let playarea = document.getElementById("playboard");
let resetbtn = document.getElementById("resetbtn");
let winnerdisplay = document.getElementById("win");
let playerType;
let resetid = "";
let signs = [[], [], []];
let count = 0;
let turnOffPointer
function setPlayer(id) {
    console.log(" this is ", id);
    if (id === "player-x") {
        playerType = "X";
        playerX.style.pointerEvents = "none";
        playerO.classList.add("hide");
        playerX.classList.remove("hide");
    } else {
        playerType = "O";
        playerO.style.pointerEvents = "none";
        playerX.classList.add("hide");
        playerO.classList.remove("hide");
    }
    playarea.classList.remove("hide");
    resetbtn.classList.remove("hide");
    resetid = id;
    console.log(resetid);
}
function setSign(event, index, indexs) {
    turnOffPointer = document.getElementById(event.target.id);
    if (playerType === 'X') {
        event.target.innerHTML = 'X';
        playerType = 'O';
    } else {
        event.target.innerHTML = 'O';
        playerType = 'X';
    }
    turnOffPointer.style.pointerEvents = "none";
    count = count + 1;
    playerWin(index, indexs, turnOffPointer, count);
}
function playerWin(index, indexs, turnOffPointer, count) {
    signs[index][indexs] = turnOffPointer.innerHTML;
    winner(count);
}
function winner(count) {
    let winnerSign;
    if (signs[0][0] == signs[0][1] && signs[0][1] == signs[0][2]) {
        winnerSign = signs[0][0];
    } else if (signs[1][0] == signs[1][1] && signs[1][1] == signs[1][2]) {
        winnerSign = signs[1][0];
    } else if (signs[2][0] == signs[2][1] && signs[2][1] == signs[2][2]) {
        winnerSign = signs[2][0];
    } else if (signs[0][0] == signs[1][0] && signs[1][0] == signs[2][0]) {
        winnerSign = signs[1][0];
        console.log("this is loop called");
    } else if (signs[0][1] == signs[1][1] && signs[1][1] == signs[2][1]) {
        winnerSign = signs[0][1];
    } else if (signs[0][2] == signs[1][2] && signs[1][2] == signs[2][2]) {
        winnerSign = signs[0][2];
    } else if (signs[0][0] == signs[1][1] && signs[1][1] == signs[2][2]) {
        winnerSign = signs[0][0];
    } else if (signs[0][2] == signs[1][1] && signs[1][1] == signs[2][0]) {
        winnerSign = signs[0][2];
    } else {
        console.log(count);
        if (count == 9) {
            winnerdisplay.innerHTML = "MATCH DRAW";
            console.log("dhamresh pal");
        }
    }
    displaywinner(winnerSign);
    console.log("this is winner statement win ", win);
}
function displaywinner(winnerSign) {
    console.log(winnerSign);
    if (winnerSign != undefined) {
        winnerdisplay.innerHTML = `${winnerSign}` + " is winner";
        console.log(document.getElementById("span2").innerHTML);
        for (let i = 1; i < 10; i++) {
            if (document.getElementById(`span${i}`).innerHTML == "") {
                document.getElementById(`span${i}`).style.pointerEvents = "none";
            }
        }
    }
}
function resetGame() {
    count = 0;
    signs = [[], [], []];
    for (let i = 1; i < 10; i++) {
        document.getElementById(`span${i}`).innerHTML = "";
        document.getElementById(`span${i}`).style.pointerEvents = "auto";
    }
    resetbtn.classList.add("hide");
    playerType = "";
    playerX.style.pointerEvents = "auto";
    playerO.style.pointerEvents = "auto";
    winnerdisplay.innerHTML = "";
    if (resetid == "player-x") {
        playerO.classList.remove("hide");
        playarea.classList.add("hide");
    }
    else {
        playerX.classList.remove("hide");
        playarea.classList.add("hide");
    }
}

