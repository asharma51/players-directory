import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { updatePlayer } from '../service';
import '../style/Stylesheet.css';

export default class UpdatePlayer extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.player.id,
            name: props.player.name,
            country: props.player.country,
            imageURL: props.player.imageURL
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
        
        updatePlayer(player).then(res =>{
            alert('Player updated successfully!!');
            window.location=`/players/${player.id}`;
        })
    }

    render(){
        return(
            <Form onSubmit={this.savePlayer}>
                <FormGroup className="form">
                    <Label for="playerId">ID:</Label>
                    <Input type="number" name="id" id="playerId" placeholder="Enter Player ID" 
                    value={this.state.id} onChange = {this.handleChange}></Input>
                </FormGroup>
                <FormGroup className="form">
                    <Label for="playerName">Name:</Label>
                    <Input type="text" name="name" id="playerName" placeholder="Enter Player Name" 
                    value={this.state.name} onChange = {this.handleChange}></Input>
                </FormGroup>
                <FormGroup className="form">
                    <Label for="playerCountry">Country:</Label>
                    <Input type="text" name="country" id="playerCountry" placeholder="Enter Player Country" 
                    value={this.state.country} onChange = {this.handleChange}></Input>
                </FormGroup>
                <FormGroup className="form">
                    <Label for="playerImage">Image URL:</Label>
                    <Input type="text" name="imageURL" id="playerImage" placeholder="Enter Player Image URL" 
                    value={this.state.imageURL} onChange = {this.handleChange}></Input>
                </FormGroup>
                <Button className="button-form" type="submit" color="danger">Save Player</Button>
            </Form>
        )
    }
}