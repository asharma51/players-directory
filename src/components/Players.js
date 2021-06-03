import {CardGroup} from 'reactstrap';
import Player from './Player';
import { React, Component } from 'react';
import {getPlayers} from '../service';

// const PlayersList = [
//     {id: 1, name: 'Roger Federer', country: 'Switzerland'},
//     {id: 2, name: 'Serena Williams', country: 'United States'},
//     {id: 3, name: 'Rafael Nadal', country: 'Spain'},
//     {id: 4, name: 'Venus Williams', country: 'United States'}
// ];

// const Players = PlayersList.map((plr) => (
//   <Player plr = {plr}/>
// ));

// const Example = () =>{
//     return <CardGroup>{Players}</CardGroup>
// };

// export default Example;

export default class Players extends Component{
  constructor(props){
    super(props);
    this.state = {
      playersList: []
    }
  }

  componentDidMount(){
    getPlayers().then(res =>{
      this.setState({playersList: res.data});
      console.log("resource loading");
      console.log(res);
    });
  }

  render(){
    return(
      <CardGroup>
        {this.state.playersList.map((plr, index) => 
          <Player key = {index} player = {plr}/>
        )
        }
      </CardGroup>
    )
  }
}