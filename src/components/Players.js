import React from 'react';

const PlayersList = [
    {id: 1, name: 'Roger Federer', country: 'Switzerland'},
    {id: 2, name: 'Serena Williams', country: 'United States'},
    {id: 3, name: 'Rafael Nadal', country: 'Spain'}
];

const Players = PlayersList.map((plr) => (
    <div>
        {plr.id} - {plr.name} - {plr.country}
    </div>
));

const displayPlayers = () => {
    return (
        <div>
            {Players}
        </div>
    )
};
export default displayPlayers;