import React, { useState } from "react";
import Post from "./Posts";
import "../styles/Timeline.css";
import wwGif from "../assets/images/WWdemo.gif";
import schedulerGif from "../assets/images/scheduler.gif";
import passwordGif from "../assets/images/PasswordGen.gif";
import javaQuizGif from "../assets/images/JavaQuiz.gif";


function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "redian_",
      postImage: wwGif,
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "johndoe",
      postImage: schedulerGif,
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "mariussss",
      postImage: passwordGif,
      likes: 140,
      timestamp: "2d",
    },  
    {
      user: "kobee_18",
      postImage: javaQuizGif,
      likes: 14,
      timestamp: "2d",
    },
  ]);
  const chunkArray = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };

  const postsRows = chunkArray(posts, 4);
  return (
    <div className="timeline container-fluid">
      {postsRows.map((row, index) => (
        <div key={index} className="row mb-3">
          {row.map((post, postIndex) => (
            <div key={postIndex} className="col-lg-6 d-flex justify-content-center">
          
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
            </div>
          ))}  
        </div>
          ))}  
    </div>
      

    
  );
}

export default Timeline;