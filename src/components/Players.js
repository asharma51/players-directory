import {CardGroup} from 'reactstrap';
import Player from './PlayerDisplay';

const PlayersList = [
    {id: 1, name: 'Roger Federer', country: 'Switzerland'},
    {id: 2, name: 'Serena Williams', country: 'United States'},
    {id: 3, name: 'Rafael Nadal', country: 'Spain'},
    {id: 4, name: 'Venus Williams', country: 'United States'}
];

const Players = PlayersList.map((plr) => (
  <Player plr = {plr}/>
));

const Example = () =>{
    return <CardGroup>{Players}</CardGroup>
};

export default Example;