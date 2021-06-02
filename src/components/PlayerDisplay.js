import React from 'react';
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button} from 'reactstrap';

const Example = (props) =>(
    <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.plr.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.plr.id}</CardSubtitle>
          <CardText>{props.plr.country}</CardText>
          <Button>Button</Button>
        </CardBody>
    </Card>
)
export default Example;