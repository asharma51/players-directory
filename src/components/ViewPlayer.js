import React, { Component } from 'react';
import { getPlayerByID } from '../service';
import Player from './Player';

export default class ViewPlayer extends Component{
    constructor(props){
        super(props);
        this.state = {
            player: {}
        }
    }

    componentDidMount(){
        getPlayerByID(this.props.match.params.id).then (res => {
            this.setState({
                player: res.data
            });
            console.log(this.state.player);
            console.log('componentDidMount id = '+this.props.match.params.id);
        })
    }

    render(){
        return(
            <Player view player = {this.state.player}/>
        )
    }
}