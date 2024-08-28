const gameInput = document.getElementById('gameInput');
const addGameBtn = document.getElementById('addGameBtn');
const randomGameBtn = document.getElementById('randomGameBtn');
const gameList = document.getElementById('gameList');
const savedGames = localStorage.getItem('games');

const addOFFGameBtn = document.getElementById('addGameOFBtn');
const randoOFFmGameBtn = document.getElementById('randomGameOFBtn');
const gameListOFF = document.getElementById('gameListoOF');
const savedGamesOFF = localStorage.getItem('gamesOFF');
let games2 = [];
if (savedGamesOFF) {
    let games2 = JSON.parse(savedGamesOFF);
    for (var i = games2.length - 1; i >= 0; i--) {
        const gameItem2 = document.createElement('li');
        gameItem2.textContent = games2[i];
        gameListOFF.appendChild(gameItem2);
    }
}

let games = [];
if (savedGames) {
    let games = JSON.parse(savedGames);
    for (var i = games.length - 1; i >= 0; i--) {
        const gameItem = document.createElement('li');
        gameItem.textContent = games[i];
        gameList.appendChild(gameItem);
    }
}


addGameBtn.addEventListener('click', () => {
    const gameName = gameInput.value;
    if (gameName) {
        games.push(gameName);
        localStorage.setItem('games', JSON.stringify(games));
        gameInput.value = '';

        const gameItem = document.createElement('li');
        gameItem.textContent = gameName;
        gameList.appendChild(gameItem);
    }
});

addOFFGameBtn.addEventListener('click', () => {
    const gameName2 = gameInput.value;
    if (gameName2) {
        games2.push(gameName2);
        localStorage.setItem('gamesOFF', JSON.stringify(games2));
        gameInput.value = '';

        const gameItem2 = document.createElement('li');
        gameItem2.textContent = gameName2;
        gameListOFF.appendChild(gameItem2);
    }
});


randomGameBtn.addEventListener('click', () => {
    if (games.length > 0) {
        const randomIndex = Math.floor(Math.random() * games.length);
        const randomGame = games[randomIndex];
        alert(`Your random game is: ${randomGame}`);
    } else {
        alert('Please add some games first.');
    }
});

randoOFFmGameBtn.addEventListener('click', () => {
    if (games2.length > 0) {
        const randomIndex2 = Math.floor(Math.random() * games2.length);
        const randomGame2 = games2[randomIndex2];
        alert(`Your random game is: ${randomGame2}`);
    } else {
        alert('Please add some games first.');
    }
});


// Load saved games from localStorage
// const savedGames = localStorage.getItem('games');
if (savedGames) {
    games = JSON.parse(savedGames);
    games.forEach(game => {
        // Fetch image and add to game list as before
    });
}

if (savedGamesOFF) {
    games2 = JSON.parse(savedGamesOFF);
    games2.forEach(game => {
        // Fetch image and add to game list as before
    });
}

gameList.addEventListener('click', event => {
    if (event.target.classList.contains('delete-btn')) {
        const gameItem = event.target.parentElement;
        gameList.removeChild(gameItem);
        const gameName = gameItem.querySelector('p').textContent;
        games = games.filter(game => game !== gameName);
        localStorage.setItem('games', JSON.stringify(games));
    }
});