import React from 'react';
import {Link} from 'react-router-dom';
import { Container } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron'

let flag=0;

const validateForm = (errors) => {
    let valid = false;
    Object.values(errors).forEach(      // if we have an error string set valid to false
      (val) => 
      { if(val ==='set' && flag === 1)
            { valid = true; }
        else
            { valid = false; }
      }      
    );
    return valid;
    }



class UserForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          feedtime: '',
          food: '',
          location: '',
          number: '',
          quantity: '',  
          
          errors: {
            feedtime: '',
            food: '',
            location: '',
            number: '',
            quantity: ''
                  }
        
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        if(name ==='food' || name === 'location'){
            if((!event.target.value.match(/^[a-zA-Z ]+$/i)))
                {
                    event.target.value = event.target.value.replace(/[^A-Za-z ]/ig, '')
                }
                else{
                    errors[name] = value.length < 5
                    ? 'Enter 5 characters atleast!'
                    : 'set';
                    if (value.length>=5) {flag = 1;} else{ flag=0;}
                }
        }

        else if(name ==='number' || name ==='quantity'){
            if((!event.target.value.match(/^[0-9 ]+$/i)))
                {
                    event.target.value = event.target.value.replace(/[^0-9 ]/ig, '')
                }
                else{
                    errors[name] = value < 1
                    ? 'Minimum number cannot be less than 1'
                    : 'set';
                    if (value.length>=1) {flag = 1;} else{ flag=0;}
                }            
        }

        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })

        
    }
  
    handleSubmit(event) {
        event.preventDefault();           
        const { name, value } = event.target;
        
        console.log("Submit working") 
        console.log(this.state)
    }
  
    render() {
        return (
            <>              
              <Jumbotron fluid>
                <Container>
                    <h1>Fluid jumbotron</h1>
                    <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                    </p>
                    <form onSubmit={this.handleSubmit}>
                  
                        <div className="form-group">
                            <label >What time did you feed the ducks?</label>                            
                            <input  type="time" name="feedtime" step="1" value={this.state.time} className="form-control" placeholder="Time" onChange={this.handleChange}/>                         
                        </div>
                        <div className="form-group">
                            <label >What did you feed?</label>
                            <input type="text" className="form-control" name="food" id="food" onChange={this.handleChange} placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <label >Where did you feed?</label>
                            <input type="text" className="form-control" name="location" id="location" onChange={this.handleChange} placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <label >Hiow many did you feed?</label>
                            <input type="text" className="form-control" name="number" id="number" onChange={this.handleChange} placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <label >How much did you feed?</label>
                            <input type="text" className="form-control" name="quantity" id="quantity" onChange={this.handleChange} placeholder="Password"/>
                        </div>


                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" >Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                </Container>
                </Jumbotron>
              
            </>
      );
    }
  }
  export default UserForm;