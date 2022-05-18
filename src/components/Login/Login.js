import { useFormik } from "formik";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../Validations/UserValidation";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      user_name: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="formLogin">
          <div className="heading">
            <span>Sign in</span>
          </div>

          <div className="username">
            <FaUserAlt />
            <input
              autoFocus
              name="user_name"
              type="text"
              placeholder="Username"
              value={formik.values.user_name}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.user_name && formik.touched.user_name && (
            <p className="error">{formik.errors.user_name}</p>
          )}

          <div className="password">
            <FaLock />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.password && formik.touched.password && (
            <p className="error">{formik.errors.password}</p>
          )}

          <div className="forgot_password">
            <a>Forgot your password?</a>
          </div>

          <div>
            <button type="submit" className="btnLogin">
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
      </form>
    </div>
  );
}

export default Login;
