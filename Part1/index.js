const keepingTrack = [];
let turn = 0;

function play(box) {
    let clickedBox = document.getElementById(box);
    const playerName = document.getElementById('player');
    clickedBox.innerHTML = playerName.innerHTML;
    keepingTrack[box] = playerName.innerHTML;
    (playerName.innerHTML === 'X') ? playerName.innerHTML = 'O' : playerName.innerHTML = 'X';
    turn++;
    winner();
    console.log(keepingTrack, turn)
}

function winner() {
    if (turn > 4) {
        if (keepingTrack[0] !== undefined && keepingTrack[0] === keepingTrack[1]  && keepingTrack[0] === keepingTrack[2]) {
            alert(`Winner is player ${keepingTrack[0]}`)

        } else if (keepingTrack[3] !== undefined && keepingTrack[3] === keepingTrack[4]  && keepingTrack[3] === keepingTrack[5]) {
            alert(`Winner is player ${keepingTrack[3]}`)

        } else if (keepingTrack[6] !== undefined && keepingTrack[6] === keepingTrack[7]  && keepingTrack[6] === keepingTrack[8]) {
            alert(`Winner is player ${keepingTrack[0]}`)

        } else if (keepingTrack[0] !== undefined && keepingTrack[0] === keepingTrack[3]  && keepingTrack[0] === keepingTrack[6]) {
            alert(`Winner is player ${keepingTrack[0]}`)

        } else if (keepingTrack[1] !== undefined && keepingTrack[1] === keepingTrack[4]  && keepingTrack[1] === keepingTrack[7]) {
            alert(`Winner is player ${keepingTrack[0]}`)

        } else if (keepingTrack[2] !== undefined && keepingTrack[2] === keepingTrack[5]  && keepingTrack[2] === keepingTrack[8]) {
            alert(`Winner is player ${keepingTrack[0]}`)

        } else if (keepingTrack[0] !== undefined && keepingTrack[0] === keepingTrack[4]  && keepingTrack[0] === keepingTrack[8]) {
            alert(`Winner is player ${keepingTrack[0]}`)

        } else if (keepingTrack[2] !== undefined && keepingTrack[2] === keepingTrack[4]  && keepingTrack[2] === keepingTrack[6]) {
            alert(`Winner is player ${keepingTrack[0]}`)
        }
    }
    if (turn === 9) {
        alert("CAT's Game")
    }
}