
import React, { useState, useEffect } from 'react'
import axios from "axios"



const Galary = () => {

  const [Posts, setPosts] = useState([])

  useEffect(() => {

    axios.get("http://localhost:3000/posts")
      .then((res) => {
                     


       
         

        setPosts(res.data.posts || [])

      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  return (
    <section className="galary">

      {Posts.length > 0 ? (

        Posts.map((post) => (

          <div key={post._id} className="post-card">

            <img
  src={post.Image}
  alt={post.caption}
  className="w-64 h-64 object-cover"
/>

            <p>{post.caption}</p>

          </div>

        ))

      ) : (

        <p>No posts available</p>

      )}

    </section>
  )
}

export default Galary


