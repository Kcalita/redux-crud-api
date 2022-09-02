import React, { Component } from "react";
import {connect} from 'react-redux';

class Editdata extends Component{
        handleedit = (e) => {
        e.preventDefault();
        const newFirstname = this.getfirstname.value;
        const newLastname = this.getlastname.value;
        const newEmail = this.getemail.value;
        const newGender = this.getgender.value; 
        const data = {
          newFirstname,
          newLastname,
          newEmail,
          newGender
        }
        this.props.dispatch({
            type:'UPDATE_USER',
            id: this.props.post.id,
            data: data
          });
        }
    render(){
        return(
        <div>
            <h2>Edit id:{this.props.post.id} User</h2>  
            <form onSubmit={this.handleedit}>
            <div>
                <div>
                  <label>
                    First Name:{' '}
                  </label>
                  <input type='text' id='firstName' ref={(input) => this.getfirstname = input } defaultValue={this.props.post.Firstname}  placeholder='First Name' required/>
                </div>
                <div>
                  <label>
                    Last Name:{' '}
                  </label>
                  <input type='text' id='lastName' ref={(input) => this.getlastname = input } defaultValue={this.props.post.Lastname} placeholder='LastName' required/>
                </div>
                <div>
                  <label>
                    Email:{' '}
                  </label>
                  <input type='email' id='email' ref={(input) => this.getemail = input} defaultValue={this.props.post.Email} placeholder='Email' required/>
                </div>
                <div>
                  <label>
                    Gender:{' '}
                  </label>
                  <select id="gender" ref={(input) => this.getgender = input} defaultValue={this.props.post.Gender} required >
                  <option value="">Select gender</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  </select>
                </div>
            </div>
            <div>
                <button type='submit'>Edit</button>
            </div>
            </form>
        </div>
        )
    }
}
export default connect()(Editdata);