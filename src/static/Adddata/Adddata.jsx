import React, { Component } from "react";
import {connect} from 'react-redux';

class Adddata extends Component{

    handleSubmit = (e) => {
        e.preventDefault();
        // let no = 0;
        const Firstname = this.getfirstname.value;
        const Lastname = this.getlastname.value;
        const Email = this.getemail.value;
        const Gender = this.getgender.value;
        const data = {
          id: Math.floor(Math.random() * (999 - 100 + 1) + 100), 
          Firstname,
          Lastname,
          Email,
          Gender,
          editing:false
        }
        console.log(data);
        this.props.dispatch({
            type:'ADD_USER',
            data
        });
        this.getfirstname.value="";
        this.getlastname.value="";
        this.getemail.value="";
        this.getgender.value="";
}


   

render(){
    return(
        <div>
            <h1>Add User</h1>
            <form onSubmit={this.handleSubmit}>
            <div>
                <div>
                  <label>
                    First Name:{' '}
                  </label>
                  <input type='text' id='firstName' ref={(input) => this.getfirstname = input} placeholder='First Name' required/>
                </div>
                <div>
                  <label>
                    Last Name:{' '}
                  </label>
                  <input type='text' id='lastName' ref={(input) => this.getlastname = input} placeholder='LastName' required/>
                </div>
                <div>
                  <label>
                    Email:{' '}
                  </label>
                  <input type='email' id='email' ref={(input) => this.getemail = input} placeholder='Email' required/>
                </div>
                <div>
                  <label>
                    Gender:{' '}
                  </label>
                  <select id="gender" ref={(input) => this.getgender = input} required>
                  <option value="">Select gender</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  </select>
                </div>
            </div>
            
            <div>
                <button type='submit'>Submit</button>
            </div>
            </form>
        </div>
    )
 }
}

export default connect()(Adddata);