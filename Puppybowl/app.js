
const apiUrl = 'https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players';


async function fetchPlayers() {
    try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        
        if (result.success) {
            const players = result.data.players;
            const playerList = document.querySelector('.player-list');
            
  
            playerList.innerHTML = '';


            players.forEach(player => {
                const playerCard = document.createElement('div');
                playerCard.classList.add('player-card');
                playerCard.innerHTML = `
                    <img src="${player.imageUrl}" alt="${player.name}">
                    <h3>${player.name}</h3>
                `;
                

                playerCard.addEventListener('click', () => {
                    displayPlayerDetails(player);
                });

                playerList.appendChild(playerCard);
            });
        } else {
            console.error(result.error.message);
        }
    } catch (err) {
        console.error(err);
    }
}

function displayPlayerDetails(player) {
    const playerDetail = document.querySelector('.player-detail');
    playerDetail.innerHTML = `
        <h2>${player.name}</h2>
        <p><strong>Breed:</strong> ${player.breed}</p>
        <p><strong>Status:</strong> ${player.status}</p>
        <img src="${player.imageUrl}" alt="${player.name}">
    `;
}

window.addEventListener('load', fetchPlayers);
