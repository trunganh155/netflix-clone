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
            Scanfcode.com CODE WANTS TO BE SIMPLE is an initiative to help the
            upcoming the code. Scanfcode focuses on providing the most efficient
            code or snippets as the code wants to be simple. We will help
            programmers build up concepts in different programming languages
            that include C, C++, Java, HTML,
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
