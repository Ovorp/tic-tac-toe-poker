let keepingTrack = [];
let turn = 0;
let gameOver = false;

function play(box) {
    let clickedBox = document.getElementById(box);
    const playerName = document.getElementById('player');
if (keepingTrack[box] !== undefined) {
    return;
}
    clickedBox.innerHTML = playerName.innerHTML;
    keepingTrack[box] = playerName.innerHTML;
    (playerName.innerHTML === 'X') ? playerName.innerHTML = 'O' : playerName.innerHTML = 'X';
    turn++;
    winner();
    if (gameOver === true) {
        resetTheGame();
    }
}

function winner() {
    if (turn > 4) {
        if (keepingTrack[0] !== undefined && keepingTrack[0] === keepingTrack[1]  && keepingTrack[0] === keepingTrack[2]) {
            alert(`Winner is player ${keepingTrack[0]}`);
            gameOver = true;

        } else if (keepingTrack[3] !== undefined && keepingTrack[3] === keepingTrack[4]  && keepingTrack[3] === keepingTrack[5]) {
            alert(`Winner is player ${keepingTrack[3]}`);
            gameOver = true;

        } else if (keepingTrack[6] !== undefined && keepingTrack[6] === keepingTrack[7]  && keepingTrack[6] === keepingTrack[8]) {
            alert(`Winner is player ${keepingTrack[6]}`);
            gameOver = true;

        } else if (keepingTrack[0] !== undefined && keepingTrack[0] === keepingTrack[3]  && keepingTrack[0] === keepingTrack[6]) {
            alert(`Winner is player ${keepingTrack[0]}`);
            gameOver = true;

        } else if (keepingTrack[1] !== undefined && keepingTrack[1] === keepingTrack[4]  && keepingTrack[1] === keepingTrack[7]) {
            alert(`Winner is player ${keepingTrack[1]}`);
            gameOver = true;

        } else if (keepingTrack[2] !== undefined && keepingTrack[2] === keepingTrack[5]  && keepingTrack[2] === keepingTrack[8]) {
            alert(`Winner is player ${keepingTrack[2]}`);
            gameOver = true;

        } else if (keepingTrack[0] !== undefined && keepingTrack[0] === keepingTrack[4]  && keepingTrack[0] === keepingTrack[8]) {
            alert(`Winner is player ${keepingTrack[0]}`);
            gameOver = true;

        } else if (keepingTrack[2] !== undefined && keepingTrack[2] === keepingTrack[4]  && keepingTrack[2] === keepingTrack[6]) {
            alert(`Winner is player ${keepingTrack[2]}`);
            gameOver = true;
        } else if (turn === 9) {alert(`CAT's Game`);
        gameOver = true;}
    }
}

function resetTheGame() {
    gameOver = false;
    turn = 0;
    keepingTrack = [];
    const allBox = document.querySelectorAll('td')
    allBox.forEach(val => val.innerHTML = '')
}