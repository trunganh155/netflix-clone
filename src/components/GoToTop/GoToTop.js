import { useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import "./GoToTop.scss";

function GoToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className="btnGoToTop"
      onClick={scrollToTop}
      style={{ display: visible ? "" : "none" }}
    >
      <BiUpArrowAlt />
    </div>
  );
}

export default GoToTop;
