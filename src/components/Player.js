import React from 'react';
import {
    Card, 
    CardImg, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button,
    ButtonGroup} from 'reactstrap';
import './Player.css';
import { deletePlayer } from '../service';

const buttons = (view, id) => {
    if(!view){
        return(
            <Button color="danger" onClick = {()=> {window.location=`/players/${id}`}}>View Player</Button>
        )
    }
    else{
        return(
            <ButtonGroup>
                <Button color="outline-info">Edit Player</Button>
                <Button color="outline-danger" onClick={()=> deletePlayer(id).then(res=>{
                    alert('Player deleted successfully!!');
                    window.location="/players";
                }
                )}>Delete Player</Button>
            </ButtonGroup>
        )
    }
}
const Example = (props) =>{
    return (
        <div>
            <Card className="Player">
                <CardImg top height="180px" width="100px" src={props.player.imageURL} alt="Player Image" />
                <CardBody>
                    <CardTitle tag="h5">{props.player.id}. {props.player.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.player.country}</CardSubtitle>
                    {buttons(props.view, props.player.id)}
                </CardBody>
            </Card>
        </div>
    )
}
export default Example;