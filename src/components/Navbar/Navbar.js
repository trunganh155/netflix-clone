import logo from "../../assets/images/netflix-logo2.png";
import { FaSearch } from "react-icons/fa";
import "./Navbar.scss";
import { useScrollY } from "../hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [scrollY] = useScrollY();
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleInputSearchChange = (e) => {
    const keyword = e.target.value;
    setKeyword(keyword);
    keyword.length > 0
      ? navigate(`/search?keywords=${keyword.trim()}`)
      : navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const goHome = () => {
    navigate("/");
    setKeyword("");
  };

  return (
    <div
      className="navigation"
      style={
        scrollY < 100
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background)" }
      }
    >
      <div className="navContainer">
        <div className="logo" onClick={goHome}>
          <img src={logo} alt="" />
        </div>
        <div className="navSearch">
          <FaSearch className="iconSearch" />
          <input
            className="inputSearch"
            type="text"
            placeholder="Input title, people, ..."
            onChange={handleInputSearchChange}
            value={keyword}
          />
        </div>
        <div className="navLogin">
          <button className="btnLogin" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
