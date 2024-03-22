import React, { useState } from "react";
import Post from "./Posts";
import "../styles/Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "redian_",
      postImage:
        "../src/assets/images/WWdemo.gif",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "johndoe",
      postImage:
        "../src/assets/images/scheduler.gif",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "mariussss",
      postImage:
        "../src/assets/images/PasswordGen.gif",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      postImage:
        "../src/assets/images/JavaQuiz.gif",
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