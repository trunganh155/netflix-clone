import { useFormik } from "formik";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { registerSchema } from "../../Validations/UserValidation";
import "./Register.scss";

function Register() {
  const formik = useFormik({
    initialValues: {
      user_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="formRegiter">
          <div className="heading">
            <span>Sign up</span>
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

          <div className="email">
            <HiMail />
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.email && formik.touched.email && (
            <p className="error">{formik.errors.email}</p>
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

          <div className="password">
            <FaLock />
            <input
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.confirm_password &&
            formik.touched.confirm_password && (
              <p className="error">{formik.errors.confirm_password}</p>
            )}

          <div>
            <button type="submit" className="btnRegister">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
