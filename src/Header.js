import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import BookIcon from "@mui/icons-material/Book";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

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
        <FlutterDashIcon className="header__FlutterDashIcon" />
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
          <MenuBookIcon/>
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
          <Link to="/books"><MenuItem onClick={handleClose}>ひろゆき</MenuItem></Link>
          <Link to="/nakata"><MenuItem onClick={handleClose}>中田敦彦</MenuItem></Link>
          <Link to="/daigo"><MenuItem onClick={handleClose}>メンタリストだいご</MenuItem></Link>
        </Menu>
      </Link>

      <Link to="/izaka">
        つぶやき
        <PeopleIcon />
      </Link>

      <Link to="/blog">
        Blog
        <BookIcon className="header__BlogIcon" />
      </Link>
    </div>
  );
}

export default Header;
