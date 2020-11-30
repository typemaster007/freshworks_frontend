import React from 'react';
import { Container, Jumbotron } from "react-bootstrap";
//import {Link} from 'react-router-dom';
//import Popup from "reactjs-popup";
import axios from 'axios';
import "./Scientists.css"

class Scientist extends React.Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    
        this.state = {
          feedtime: null,
          food: null,
          number: null,
          location: null,

          duckdata: [],

          errors: {
              
          },       

        };
    
      }

      componentDidMount() 
      {        
        this.inputRef.current.focus();

        axios
          .get('http://localhost:5000/getducks')
          .then(response => {
            console.log("Response =" ,response.data)
            this.setState({ duckdata: response.data })
          })
          .catch(error => {
            console.log("Error = ", error)
          })
      }


      
      

  render() {

    const displayDucks = this.state.duckdata;

    return (
        <>              
        <Jumbotron fluid >
          <Container  ref={this.inputRef}>
              <h1>Duck Feeding Habits Data</h1>
              <p>
                Duck Data from around the world for Scientists to view.
              </p>
              <div className="container " style= {{height: 'auto',width: 'auto', overflowY: 'scroll', margin: '0px'}}>
              {
                    // console.log(displayCountry)
                    displayDucks.map(duck => {
                        let newColor = ""
                        switch(duck.id % 9) {
                            case 1:
                              newColor="bg-info text-light"; 
                              break;
                            case 2:
                              newColor="bg-success text-light"; 
                              break;

                            case 3:
                              newColor="bg-primary text-light"; 
                              break;
                            
                            case 4:
                              newColor="bg-info text-light"; 
                              break;
                            case 5:
                              newColor="bg-success text-light"; 
                              break;
                            case 6:
                              newColor="#a8cdff"; 
                              break;
                            case 7:
                              newColor="bg-dark text-light"; 
                              break;
                            case 8:
                              newColor="bg-warning text-dark"; 
                              break;
                            
                            default:
                                newColor="bg-info text-light";
                                break
                        }
                        return (
                            <div key={duck.id} className="col col-sm-4 " 
                                style={{width: "400px", float:"left", marginLeft:"0px",marginTop: "20px"}} >
                                <div className={"card "+newColor} style= {{width: "auto",height: "300px"}}>
                                    <div className="card-body" key={duck.id} style={{width: "auto"}}  >                                      
                                        
                                        <h5><p className="card-text">
                                           Name: {duck.username} 
                                        </p></h5>
                                        <hr />
                                        <p className="card-text">
                                            Feedtime: {duck.feedtime}
                                        </p>
                                        <p className="card-text">
                                            Food: {duck.food}
                                        </p>
                                        <p className="card-text">
                                            Location: {duck.location}
                                        </p>
                                        <p className="card-text">
                                            Number: {duck.number}
                                        </p>
                                        <p className="card-text">
                                            Quantity: {duck.quantity}
                                        </p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        )
                    } )
                }   
                </div>                               
                                            
              
          </Container>
          </Jumbotron>
        
      </>
    )
  }
}

export default Scientist;