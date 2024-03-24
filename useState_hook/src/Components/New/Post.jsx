// import {useState, useEffect} from 'react';


// export const Post() {
//   const [posts, setPosts] = useState([]);
  
//   const fetchPosts = async() => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=2");
//     const data = await response.json();
//     setPosts(data);
//   }
 
//  useEffect(() => {
//       fetchPosts()
//    }, []);
   
//   const addPost = async(title, body) => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       body: JSON.stringify({
//           title: title,
//           body: body,
//           userId: Math.random().toString(36).slice(2),
//       }),
//        headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//       },
//     });
//     const data = await response.json();
//     setPosts((prevPosts) => [data, ...prevPosts])
//   };
   
//   const deletePost = async(id) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//       method: 'DELETE'
//     })
//       if(response.status === 200) {
//         setPosts(
//           posts.filter((post) => {
//             return post.id !== id;
//           })
//         )
//       }
//   };
   
//   return (
//     <main>
//     <h1>Consuming REST api with Axios</h1>
//       <AddPost addPost={addPost}/>
//       <section className="posts-container">
//       <h2>Posts</h2>
//         {posts.map((post) => 
//           <Post 
//             key={post.id} 
//             id={post.id}
//             title={post.title} 
//             body={post.body} 
//             deletePost={deletePost}
//           />
//         )}
//       </section>
//    </main>
//   )
// }

// export default Post