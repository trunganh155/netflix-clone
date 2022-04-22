import { FaFacebookSquare, FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "./Footer.scss";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer__about">
          <p className="footer__about__title">About</p>
          <p style={{ fontStyle: "italic", fontSize: "16px", color: "gray" }}>
            Netflix Clone Website using ReactJS, Redux, React Hook, SCSS.
          </p>
        </div>

        <div className="footer__contact">
          <p className="footer__contact__title">Contact</p>
          <div className="footer__contact__row">
            <FaFacebookSquare />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/tta155/"
            >
              Trần Trung Anh
            </a>
          </div>
          <div className="footer__contact__row">
            <HiMail />
            <a target="_blank" rel="noopener noreferrer" href="">
              trantrunganh1505@gmail.com
            </a>
          </div>
          <div className="footer__contact__row">
            <FaPhone />
            <a href="">0932.353.395</a>
          </div>
        </div>
      </div>
      <div className="designBy">
        <p>© 2022 All Rights Reserved By TTA</p>
      </div>
    </div>
  );
}

export default Footer;
