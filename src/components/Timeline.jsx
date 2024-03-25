import React, { useState } from "react";
import Post from "./Posts";
import "../styles/Timeline.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Timeline() {
  const posts=[
    {
      user: "redian_",
      key:1,
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
      timestamp1: "2d",
    },
    {
      user: "johndoe",
      key:2,
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "mariussss",
      key:3,
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      key:4,
      postImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 14,
      timestamp: "2d",
    },
  ];

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