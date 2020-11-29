import React from 'react';
import { Container, Jumbotron } from "react-bootstrap";


  

class Scientist extends React.Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    
        this.state = {
          feed: null,
          food: null,
          number: null,
          location: null,

          duckdata: [],

          errors: {
              
          },       

        };
    
      }


      
      

  render() {


    return (
        <>              
        <Jumbotron fluid>
          <Container>
              <h1>Duck Feeding Habits Data</h1>
              <p>
                Duck Data from around for Scientists to view.
              </p>
              
          </Container>
          </Jumbotron>
        
      </>
    )
  }
}

export default Scientist;