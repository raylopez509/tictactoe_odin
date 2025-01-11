const players = [
  {
    name: 'playerOneName',
    marker: 'X',
  },
  {
    name: 'playerTwoName',
    marker: 'O',
  },
];

function GameBoard() {
  const gameBoard = ['', '', '', '', '', '', '', '', ''];
  function displayBoard() {
    let row = '';
    for (i = 0; i < gameBoard.length; i++) {
      if (gameBoard[i] === 'X' || gameBoard[i] === 'O') {
        row = row + gameBoard[i];
      } else {
        row = row + i;
      }
      if (i == 2 || i == 5 || i == 8) {
        console.log(row);
        row = '';
      }
    }
  }
  function updateBoard(square, player) {
    gameBoard[square] = player.marker;
  }
  return {
    displayBoard,
    updateBoard,
  };
}

const board = GameBoard();
board.displayBoard();

board.updateBoard(0, players[0]);
board.displayBoard();
