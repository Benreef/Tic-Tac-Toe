# Tic-Tac-Toe #

## [Click here](https://benreef.github.io/Tic-Tac-Toe/) to see my live project! 

### About 

- How to play my LOUD game of Tic Tac Toe
- Load wesbite
- Enter players names
- Click start game
- (Hopefully) claim victory
- Press restart game

### Planning & Problem Solving

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
- Store players names as variables within an array

<!-- ![person drawing](https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) -->

### Cool tech

- Make it look pretty (Ideas: animations, highlight boxes to green when either player wins)
- Hide grid so user needs to press a start button
- Allow users to add a name, then display name/winner name
- celebrate victory
- pretty background

### to fix
- Went for a loud over-the-top approach, but readability is a little tough, maybe a diffent way of being overtly OTT would be best.
- Display winner/losers name from input field in result box.
- Actually make the board a grid rather than a square. But CSS is scary

### Lessons learnt

- Making more concise git commits. !!
- Re-enforced the benefits of using more readable variable names.
- Learning how to build game logic! Gave me a greater appreciation for other games/apps that previously taken for granted.

### Future features

- Would love to add a feature that displays current players turn, realised that this would  involve changing the game logic which I am hesistent to do with my time constraints.
- Adding a win/lose counter.
- Condense two text inputs to one for the player name and store after each click/return.

