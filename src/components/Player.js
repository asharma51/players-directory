import React from 'react';
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button} from 'reactstrap';

const Example = (props) =>{
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={props.player.imageURL} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">{props.player.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{props.player.country}</CardSubtitle>
                {/* <CardText>{props.player.country}</CardText> */}
                <Button>View Player</Button>
                </CardBody>
            </Card>
        </div>
    )
}
export default Example;