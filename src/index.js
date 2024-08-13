const container = document.getElementById('container');
const tile = document.querySelector('.tile');

const MAX_HEIGHT = 1599;

for (let i = 0; i < MAX_HEIGHT; i++) {
    container.appendChild(tile.cloneNode());
}