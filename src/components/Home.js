import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import '../style/Stylesheet.css';

const Example = (props) => {
  return (
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
  );
};

export default Example;