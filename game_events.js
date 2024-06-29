'use strict'

// game board
let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

// player turn
let playerTurn = "X"

// game over
let gameOver = false

// change player function
const changePlayer = function () {
    if (playerTurn === "X") {
        playerTurn = "O"
    } else playerTurn = "X"
    $('#message').text(`${playerTurn}, it's your turn!`)    
}

// winning combinations
const winCombinations = function (gameBoard, playerTurn) {
    if ((gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] === playerTurn) ||
        (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] === playerTurn) ||
        (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] === playerTurn) ||
        (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] === playerTurn) ||
        (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] === playerTurn) ||
        (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] === playerTurn) ||
        (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] === playerTurn) ||
        (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] === playerTurn)) {
            gameOver = true
            $('#endMessage').text(`${playerTurn} wins!`) 
    } else if (gameBoard.every(index => index !== " ")) {
            gameOver = true
            $('#endMessage').text('Draw game!')
         }
}

