import React from 'react';
//import { Container } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios';
import Popup from "reactjs-popup";
import {Link} from 'react-router-dom';
import "./Users.css"

let flag=0;

const validateForm = (errors) => {
    let valid = false;
    Object.values(errors).forEach(      // If an error is found string set valid to false
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
          formValid: false,
          errcount: null,
          username: '',
          feedtime: '',
          food: '',
          location: '',
          number: '',
          quantity: '',  
          
          errors: {
            username:'',
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

        if(name === 'username' || name ==='food' || name === 'location'){
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
                    if((!event.target.value.match(/^[0-9 ]+$/i))){
                        event.target.value = event.target.value.replace(/[^0-9 ]/ig, '') }
                        
                    if (isNaN(event.target.value)) {
                        errors[name] = 'field can only be number'
                      }
                  
                    if (!event.target.value) {
                        errors[name] = 'field cannot be empty'
                      }
                    
                    if(event.target.value >=1) {
                        errors[name] = 'set';
                    }
                    else{
                        errors[name] = 'field can only be number'
                    }              
        }
        else {
            if(name==='feedtime'){
                
                errors[name] = value===''
                    ? 'Enter Time'
                    : 'set';
                    if (value!=='') {flag = 1;} else{ flag=0;}
            }
        }

        this.setState({errors, [name]: value}, ()=> {
            console.log("Error=",errors);
        })
        this.setState({formValid: validateForm(this.state.errors)});
        console.log("Valid = ", this.state.formValid );
        
    }
  
    handleSubmit(event) {
        event.preventDefault();           
        
        console.log("Submit working") 
        console.log(this.state)

        axios
              .post('http://localhost:5000/addducks', this.state)
              .then(response => {
                console.log(response)
                if(response.data ==='Same user cannot feed at the same time'){
                  this.play("Same user cannot feed at the same time")
                }
                else{
                  
                  console.log(this.state); 
                  this.cancelCourse();
                  
                }
              })
              .catch(error => 
                {
                console.log(error)
                }) 
    }

    cancelCourse = () => { 
        document.getElementById("create-course-form").reset();
        document.getElementById("create-course-form")
      }

    play(msg) {
        alert(msg);
    }
  
    render() {

        const {errors} = this.state;

        return (
            <div className="container-full-bg">            
              <Jumbotron fluid>
              <div className="container" style={{backgroundColor:'#e9ecef'}}> 
                    <h1 style={{textAlign:"center", padding:"10px"}}>Duck feeding habits Data Research</h1>
                    <h5 style={{paddingTop: "5px"}}>
                    Please enter the data points that you have acquired for feeding ducks in your location.
                    </h5>
                    <form id ="create-course-form" onSubmit={this.handleSubmit} autoComplete="off">
                  
                        <div className="form-group">
                            <label >Please enter your full name.</label>                            
                            <input  type="text" name="username" step="1" value={this.state.time} className="form-control" placeholder="Full Name" onChange={this.handleChange}/>                         
                            <div>&nbsp;{errors.username.length > 0 && errors.username !== 'set' &&  
                            <span className='error1'>{errors.username}</span>}</div>
                        </div>

                        <div className="form-group">
                            <label >What time did you feed the ducks? (AM/PM)</label>                            
                            <input  type="time" name="feedtime" step="1" value={this.state.time} className="form-control" placeholder="Time" onChange={this.handleChange}/>                         
                            <div>&nbsp;{errors.feedtime.length > 0 && errors.feedtime !== 'set' &&  
                            <span className='error1'>{errors.feedtime}</span>}</div>
                        </div>
                        
                        
                        <div className="form-group">
                            <label >What did you feed the ducks?</label>
                            <input type="text" className="form-control" name="food" id="food" onChange={this.handleChange} placeholder="Password"/>
                            <div>&nbsp;{errors.food.length > 0 && errors.food !== 'set' &&  
                            <span className='error1'>{errors.food}</span>}</div>
                        </div>

                        <div className="form-group">
                            <label >Where did you feed the ducks? (City/Area)</label>
                            <input type="text" className="form-control" name="location" id="location" onChange={this.handleChange} placeholder="Password"/>
                            <div>&nbsp;{errors.location.length > 0 && errors.location !== 'set' &&  
                            <span className='error1'>{errors.location}</span>}</div>
                        </div>
                        
                        <div className="form-group">
                            <label >Hiow many ducks did you feed?</label>
                            <input type="text" className="form-control" name="number" id="number" onChange={this.handleChange} placeholder="Password"/>
                            <div>&nbsp;{errors.number.length > 0 && errors.number !== 'set' &&  
                            <span className='error1'>{errors.number}</span>}</div>
                        </div>
                        
                        <div className="form-group">
                            <div><label >How much food did you feed the ducks? (kgs/pounds)</label></div>
                            <div id = "radio1"><input type="radio" name="unit"/>kg</div> 
                            <div id = "radio2"><input type="radio" name="unit"/>lbs</div>
                            <input type="text" className="form-control" name="quantity" id="quantity" onChange={this.handleChange} placeholder="Password"/>
                            <div>&nbsp;{errors.quantity.length > 0 && errors.quantity !== 'set' &&  
                            <span className='error1'>{errors.quantity}</span>}</div>
                        </div>


                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" >Check me out</label>
                        </div>
                        
                        <Popup trigger={<button className="btn btn-primary" style={{padding:'5px', margin:'5px'}}
                                            disabled={!this.state.formValid} noValidate  >Submit</button> } modal>
                            {close => (
                            <div id="popupdiv">
                            <h3 style={{display: 'flex', justifyContent: 'center', color: 'black'}}>Duck Details added successfully</h3>
                            <div className="validmsg" > 
                                <p style={{color:"black",justifyContent: 'center', display: 'flex'}} >Your Duck feeding data points can now be analyzed by the scientist</p>
                                <hr/>
                                <div style={{justifyContent: 'center', display: 'flex'}}>
                                <Link to={'/'}>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => {close();                                                       
                                        }} style={{justifyContent: 'center'}}>
                                        Done
                                    </button>
                                </Link>
                                                                
                                </div>                                                                                                   
                            </div>
                            </div>        
                            )}
                        </Popup>
                        <Link to={'/'}>
                                    <button  className="btn btn-primary"style={{justifyContent: 'center'}}>
                                        Cancel
                                    </button>
                        </Link>

                    </form>
                </div>
                </Jumbotron>
            </div>
              
            
      );
    }
  }
  export default UserForm;