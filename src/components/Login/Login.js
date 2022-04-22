import "./Login.scss";
import { FaUserAlt, FaLock } from "react-icons/fa";

function Login() {

  return (
    <div className="container">
      <div className="form">
        <div className="heading">
          <span>Sign in</span>
        </div>
        <div className="username">
          <FaUserAlt />
          <input type="text" placeholder="Username" />
        </div>
        <div className="password">
          <FaLock />
          <input type="password" placeholder="Password" />
        </div>
        <div className="forgot_password">
          <a>Forgot your password?</a>
        </div>
        <div>
          <button className="btnLogin">Login</button>
        </div>
        <div className="sign_up">
          <span>
            Not a member? <a>Signup</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
