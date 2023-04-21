# Tic-Tac-Toe #
first commit
## :computer: [Click here](https://gist.git.generalassemb.ly/kasun/85189b877c6ce92c3c9337d4d977b79d) to see my live project! 

### :page_facing_up: About 

- How to play my great game of Tic Tac

### :pencil2: Planning & Problem Solving

- Create a HTML layout for the game board, 3x3 grid of squares, 
- Use CSS to style the game board which includes the grid
- add a click event listener for all the squares in the grid
- mark clicked square with either a X or O depending on the players turn
- I will have to hard code all possible winning combinations
- Then declare a function to check winning combinations against hard coded wins
- check to see if the game is won (so the game doesnt end after first click). stuck thinking about how many winning combinations there are, I think there is 8, I have noted the positions in my js file.
- could store each players moves in an array and then check if any of their moves creates a winning combination.
- use that same function to determine the winner
- check to see if there are any empty squares and use that to determine a tie
- check to see if game has drawn then reset the board after displaying a message, ideally a button to reset board rather than immediatly.
- check to see if a player as won
- display winner

![person drawing](https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)

### :rocket: Cool tech

- Make it look pretty (Ideas: animations, highlight boxes to green when either player wins)
- Hide grid so user needs to press a start button
- Allow users to add a name, then display name/winner name

### :scream: to fix :poop:

- toggle between red for player 1 and blue for player 2, because you know.. spiderman

### :sob: Lessons learnt

Found I needed to create another variable to set the winning player
because I was just alternating between X and O, when X won it would display O wins

### :white_check_mark: Future features

Cool things I would add if I can keep working on this
