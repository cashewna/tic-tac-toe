// Immediately Invoked Function Expression using module pattern.
const gameboard = (function () {
    const board = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    
    let movesLeft = 9;
    let currentPlayer = null;

    const setPlayer = (player) => {
        currentPlayer = player;
    };
    
    const play = (row, column) => {
        if (movesLeft === 0) {
            return;
        }

        if (board[row][column] === '') {
            board[row][column] = currentPlayer.marker;
            if (checkWinner()) {
                console.log(`${currentPlayer.name} wins!`);
                movesLeft = 0;
                return;
            }
            currentPlayer = currentPlayer === player1 ? player2 : player1;
            movesLeft--;
        } else {
            console.log('Invalid move');
        }
        
        if (movesLeft === 0) {
            console.log('Game over');
        }
        console.log(board);
    };
    
    const checkWinner = () => {
        // Check rows, columns, and diagonals for a winner
        for (let i = 0; i < 3; i++) {
            if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
                return true;
            }

            if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
                return true;
            }
        }

        if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            return true;
        }

        if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            return true;
        }
        return false;
    };
    
    const getBoard = () => board;

    const render = () => {
        // TODO: display colums and rows
    };

    return {
        setPlayer,
        play,
        getBoard,
        render
    };
})();

function createPlayer(name, marker) {
    return { name, marker };
}

const player1 = createPlayer('Player 1', 'X');
const player2 = createPlayer('Player 2', 'O');

gameboard.setPlayer(player1);
gameboard.render();