import React from 'react';
import { Container } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron'


const validateForm = (errors) => {
    let valid = false;
    Object.values(errors).forEach(      // if we have an error string set valid to false
      (val) => 
      { if(val=='set' && flag == 1)
            { valid = true; }
        else
            { valid = false; }
      }      
    );
    return valid;
    }

const countErrors = (errors) => {
        let count = 0;
        Object.values(errors).forEach(
          (val) => {if(val.length > 0)
            {
                if(val!=='set'){
                    (count = count+1);
                }
            } }
        );
        return count;
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
        this.setState({ [event.target.name]: event.target.value });
        console.log("Set this :", this.state );
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
                            <input type="text" className="form-control" name="feedtime" id="feedtime" onChange={this.handleChange}  placeholder="Enter email"/>                            
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