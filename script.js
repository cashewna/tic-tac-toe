const gameboard = (function () {
    const board = [
        ['','',''],
        ['','',''],
        ['','','']
    ];

    const render = () => {
        // TODO: display colums and rows
    };

    return {
        render
    };
})();

function createPlayer(name, marker) {
    return { name, marker };
}

const player1 = createPlayer('Player 1', 'X');
const player2 = createPlayer('Player 2', 'O');

gameboard.render();