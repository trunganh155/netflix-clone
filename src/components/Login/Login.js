import "./Login.scss";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../Validations/UserValidation";
import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const loginData = {
      userName: userName,
      password: password,
    };

    const isValid = await loginSchema.isValid(loginData);
    console.log(isValid);
  };

  return (
    <div className="container">
      <div className="formLogin">
        <div className="heading">
          <span>Sign in</span>
        </div>

        <div className="username">
          <FaUserAlt />
          <input
            autoFocus
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {/* <span>{errors?.name?.message}</span> */}
        </div>

        <div className="password">
          <FaLock />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="forgot_password">
          <a>Forgot your password?</a>
        </div>

        <div>
          <button className="btnLogin" onClick={handleLogin}>
            Login
          </button>
        </div>
        <div className="sign_up">
          <span>
            Not a member?{" "}
            <a
              onClick={() => {
                navigate("/register");
              }}
            >
              Signup
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
