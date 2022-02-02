const cells = document.querySelectorAll('.row > div');
let resetButton = document.getElementById('reset-button'); 
let turnCounter = 0;

const winCombos = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]]
] ; 

resetButton.addEventListener("click", function() {
    window.location.reload(); 
}); 


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked, { once: true });
}

function cellClicked(event) {
    if (turnCounter % 2 == 0) {
        event.target.textContent = 'X';
    } else {
        event.target.textContent = 'O';
    }
    turnCounter++;
    checkForWin(); 
}

function checkForWin() {
    for (let i = 0; i < winCombos.length; i++) {   
        let xCount = 0;
        let oCount = 0; 
        for (let m = 0; m < winCombos[i].length; m++) {
            if (winCombos[i][m].textContent == "X") {
                xCount++
            }
            else if (winCombos[i][m].textContent == "O") {
                oCount++
            }
        }
        if (xCount == 3) {
            alert("X Wins")
            return 
        } else if (oCount == 3) {
            alert("O Wins")
            return
        }
    }
    if (turnCounter == 9) {
        alert("Draw")
    }
}

