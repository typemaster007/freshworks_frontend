import React from 'react';
import { Container, Jumbotron } from "react-bootstrap";
import {Link} from 'react-router-dom';
import Popup from "reactjs-popup";

  

class Scientist extends React.Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    
        this.state = {
          feedtime: null,
          food: null,
          number: null,
          location: null,

          duckdata: [
              {
                    "id":"1",
                    "username":"John Cooler",
                    "feedtime":"9.15 AM",
                    "food":"salad",
                    "location":"Miami",
                    "number":"6",
                    "quantity":"12"
              },
              {
                    "id":"2",
                    "username":"Mark Hamberg",
                    "feedtime":"6.15 PM",
                    "food":"celery",
                    "location":"Hawaii",
                    "number":"4",
                    "quantity":"10"
            },
          ],

          errors: {
              
          },       

        };
    
      }


      
      

  render() {

    const displayDucks = this.state.duckdata;

    return (
        <>              
        <Jumbotron fluid>
          <Container style = {{height: "1200px"}}>
              <h1>Duck Feeding Habits Data</h1>
              <p>
                Duck Data from around for Scientists to view.
              </p>
              <div>
              {
                    // console.log(displayCountry)
                    displayDucks.map(duck => {
                        let newColor = ""
                        switch(duck.id % 9) {
                            case 1:
                                newColor="bg-info text-light"; 
                                break;
                            
                            default:
                                newColor="bg-info text-light";
                                break
                        }
                        return (
                            <div key={duck.id} className="col col-sm-4 " 
                                style={{width: "360px", float:"left", marginLeft:"-15px"}}>
                                <div className={"card "+newColor} style= {{width: "auto",height: "300px"}}>
                                    <div className="card-body" key={duck.id} style={{width: "auto"}} >
                                        
                                        
                                        <Popup trigger={<h4 className="card-title"><Link style={{color:'black'}}>{duck.username}</Link></h4>} 
                                          modal
                                          closeOnDocumentClick
                                          >                
                                          
                                          <div style={{border: 'solid black 2px',borderBlockColor: 'black', borderRadius: '0.5em', background: 'white', padding:'10px'}}>
                                            <h4 style={{display: 'flex', justifyContent: 'center'}}>Payment details</h4>
                                            <div className="validmsg" style={{display: 'flex', justifyContent: 'center'}}> 
                                            Hi secondary content here
                                            </div>
                                            <div> Chec these out </div>
                                          </div>                                        
                                        </Popup>

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