import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Answered from './containers/Blog/answered/answered-posts';

import Blog from './containers/Blog/Blog';
import Posts from './containers/Blog/Posts/Posts';

import './index.css';

class App extends Component {
  render () {
    return (
      // <BrowserRouter basename="/my-app">
      <BrowserRouter basename ="/test">
        <div className="App">
          {/* <Blog /> */}
          <Blog>
            <Posts>
              <Answered /> 
            </Posts >  
          </Blog>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
