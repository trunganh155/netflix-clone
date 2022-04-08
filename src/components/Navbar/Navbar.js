import logo from "../../assets/images/SSphim.png";
import { FaSearch } from "react-icons/fa";
import "./Navbar.scss";
import { useScrollY } from "../hooks";

function Navbar() {
  const [scrollY] = useScrollY();

  return (
    <div
      className="navigation"
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background)" }
      }
    >
      <div className="navContainer">
        <div className="logo">
          <img src={logo} alt="" /> 
        </div>
        <div className="navSearch">
          <FaSearch className="iconSearch" />
          <input
            className="inputSearch"
            type="text"
            placeholder="Input title, people, ..."
          />
        </div>
        <div className="navLogin">
          <button className="btnLogin">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
