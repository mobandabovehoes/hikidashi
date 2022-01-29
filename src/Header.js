import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import PublicIcon from "@mui/icons-material/Public";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import ArticleIcon from "@mui/icons-material/Article";


function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
 

   

  return (
    <div className="header">
      <Link to="/">
        Home
        <FlutterDashIcon/>
      </Link>
      <Link to="/books">
        <Button
          id="fade-button"
          aria-controls="fade-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Books
          <MenuBookIcon />
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <Link to="/books">
            <MenuItem onClick={handleClose}>ひろゆき</MenuItem>
          </Link>
          <Link to="/nakata">
            <MenuItem onClick={handleClose}>中田敦彦</MenuItem>
          </Link>
        </Menu>
      </Link>
      <Link to="/izaka">
        Tweets
        <PeopleIcon />
      </Link>
      <Link to="/blog">
        SNS
        <PublicIcon />
      </Link>
      <Link to="/news">
        News
        <ArticleIcon />
      </Link>
    </div>
  );
}

export default Header;
