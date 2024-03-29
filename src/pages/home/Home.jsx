// Hooks
import { useState, useEffect } from "react";

// Styles
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Animations
import anime from "animejs/lib/anime.es.js";

// Components
import SearchBtn from "../../components/searchBtn/SearchBtn.jsx";
import UserCard from "../../components/userCard/UserCard.jsx";
import Homepage from "../homePage/Homepage.jsx";

import Footer from "../../components/footer/Footer.jsx"


// Images
import repoImg from "/src/assets/images/Repo.jpg";
import parameterImg from "/src/assets/images/parameter1.jpg";

function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const startAnimation = () => {
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating) {
      const animation = anime({
        targets: ".circle__row",
        translateX: [-500, 0],
        duration: 800,
      });
      return () => {
        animation.pause();
        setIsAnimating(false);
      };
    }
  }, [isAnimating]);

  return (
    <>
      <div className="p-5 mb-4 rounded-3 banner">
        <div className="container-build py-5 banner-content">
          <h1>InstaGit </h1>
          <h1>Share Your Awesome Git Repo!</h1>

          <p></p>
          <div className="circle__row" onClick={startAnimation}>
            <div className="circle">
              <img className="circle-image" src={repoImg} />
              <div className="circle-text">Git repositories </div>
            </div>
            <div className="circle">
              <img className="circle-image" src={parameterImg} />
              <div className="circle-text">Code sharing </div>
            </div>
            <div className="circle">
              <img
                className="circle-image"
                src="https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              />
              <div className="circle-text" >Favorite Users</div>
            </div>
          </div>
        </div>
      </div>

      <SearchBtn />
      <UserCard />
      <Homepage />
      <Footer/>
    </>
  );
}

export default Home;
