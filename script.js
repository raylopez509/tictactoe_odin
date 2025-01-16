// function GameBoard() {
//   const gameBoard = ['', '', '', '', '', '', '', '', ''];
//   function displayBoard() {
//     let row = '';
//     for (i = 0; i < gameBoard.length; i++) {
//       if (gameBoard[i] === 'X' || gameBoard[i] === 'O') {
//         row = row + gameBoard[i];
//       } else {
//         row = row + i;
//       }
//       if (i == 2 || i == 5 || i == 8) {
//         console.log(row);
//         row = '';
//       }
//     }
//   }

//   function updateBoard(square, marker) {
//     gameBoard[square] = marker;
//   }

//   return {
//     displayBoard,
//     updateBoard,
//   };
// }

const gameBoard = (() => {
  const gameBoard = ['', '', '', '', '', '', '', '', ''];
  // const gameBoard = ['X', 'O', 'O', 'O', 'X', 'X', 'X', 'O', 'O'];
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

  function getBoard() {
    return gameBoard;
  }

  return {
    displayBoard,
    updateBoard,
    getBoard,
  };
})();

const gameController = (() => {
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

  let activePlayer = players[0];

  const swapPlayers = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const playTurn = (player) => {
    // let choice = prompt('Choose a square ' + player.name);
    // gameBoard.updateBoard(choice, player.marker);
    displayController.displayBoard();
  };

  function checkIfWon() {
    board = gameBoard.getBoard();
    if (
      (board[0] === activePlayer.marker &&
        board[1] === activePlayer.marker &&
        board[2] === activePlayer.marker) ||
      (board[3] === activePlayer.marker &&
        board[4] === activePlayer.marker &&
        board[5] === activePlayer.marker) ||
      (board[6] === activePlayer.marker &&
        board[7] === activePlayer.marker &&
        board[8] === activePlayer.marker) ||
      (board[0] === activePlayer.marker &&
        board[3] === activePlayer.marker &&
        board[6] === activePlayer.marker) ||
      (board[1] === activePlayer.marker &&
        board[4] === activePlayer.marker &&
        board[7] === activePlayer.marker) ||
      (board[2] === activePlayer.marker &&
        board[5] === activePlayer.marker &&
        board[8] === activePlayer.marker) ||
      (board[0] === activePlayer.marker &&
        board[4] === activePlayer.marker &&
        board[8] === activePlayer.marker) ||
      (board[2] === activePlayer.marker &&
        board[4] === activePlayer.marker &&
        board[6] === activePlayer.marker)
    ) {
      return true;
    } else {
      return false;
    }
  }

  // const playGame = () => {
  //   let wonGame = false;
  //   while (!wonGame) {
  //     playTurn(activePlayer);
  //     wonGame = checkIfWon();
  //     if (!wonGame) {
  //       swapPlayers();
  //     }
  //   }
  //   console.log(activePlayer.name + ' has won!');
  // };

  return {
    playTurn,
    // playGame,
    activePlayer,
  };
})();

const displayController = (() => {
  function clickSquare(square) {
    gameBoard.updateBoard();
    document.querySelector('.square' + square).textContent =
      gameController.activePlayer.marker;
    gameController.swapPlayers;
  }

  // let initializeAllSquares = () => {
  for (i = 0; i < 9; i++) {
    document
      .querySelector('.square' + i)
      .addEventListener('onClick', clickSquare(i));
  }
  // };

  function displayBoard() {
    let board = gameBoard.getBoard();
    for (i = 0; i < 9; i++) {
      square = document.querySelector('.square' + i);
      square.textContent = board[i];
    }
  }
  return {
    displayBoard,
    // initializeAllSquares,
  };
})();

// displayController.displayBoard();

// let board = gameBoard.getBoard();
// for(i = 0; i < 9; i++) {

//   square = document.querySelector(".square" + i);
//   square.textContent = board[i];
// }

// gameController.playGame();

// let display = DisplayController();

displayController;
