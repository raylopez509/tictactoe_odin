const gameBoard = (() => {
  const gameBoard = ['', '', '', '', '', '', '', '', ''];

  function updateBoard(square, marker) {
    gameBoard[square] = marker;
  }

  function getBoard() {
    return gameBoard;
  }

  return {
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

  let turn = 0;

  function clickSquare(event) {
    turn++;
    let className = event.target.className;
    let boardArrIndex = className.charAt(className.length - 1);
    gameBoard.updateBoard(boardArrIndex, activePlayer.marker);
    displayController.markSquare(boardArrIndex, activePlayer.marker);
    displayController.disableSquare(boardArrIndex);
    console.log(gameBoard.getBoard());
    if (checkIfWon()) {
      for (i = 0; i < 9; i++) {
        displayController.disableSquare(i);
        displayController.declareWinner(activePlayer);
      }
    } else if (turn == 9) {
      displayController.declareTie();
    }
    swapPlayers();
  }

  return {
    clickSquare,
  };
})();

const displayController = (() => {
  const clickEvent = (event) => gameController.clickSquare(event);

  for (i = 0; i < 9; i++) {
    document.querySelector('.square' + i).addEventListener('click', clickEvent);
  }

  function disableSquare(square) {
    document
      .querySelector('.square' + square)
      .removeEventListener('click', clickEvent);
  }

  function markSquare(square, marker) {
    document.querySelector('.square' + square).textContent = marker;
  }

  function declareWinner(player) {
    document.querySelector('.result-container').textContent =
      player.name + ' is the winner!';
  }

  function declareTie() {
    document.querySelector('.result-container').textContent = 'Tie Game!';
  }

  return {
    markSquare,
    disableSquare,
    declareWinner,
    declareTie,
  };
})();
