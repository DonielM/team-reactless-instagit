import "./SideNav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";

function SideNav() {
  return (
    <div className="sidenav">
      <img
        className="sidenavLogo"
        src="../assets/images/InstaGitLogobyDesigner.png"
        alt="InstaGit Logo"
      />

      <div className="sidenavButtons">
        <button className="sidenavButton">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="sidenavButton">
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sidenavButton">
          <ExploreIcon />
          <span>Explore</span>
        </button>
        <button className="sidenavButton">
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        <button className="sidenavButton">
          <ChatIcon />
          <span>Messages</span>
        </button>
        <button className="sidenavButton">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
        <button className="sidenavButton">
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
      </div>
      <div className="sidenavMore">
        <button className="sidenavButton">
          <MenuIcon />
          <span className="sidenavButtonText">More</span>
        </button>
      </div>
    </div>
  );
}

export default SideNav;
