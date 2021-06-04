import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { createPlayer } from '../service';

export default class CreatePlayer extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:0,
            name: '',
            country: '',
            imageURL: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.savePlayer = this.savePlayer.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    savePlayer(event){
        event.preventDefault();
        let player = {
            id: this.state.id,
            name: this.state.name,
            country: this.state.country,
            imageURL: this.state.imageURL
        }
        
        createPlayer(player).then(res =>{
            console.log(`Created player: ${player.name}`);
            alert('Player created successfully!!');
            window.location="/players";
        })
    }

    render(){
        return(
            <Form onSubmit={this.savePlayer}>
                <FormGroup>
                    <Label for="playerId">ID:</Label>
                    <Input type="number" name="id" id="playerId" placeholder="Enter Player ID" 
                    value={this.state.id} onChange = {this.handleChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="playerName">Name:</Label>
                    <Input type="text" name="name" id="playerName" placeholder="Enter Player Name" 
                    value={this.state.name} onChange = {this.handleChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="playerCountry">Country:</Label>
                    <Input type="text" name="country" id="playerCountry" placeholder="Enter Player Country" 
                    value={this.state.country} onChange = {this.handleChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="playerImage">Image URL:</Label>
                    <Input type="text" name="imageURL" id="playerImage" placeholder="Enter Player Image URL" 
                    value={this.state.imageURL} onChange = {this.handleChange}></Input>
                </FormGroup>
                <Button type="submit" color="danger">Save Player</Button>
            </Form>
        )
    }
}