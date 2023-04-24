
// // Selects the HTML element with the class board and assigns it to the variable 'board'
var board = document.querySelector('#board')

// Selects all the HTML elements with the class 'square' and assigns them to the variable 'squares'
var squares = document.querySelectorAll('.square')

// Selects the HTML element with the ID of result and assigns it to the variable 'result'
var result = document.querySelector('#result')

// Selects the HTML button with the ID restart and assigns it to a variable 'restartButton'
var restartButton = document.querySelector('#restart')

// Selects the HTML button with the ID startButton and assigns it to the variable 'startButton'
var startButton = document.querySelector('#startButton')

// Selects the HTML button with the ID assignButton and assigns it to the variable 'startButton
var assignButton = document.getElementById('assignButton')

// Creates an array and initialises it with nine empty strings.
var gameBoard = ['','','','','','','','','']

// sets the current player to 'X'
var player = 'X'

// trying to initialise the players to empty strings
var players = ['', '']

// Initialises the game to False
var gameOver = false

// Setting win or tie results to keep it out of code 
var gameWon = (' wins by a spectacular display')
var gameTie = ("It's  tie!")

// Setting a variable for audio track
var winSound = new Audio("./mixkit-medieval-show-fanfare-announcement-226.wav")
var gameSound = new Audio('./mixkit-game-ball-tap-2073.wav')

// Functions to call audio track
function playAudio() {
    winSound.play()
}
function gameAudio() {
    gameSound.play()
}

// Adds an event listner to the start button on the page, when clicked the function inside the event listener is executed
startButton.addEventListener('click', function (){
    // Selects the board
    board = document.querySelector('#board')
    // Sets the dispaly of the board to grid - from 'none' on css page
    board.style.display = 'grid'
})

// Creates a event listener to listen for the click of the restart button.
restartButton.addEventListener('click', restartGame)

// Click event from assignButton to store players name in a variable
// Doesn't work to the extent I would like
assignButton.addEventListener('click', assignPlayers)
function assignPlayers (event){
    // Prevents form from resetting while active
    event.preventDefault()
    // Assinging players 1+2 to different variables from input fields for future features 
    var player1 = document.getElementById('playerNameInput1').value
    var player2 = document.getElementById('playerNameInput2').value
    // Storing player names in an array
    var players =  [player1, player2]
    console.log(players[0])

    // Selects the element with the class players and assigns it to the variable playersName
    var playersName = document.querySelector('.players')
    for (i = 0; i < 2; i++) {
        // Checks to ensure the input field doesn't contain whitespace
        if (players[i].trim() !== '') {
        // Creates a new list item, then sets it's text content to the players name at index [i], then apends it to the new list item playersName
        var displayName = document.createElement('li')
        displayName.textContent = players[i]
        playersName.appendChild(displayName)
        // Clears the input field by setting the values of the input fields to empty strings
        document.getElementById('playerNameInput1').value = ''
        document.getElementById('playerNameInput2').value = ''
        }
    }
}

// This loop adds a click event listener to each square on the game board.
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function (event) {
        event.preventDefault()
        if (gameOver) {
            return; // if game is over, return without stepping through rest of code.
        }
        // Using event.target the function gets a reference to the clicked square.
        var square = event.target
        gameAudio();
        
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

// Game logic
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
            // if statement to check if gameWin is equal to 'true', is so:
        } if (gameWin === true) {
            // sets gameOvere to true
            gameOver = true;
            playAudio();
            // for debugging purposes
            // console.log(winningPlayer + gameWon)
            // Thes the innerHTML of the result element to the concatenated string of winningPlayer and gameWon, displaying the results of the winner.
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
        // squares[i].classList.remove('green_background')
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
