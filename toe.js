document.addEventListener('DOMContentLoaded', function(){

var board = document.querySelector('#board')
// Selects all the HTML elements with the class 'square' and assigns them to the variable 'squares'
var squares = document.querySelectorAll('.square')
// Selects the HTML element with the ID of result and assigns it to the variable 'result'
var result = document.querySelector('#result')
// Selects the HTML button with the ID restart and assigns it to a variable 'restartButton'
var restartButton = document.querySelector('#restart')
var startButton = document.querySelector('#startButton')

var assignButton = document.getElementById('assignButton')

// var playerName = document.querySelector('.playerNameInput1')
// var playerNameInput1 = 


// Creates an array and initialises it with nine empty strings.
var gameBoard = ['','','','','','','','','']
// sets the current player to 'X'
var player = 'X'
// Initialises the game to False
var gameOver = false
var gameWon = (' wins by a spectacular display')
var gameTie = ("It's  tie!")

assignButton.addEventListener('click', assignPlayers)

function assignPlayers (event){
    event.preventDefault()
    var player1 = document.getElementById('playerNameInput1').value
    var player2 = document.getElementById('playerNameInput2').value
    var players =  [player1, player2]
    var playersName = document.querySelector('.players')
    for (i = 0; i < 2; i++) {
        if (players[i].trim() !== '') {
        var displayName = document.createElement('li')
        displayName.textContent = players[i]
        playersName.appendChild(displayName)
        document.getElementById('playerNameInput1').value = ''
        document.getElementById('playerNameInput2').value = ''
        }
    }

}

startButton.addEventListener('click', function (){
    board = document.querySelector('#board')
    board.style.display = 'grid'
})
restartButton.addEventListener('click', restartGame)
// This loop adds a click event listener to each square on the game board.
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function (event) {
        if (gameOver) {
            return; // if game is over, return without stepping through rest of code.
        }
        // Using event.target the function gets a reference to the clicked square.
        var square = event.target

        // creates array from squares with the index of square. 
        // using Array.from() to convert the 'squares' NodeList to an array that can be iterated through.
        // then uses the indexOf() to find the index of the clicked square in the array.
        var index = Array.from(squares).indexOf(square)
        // Checking to see if the clicked square is empty - if it is, continue iterating through the code.
        if (square.textContent === '') {
            // square.classList.toggle('red_background') 
            // Marking the squre with players symbol
            square.textContent = player
            // Updates the gameBoard array with the current players symbol (X/O)
            gameBoard[index] = player
            // Alternating between each player
                if (player === 'X') {
                    player = 'O'
                    square.style.color = 'blue'

                } else {
                    player = 'X'
                    square.style.color = 'red'
                }
                //checking after every move if the game is won
            determineWin(gameBoard, player)
        } 
        })
}


function determineWin(gameBoard) {
var winCombo = 
    [   
    [0,1,2], // top row
    [3,4,5], // middle row
    [6,7,8], // bottom row

    [0,3,6], // left column
    [1,4,7], // middle column
    [2,5,8], // right columm

    [0,4,8], // diagonal from top left
    [2,4,6], // diagonal from top right
    
]

// Declares a variable and initialises it as an empty string
var winningPlayer = ''
    // Declares a variable gameWin and sets it as false.
    var gameWin = false
    // var winningSquares = []
    // Starts a for loop to iterate through each element in the winCombo array
    for (var i = 0; i < winCombo.length; i++) {
        // This deconstructs the winCombo array and assigns each element to the variables 'a', 'b' and 'c'
        var [a,b,c] = winCombo[i]
        if (
            // This comparison is checking to see if 'a', 'b' and 'c' have the same value (first checking if its not empty)
            gameBoard[a] !== '' && 
            gameBoard[a] === gameBoard[b] && 
            gameBoard[b] === gameBoard[c]
            ) {
            // assigns the winningPlayer to [a] as it is the first variable in the list. 
            gameWin = true
            winningPlayer = gameBoard[a]
            // var winningSquares = [a,b,c]
            break;
            } 

        } if (gameWin === true) {
            gameOver = true;
            console.log(winningPlayer + gameWon)
            result.innerHTML = (winningPlayer + gameWon)
          
            // Using the .includes() method to check if there are empty squares left on the screen, if false then game must be tied.
        } else if (gameBoard.includes('') === false) {
            gameOver = true
            result.innerHTML = gameTie
        }
}

// Need a function to reset the game.
// Set all variables back to inital state.
function restartGame() {
    for (var i = 0; i < squares.length; i++) {
        // resets the text content of each square
        squares[i].classList.remove('green_background')
        squares[i].textContent = ''
        // resetting the gameBoard array to an empty array
        gameBoard[i] = ''

    }
    // resets both gameWin and gameOver varibles to false
    gameWin = false
    gameOver = false
    // resets the winning results
    result.innerHTML = ''
}

function removeName(event) {
    event.preventDefault()
    player1.value = ''
    player2.value = ''
}


})
//code that I can't get right (delete after)



//     for (var i = 0; i < squares.length; i++) {
//     if (winningSquares.includes(squares[i])) {
//         var index = winningSquares[i]
//         squares[index].style.backgroundColor = 'green'
//     }   
// }
  
                // for (var i = 0; i < winningSquares.length; i++) {
                //     var squareId  = square + winningSquares[i]
                //     var square = document.getElementById(squareId)
                //      var index = document.querySelectorAll('winningSquares')
                //     console.log(square)
                //     square.style.backgroundColor = 'green'

                    // var squareId = 'square' + winningSquares[i]
                    // var square = document.getElementById(squareId)
                    // square.
            // }
