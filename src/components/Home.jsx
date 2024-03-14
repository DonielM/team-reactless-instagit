import "../styles/Home.css";


function Home() {
  return (
    <div className="container-fuild py-5 banner">
      <div className="container-fuild py-5 banner-content">
        <h1>InstaGit - Share the Awesome Git Repo!</h1>
        <p>
          Hover on the circle and see the circle change with pure css. <br />
          This is done with simple animation and transition
        </p>
        <p></p>
        <div className="circle__row">
          <div className="circle">
            <img className="circle-image" src="../src/assets/images/Repo.jpg" />
            <div className="circle-text">Git repositories</div>
          </div>
          <div className="circle">
            <img
              className="circle-image"
              src="../src/assets/images/parameter1.jpg"
            />
            <div className="circle-text">Code sharing </div>
          </div>
          <div className="circle">
            <img
              className="circle-image"
              src="https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            />
            <div className="circle-text">Favourite REPO</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
