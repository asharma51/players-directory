import React from 'react';
import { Jumbotron} from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Tennis Players Directory Application</h1>
        <p className="lead">Implemented using React</p>
        <p>This is a simple React application for creating, reading, updating and deleting players.</p>
      </Jumbotron>
    </div>
  );
};

export default Example;