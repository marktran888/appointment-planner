import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
// import User from '../../lib/User';

// link specific to react router dom. We use this so we don't have to use an <a> tag (which would reload the page), to link our banger to the show page.
import { Link } from 'react-router-dom';

class CustomerIndexRoute extends React.Component {

  state = {
    appointments: []
  };

  componentDidMount() {

    axios.get(`/api/users/${this.props.match.params.id}`, {
      headers: { Authorization: Auth.getToken() }
    })
      .then(res => this.setState({ appointments: res.data.appointments }, () => console.log('state app', this.state.appointments)))
      .catch(err => console.error('ERROR', err));
  }
}

//   // likes
//   likeImage = (post) => {
//     const index = this.state.posts.indexOf(post);
//     // finding index of current post clicked on
//     const posts = this.state.posts.slice();
//     // making a copy of posts
//     posts[index].like = !posts[index].like;
//     axios.post(`/api/images/${this.state.posts[index]._id}/likes`, null, {
//       headers: { Authorization: `Bearer ${Auth.getToken()}` }
//     })
//       .then(res => {
//         User.setUser(res.data);
//         this.setState({ posts: posts });
//       });
//   }
//
//   unlikeImage = (post) => {
//     const index = this.state.posts.indexOf(post);
//     const posts = this.state.posts.slice();
//     // making copy of array
//     posts[index].like = !posts[index].like;
//     axios.delete(`/api/images/${this.state.posts[index]._id}/likes`, {
//       headers: { Authorization: `Bearer ${Auth.getToken()}` }
//     })
//       .then(res => User.setUser(res.data))
//       .then(() => this.setState({ posts: posts }));
//   }
//
//   // dislikes
//   dislikeImage = (post) => {
//     const index = this.state.posts.indexOf(post);
//     // finding index of current post clicked on
//     const posts = this.state.posts.slice();
//     // making a copy of posts
//     posts[index].dislike = !posts[index].dislike;
//     axios.post(`/api/images/${this.state.posts[index]._id}/dislikes`, null, {
//       headers: { Authorization: `Bearer ${Auth.getToken()}` }
//     })
//       .then(res => {
//         User.setUser(res.data);
//         this.setState({ posts: posts }, () => console.log('posts', posts));
//       });
//   }
//
//   undislikeImage = (post) => {
//     const index = this.state.posts.indexOf(post);
//     const posts = this.state.posts.slice();
//     // making copy of array
//     posts[index].dislike = !posts[index].dislike;
//     axios.delete(`/api/images/${this.state.posts[index]._id}/dislikes`, {
//       headers: { Authorization: `Bearer ${Auth.getToken()}` }
//     })
//       .then(res => User.setUser(res.data))
//       .then(() => this.setState({ posts: posts }));
//   }
//
//
//   handleChangeComment = (e) => {
//     this.setState({ newComment: e.target.value }, () => console.log(this.state));
//   }
//
//   toggleEditing = (post) => {
//     this.state.currentlyEditing === post ? this.setState({ currentlyEditing: null }) : this.setState({ currentlyEditing: post });
//   }
//
//
//   handleSubmitComment = (e, post) => {
//     e.preventDefault();
//
//     axios({
//       method: 'POST',
//       url: `/api/images/${post._id}/comments`,
//       headers: { Authorization: `Bearer ${Auth.getToken()}`},
//       data: { content: this.state.newComment }
//     })
//       .then(res => {
//         const index = this.state.posts.findIndex(post => post._id === res.data._id);
//         // find the post that we have added a comment to. The post with the same id as the one sent back as a response.
//         const posts = [
//           // make a post sandwich, takes the beginning and end of posts and adds the updated post with the comment/
//           ...this.state.posts.slice(0, index),
//           res.data,
//           ...this.state.posts.slice(index+1)
//         ];
//         this.setState({ posts, newComment: '', currentlyEditing: null }, () => console.log('posts', posts));
//         // set posts to be the new posts, empty new comment and nullify currently editing so the input box disappears
//       });
//   }
//
//
  // render() {
//     const user = User.getUser();
//     console.log('user', user);
//     console.log('this/stateposts', this.state.posts);
//     return (
//       <main className="columns">
//         <div className="column is-one-fifth-desktop is-hidden-mobile">
//
//         </div>
//         <div className="posts column is-two-fifths-desktop is-full-mobile">
//           <ul className="columns is-multiline">
//             {this.state.posts.map(post =>
//               <li key={post._id} className="column is-full-desktop">
//                 <Link to={`/images/${post._id}`}>
//                   <div className="card post-image">
//                     <div className="card-image" style={{backgroundImage: `url(${post.image})`}}>
//                     </div>
//                   </div>
//                 </Link>
//                 <div className="card">
//                   <div className="card-content-post">
//                     {user && user.likes.includes(post._id) ? (
//                       <button value="button" className="icon" onClick={() => this.unlikeImage(post)}>
//                         <img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/heart-icon.png" />
//                       </button>
//                     ) : (
//                       <button className="icon" onClick={() => this.likeImage(post)}>
//                         <img src="https://png.icons8.com/metro/1600/like.png" />
//                       </button>
//                     )}
//
//                     {/* dislikes */}
//                     {user && user.dislikes.includes(post._id) ? (
//                       <button value="button" className="icon" onClick={() => this.undislikeImage(post)}>
//                         <img src="http://cdn.onlinewebfonts.com/svg/img_529680.png" />
//                       </button>
//                     ) : (
//                       <button value="button" className="icon" onClick={() => this.dislikeImage(post)}>
//                         <img src="https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-2/128/thumbs-down-2-512.png" />
//                       </button>
//                     )}
//
//                     {/*comments */}
//                     <button className="icon" onClick={() => this.toggleEditing(post)}>
//                       <img src="http://icons.iconarchive.com/icons/icons8/ios7/512/Very-Basic-Speech-Bubble-icon.png" />
//                     </button>
//
//                     <h4 className="caption">{post.caption}</h4>
//                   </div>
//                 </div>
//                 <CommentInput
//                   currentUser={this.state.currentUser}
//                   post={post}
//                   handleChangeComment={this.handleChangeComment}
//                   handleSubmitComment={this.handleSubmitComment}
//                   data={this.state}
//                 />
//               </li>
//             )}
//           </ul>
//         </div>
//         <Sidebar />
//
//       </main>
//     );
//   }
// }

export default CustomerIndexRoute;
