import React, { Component } from 'react';
import axios from 'axios';



import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Post from '../../../components/Post/Post';

import FullPost from '../FullPost/FullPost';

import Unanswered from '../../Unanswered/Unanswered-Posts';
import Myquestions from '../My-Questions/Myquestions';

// import Posts from '../Posts/Posts';
// import FullPost from '../FullPost/FullPost';

import './answered-posts.css';

class Answered extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        // console.log( this.props );
        axios.get( 'https://blog-6d4da-default-rtdb.firebaseio.com/posts.json' )
            .then( response => {
                const posts = Object.values(response.data);
                // console.log(typeof posts);
                const updatedPosts = posts.map( post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                } );
                this.setState( { posts: updatedPosts } );
                // console.log( response );
            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );
    }

    postSelectedHandler = ( id ) => {
        // this.props.history.push({pathname: '/posts/' + id});
        this.props.history.push( '/posts/' + id );
        console.log(this.props.history);
    }

    render () {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if ( !this.state.error ) {
            posts = this.state.posts.map( (post) => {
                return (
                    // <Link to={'/posts/' + post.id} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler( post.id )} />
                        
                    // </Link>
                );
            } );
        }

        return (
            <div className="Posts-Page">
                <section className="Menu">
                    <ul className="Menu-Items">
                    <li><NavLink to={{
                                pathname: '/myquestions'
                                
                            }}>My Questions</NavLink></li>
                        <li><NavLink to={{
                                pathname: '/unanswered',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>Unanswered</NavLink></li>
                    </ul>
                </section>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
                <Switch>
                    <Route path="/myquestions" component={Myquestions} />
                    <Route path="/unanswered" component={Unanswered} />
                </Switch>
            </div>
        );
    }
 

//  state = {
//      posts:[]
//  }

//  render () {
//      return(
//         <div>
//             <Posts />
//         </div>
         
//      );
//  }
 }

export default Answered;