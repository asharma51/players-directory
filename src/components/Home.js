import React from 'react';
import { Jumbotron, Container, ListGroupItem, ListGroup, Spinner} from 'reactstrap';
import '../style/Stylesheet.css';

const Example = (props) => {
  return (
    <>
      <Jumbotron fluid className="bg-danger border border-dark text-light">
        <Container fluid className="home">
          <h1 className="display-3">Players Directory App</h1>
          <p className="blockquote">Implemented using <span className="text-dark"><b>React</b></span> backed by <span className="text-dark"><b>postgreSQL</b></span></p>
          <hr className="my-2" />
          <p>This is a simple directory application for creating, reading, updating and deleting players.</p>
          {/* <p className="lead">
            <Button color="dark">Learn More</Button>
          </p> */}
        </Container>
      </Jumbotron>
      <Container fluid className="home">
        <h1><i>Things you can do in this app</i> ➡ </h1><br></br>
        <ListGroup>
          <ListGroupItem color="primary">Click on <b>Players</b> button in navigation bar to check out existing players 🎾	 in application</ListGroupItem>
          <ListGroupItem color="secondary">To open an individual player's card, click on <b>View Player</b> button</ListGroupItem>
          <ListGroupItem color="info">Current players can be updated by clicking on <b>Edit Player</b> button on individual player's card</ListGroupItem>
          <ListGroupItem color="danger">Delete 🚫 an existing player by clicking on <b>Delete Player</b> button on individual player's card</ListGroupItem>
          <ListGroupItem color="success">New players can be created via <b>Options</b> -> <b>Create New Player</b></ListGroupItem>
        </ListGroup>
      </Container>
      </>

  );
};

export default Example;