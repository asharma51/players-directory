import {CardGroup, 
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button} from 'reactstrap';

const PlayersList = [
    {id: 1, name: 'Roger Federer', country: 'Switzerland'},
    {id: 2, name: 'Serena Williams', country: 'United States'},
    {id: 3, name: 'Rafael Nadal', country: 'Spain'},
    {id: 4, name: 'Venus Williams', country: 'United States'}
];

const Players = PlayersList.map((plr) => (
<Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{plr.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{plr.id}</CardSubtitle>
          <CardText>{plr.country}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
));

const Example = () =>{
    return <CardGroup>{Players}</CardGroup>
};

export default Example;