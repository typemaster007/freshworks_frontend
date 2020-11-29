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
                    "feedtime":"9.15 AM",
                    "food":"salad",
                    "location":"Miami",
                    "number":"6",
                    "quantity":"12"
              },
              {
                    "id":"2",
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
                                        
                                        <Popup trigger={<h4 className="card-title"><Link style={{}}>{duck.feedtime}</Link></h4>} modal closeOnDocumentClick>                
                                                {
                                                <div style={{border: '5px',borderBlockColor: 'black', borderRadius: '10px', background: 'white'}}>
                                                  <h2 style={{display: 'flex', justifyContent: 'center', color: 'black'}}>duck Details</h2>
                                                  <div className="validmsg" style={{justifyContent: 'center'}}> 
                                                    <h4 className="card-title" style={{color: 'black'}}>Title: {duck.feedtime}</h4>
                                                    <hr />
                                                    <p style={{color: 'black'}} >
                                                        Author: {duck.feedtime}
                                                    </p>
                                                    <hr />
                                                    <p style={{color: 'black'}} >
                                                        Description: {duck.location}
                                                    </p>                                                                                                       
                                                  </div>
                                                </div>
                                                 }                                                
                                        </Popup>
                                        <hr />
                                        <p className="card-text">
                                            Author: {duck.number}
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