import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';



class RothIRA_1 extends Component {
    state = {
        
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    render () {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/posts/" />;
        }
        return (
            <div className="NewPost">
                {redirect}
                <hi>THESE ARE ROTH IRA</hi>
            </div>
        );
    }
}

export default RothIRA_1;