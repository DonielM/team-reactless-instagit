import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import  Avatar  from "@mui/material/Avatar";
import React from "react";
import "../styles/Posts.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ user, postImage, following, likes, timestamp }) {
  console.log(user);
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
         <img className="avatar"src={`https://api.dicebear.com/7.x/initials/svg?seed=${user}`} />
        </div>
        <MoreHorizIcon fontSize="Large"/>
      </div>
      <div className="post__image">
        <img src={postImage} alt="Post Image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon" fontSize="Large"/>
            <ChatBubbleOutlineIcon className="postIcon" fontSize="Large" />
            <TelegramIcon className="postIcon" fontSize="Large"/>
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" fontSize="Large"/>
          </div>
        </div>
        Liked by {likes} people.
      </div>
    </div>
  );
}

export default Post;