
var board = document.querySelector('#board')
// selecting all the squares on the screen
var squares = document.querySelectorAll('.square')
var result = document.querySelector('.result')
var gameBoard = ['','','','','','','','','']
var player = 'X'
    //var playerTwo = 'O'
    
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function (event) {
        var square = event.target
        if (square.textContent === '') {
            square.classList.toggle('red_background') 
            // Marking the squre with players symbol
            square.textContent = player
            // Alternating between each player
                if (player === 'X') {
                    player = 'O'
                } else {
                    player = 'X'
                }
                //checking after every move if the game is won
            determineWin(gameBoard)
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

    var gameWin = false
    for (var i = 0; i < winCombo.length; i++) {
        var [a,b,c] = winCombo[i]
        if (
            gameBoard[a] !== '' && 
            gameBoard[a] === gameBoard[b] && 
            gameBoard[b] === gameBoard[c]
            ) {
            gameWin = true
            break;
            } 
        } if (gameWin === true) {
            console.log(player + ' wins')
            result.innerHTML = (player + 'wins!')
        } 
}


    
    // if (
    //     squares[a].textContent !== '' && 
    //     squares[a].textContent === squares[b].textContent && 
    //     squares[b].textContent === squares[c].textContent
    //     ) }   return tru
    // var a = winCombo[0]
    // var b = winCombo[1]
    // var c = winCombo[2]
    // if (a === '' || b === '' || c === '') {