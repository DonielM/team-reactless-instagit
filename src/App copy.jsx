import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const userURL = "https://api.github.com/users/";
  const reposURL = "https://api.github.com/users/";
  const [userData, setUserData] = useState(null);
  const [reposData, setReposData] = useState([]);
  const [userName, setUserName] = useState("FilipPaskalev");
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    fetchData(userName);
    fetchRepos(userName);
  }, [userName]);

  const fetchData = async (user) => {
    try {
      const response = await fetch(userURL + user);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  const fetchRepos = async (user) => {
    try {
      const response = await fetch(reposURL + user + "/repos");
      const data = await response.json();
      setReposData(data);
    } catch (error) {
      console.error("Error fetching repositories data: ", error);
    }
  };

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      setUserName(inputValue.trim());
    }
  };

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {userData && (
        <div className="user-profile">
          <img src={userData.avatar_url} alt="Avatar" className="avatar" />
          <div className="user-details">
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </div>
        </div>
      )}
      {reposData.length > 0 && (
        <div className="repos-list">
          <h3>Repositories:</h3>
          <ul>
            {reposData.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
