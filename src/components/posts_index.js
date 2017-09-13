import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayPosts } from '../actions';

class PostsIndex extends Component {

    componentDidMount(){
        this.props.displayPosts();
    }

    render() {
        return (
            <div>
                Post Index!
            </div>
        );
    }
}

export default connect(null, { displayPosts })(PostsIndex);