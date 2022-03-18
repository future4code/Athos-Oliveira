import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";
import { IconButton } from "@material-ui/core";

const Header = (props) => {
  const enviarChat = () => {
    alert("Loading...");
  };

  return (
    <div className="header">
      <IconButton>
        <PersonIcon
          onClick={props.irTelaMatch}
          className="header__icon"
          fontSize="large"
        />
      </IconButton>
      <IconButton onClick={props.voltarInicio}>
        <img
          className="header__logo"
          src="https://cdn-icons-png.flaticon.com/512/3800/3800023.png"
          alt="Astromatch"
        />
      </IconButton>
      <IconButton>
        <ChatIcon
          onClick={enviarChat}
          className="header__icon"
          fontSize="large"
        />
      </IconButton>
    </div>
  );
};

export default Header;
