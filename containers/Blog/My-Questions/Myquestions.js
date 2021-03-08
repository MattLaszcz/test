// import React, { Component } from 'react';
// import axios from '../../../axios';
// import { Link, Route, NavLink, Switch, Redirect } from 'react-router-dom';

// import Post from '../../../components/Post/Post';
// import './Myquestions.css';
// import FullPost from '../FullPost/FullPost';
// import Answered from '../answered/answered-posts';
// import Unanswered from '../../Unanswered/Unanswered-Posts';
// import Myquestions from '../My-Questions/Myquestions';
// import RothIRA_1 from '../../Types/RothIRA_1'


// class Posts extends Component {
//     state = {
//         posts: []
//     }

//     componentDidMount () {
//         console.log( this.props );
       
//         axios.get( 'https://blog-6d4da-default-rtdb.firebaseio.com/posts.json' )
//             .then( response => {
//                 //let posts = Object.values(response.data);
//                 let keys = Object.keys(response.data);
//                 //console.log('object KEYS'+keys);


                

//                 const updatedPosts = keys.map( key => {    
//                     return {
//                         key, ...response.data[key],
                        
//                     }
//                 } );
//                      const updatedPosts_1 = JSON.stringify(updatedPosts)
//                     //console.log('updatedposts'+updatedPosts_1);
//                     this.setState( { posts: updatedPosts } );
               
//             } )
//             .catch( error => {
//                 console.log( error );
//                 // this.setState({error: true});
//             } );
//     }

//     postAnswerHandler = ( answer,id ) => {
      

                
          


//             axios.get( 'https://blog-6d4da-default-rtdb.firebaseio.com/posts.json' )
//             .then( response => {
//                 //let posts = Object.values(response.data);
//                 let keys = Object.keys(response.data);
//                 const posts = Object.values(response.data);
//                 const test = response.data[id];  //IMPORTANT----------------------------
                
//                 const data_1 = {
//                     answer
//                 };
//                 const data_2 = JSON.stringify(data_1);
//                 //console.log('DATA_2'+ data_2);


//                 //console.log(test);
//                 const data = this.state.posts;
           
           
//             axios.patch('posts/'+id+'.json', data_2);
//             });

            
            
                    
//         }

//         displayAnswerHandler = (answer,id) => {
            
//            // alert('ON SUBMIT WORKED')
//             console.log(answer);
            
//             axios.get( 'https://blog-6d4da-default-rtdb.firebaseio.com/posts.json' )
//             .then( response => {
//                 //let posts = Object.values(response.data);
//                 let keys = Object.keys(response.data);
//                 const posts = Object.values(response.data);
//                 const test = response.data[id];  //IMPORTANT----------------------------
                
//                 const data_1 = {
//                     answer
//                 };
//                 const data_2 = JSON.stringify(data_1);
//                 alert(data_2);
//                 const data = this.state.posts;
       
            
//             axios.patch('posts/'+id+'.json', data_2);
//             });
            
//         }
//     render () {
//         let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        
//         if ( !this.state.error ) {
            
//             posts = this.state.posts.map( (post) => {
//                 return (
//                     // <Link to={'/posts/' + post.id} key={post.id}>
//                     <Post
//                         key={post.key}
//                         id={post.key}
//                         title={post.title}
//                         type={post.type}
//                         body={post.body}
//                         answer={post.answer}
//                         onChange={(value, id) => this.postAnswerHandler(value,id)}
//                         //onSubmit={() => this.displayAnswerHandler()}
//                          clicked={(body) => this.displayAnswerHandler(body)}
//                         //clicked={(value, id) => this.displayAnswerHandler(value,id)}
//                          />
                        
//                     // </Link>
//                 );
//             } );
//         }

//         return (
//             <div className="Posts-Page">
//             <section className="Menu">
//                 <ul className="Menu-Items">
//                     <h1>Menu</h1>
//                     <li className="box"><NavLink to={{
//                                 pathname: '/myquestions'
                                
//                             }}>My Questions</NavLink></li>
//                              {/* <hr /> */}
//                     <li className="box"><NavLink to={{
//                                 pathname: '/answered'
                                
//                             }}>Answered</NavLink></li>
//                              {/* <hr /> */}
//                         <li className="box"><NavLink to={{
//                                 pathname: '/unanswered',
//                                 hash: '#submit',
//                                 search: '?quick-submit=true'
//                             }}>Unanswered</NavLink></li>
//                  </ul>
//             </section>
//                 <section className="Posts">
//                     {posts}
//                 </section>
//                 <section className="Answer-Info">
//                     <h1>Popular Topics</h1>
//                     <ul className="Menu-Items">
           
//                     <li className="box"><NavLink to={{
//                                 pathname: '/myquestions'
                                
//                             }}>Individual Investment</NavLink></li>
//                              {/* <hr /> */}
//                     <li className="box"><NavLink to={{
//                                 pathname: '/answered'
                                
//                             }}>Crypto</NavLink></li>
//                              {/* <hr /> */}
//                         <li className="box"><NavLink to={{
//                                 pathname: '/unanswered',
//                                 hash: '#submit',
//                                 search: '?quick-submit=true'
//                             }}>Roth IRA</NavLink></li>
//                  </ul>
//                 </section>
                
//                 <Route path="/RothIRA_1" component={RothIRA_1} />
//                 <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
//                 <Switch>
//                     <Route path="/myquestions" component={Myquestions} />
//                     <Route path="/answered" component={Answered} />
//                     <Route path="/unanswered" component={Unanswered} />
//                     <Route path="/RothIRA_1" component={RothIRA_1} />
//                     {/* <Route path= {'/'+ this.type} component={this.type} /> */}
//                 </Switch>
//             </div>
//         );
//     }
// }

// export default Posts; 