import React, { Component } from "react";
import {connect} from 'react-redux';
import Data from "../Data/Data";
import Editdata from "../Editdata/Editdata";
// import Adddata from "../Adddata/Adddata";

class Showdata extends Component{
    render(){
        return(
            <div>
            <h1>Users</h1>
            {this.props.posts.map((post) => (
                <div key={post.id}>
                    {post.editing ? <Editdata post={post} key={post.id} /> : <Data post={post} key={post.id} />}
                </div>
            ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state
    }
}

export default connect(mapStateToProps)(Showdata);