import React from 'react';
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button,
    ButtonGroup} from 'reactstrap';

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
                <Button color="outline-danger">Delete Player</Button>
            </ButtonGroup>
        )
    }
}
const Example = (props) =>{
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={props.player.imageURL} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">{props.player.id}. {props.player.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{props.player.country}</CardSubtitle>
                {/* <CardText>{props.player.id}</CardText> */}
                {buttons(props.view, props.player.id)}
                </CardBody>
            </Card>
        </div>
    )
}
export default Example;