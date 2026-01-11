let btn = document.querySelectorAll(".cell");
let resetBtn = document.querySelector("#reset");

let turnO = true;

const winningConditions = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Col 1
    [1, 4, 7], // Col 2
    [2, 5, 8], // Col 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6]  // Diagonal 2
];

btn.forEach((cell) =>{
    cell.addEventListener("click" , () =>{
        if(turnO){
            cell.innerText = "O";
            turnO = false;
        }else{
            cell.innerText = "X";
            turnO = true;
        }
        cell.disabled = true;

        checkWinner();
    });
});
