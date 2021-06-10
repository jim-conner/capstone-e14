import React from 'react';
import { Container, Jumbotron } from 'reactstrap';

function Jumbo() {
  return (
    <div>
       <Jumbotron fluid>
        <Container fluid>
          <h3 className="display-5">Find Help in Nashville</h3>
          <p className="lead">Browse available services sites and resources or sign in to customize a resource list.</p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Jumbo;