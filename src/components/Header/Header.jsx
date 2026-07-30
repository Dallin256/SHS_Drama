import { Link } from "react-router-dom";

import "./Header.css";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export default function Header({
  currentLoc,
  openSignUpModal,
  openItemModal,
  openSignInModal,
}) {
  return (
    <header className="header">
      <div className="header__backbox"></div>
      <div className="header__emblem">
        <img></img>
      </div>
    </header>
  );
}
