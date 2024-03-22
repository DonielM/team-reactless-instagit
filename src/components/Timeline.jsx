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

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
      </div>
    </div>
  );
}

export default Timeline;