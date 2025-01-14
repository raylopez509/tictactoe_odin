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
  function updateBoard(square, marker) {
    gameBoard[square] = marker;
  }
  return {
    displayBoard,
    updateBoard,
  };
}

function GameController() {
  const players = [
    {
      name: 'playerOneName',
      marker: 'X',
      choices: [],
    },
    {
      name: 'playerTwoName',
      marker: 'O',
      choices: [],
    },
  ];

  const board = GameBoard();

  let activePlayer = players[0];

  const swapPlayers = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const playTurn = (player) => {
    board.displayBoard();
    let choice = prompt('Choose a square ' + player.name);
    console.log(choice);
    player.choices.push(choice);
    board.updateBoard(choice, player.marker);
  };

  function checkIfWon() {
    if (
      (activePlayer.choices.includes('0') &&
        activePlayer.choices.includes('1') &&
        activePlayer.choices.includes('2')) ||
      (activePlayer.choices.includes('3') &&
        activePlayer.choices.includes('4') &&
        activePlayer.choices.includes('5')) ||
      (activePlayer.choices.includes('6') &&
        activePlayer.choices.includes('7') &&
        activePlayer.choices.includes('8')) ||
      (activePlayer.choices.includes('0') &&
        activePlayer.choices.includes('3') &&
        activePlayer.choices.includes('6')) ||
      (activePlayer.choices.includes('1') &&
        activePlayer.choices.includes('4') &&
        activePlayer.choices.includes('7')) ||
      (activePlayer.choices.includes('2') &&
        activePlayer.choices.includes('5') &&
        activePlayer.choices.includes('8')) ||
      (activePlayer.choices.includes('0') &&
        activePlayer.choices.includes('4') &&
        activePlayer.choices.includes('8')) ||
      (activePlayer.choices.includes('2') &&
        activePlayer.choices.includes('4') &&
        activePlayer.choices.includes('6'))
    ) {
      return true;
    } else {
      return false;
    }
  }

  const playGame = () => {
    let wonGame = false;
    while (!wonGame) {
      playTurn(activePlayer);
      wonGame = checkIfWon();
      if (!wonGame) {
        swapPlayers();
      }
    }
    console.log(activePlayer.name + ' has won!');
  };

  return {
    playTurn,
    playGame,
  };
}

let game = GameController();

// game.playGame();
