import React, { Component } from "react";
import {connect} from 'react-redux';

class Data extends Component {
    render(){
        return(
            <div>
              <table border={1}>
                <thead>
                  <tr>  
                  <th scope="col">Id</th>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                  </tr>
                </thead>
                <tbody>
                  <tr> 
                  <td>{this.props.post.id}</td>
                  <td>{this.props.post.Firstname}</td>
                  <td>{this.props.post.Lastname}</td>
                  <td>{this.props.post.Email}</td>
                  <td>{this.props.post.Gender}</td>
                  <td><button onClick={()=>this.props.dispatch({type:'EDIT_USER',id:this.props.post.id})}>Edit</button></td>
                  <td><button onClick={()=>this.props.dispatch({type:'DELETE_USER',id:this.props.post.id})}>Delete</button></td> 
                  </tr>
                  
                </tbody>
              </table>  
            </div>
        );
    }

}
export default connect()(Data);