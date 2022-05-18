import "./Register.scss";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function Register() {
  return (
    <div className="container">
      <div className="formRegiter">
        <div className="heading">
          <span>Sign up</span>
        </div>
        <div className="username">
          <FaUserAlt />
          <input type="text" placeholder="Username" autoFocus />
        </div>
        <div className="email">
          <HiMail />
          <input type="text" placeholder="Email" />
        </div>
        <div className="password">
          <FaLock />
          <input type="password" placeholder="Password" />
        </div>
        <div className="password">
          <FaLock />
          <input type="password" placeholder="Confirm Password" />
        </div>

        <div>
          <button className="btnRegister">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
