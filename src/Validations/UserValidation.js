import * as yup from "yup";

export const loginSchema = yup.object().shape({
  user_name: yup
    .string()
    .min(2, "Username must be at least 2 characters")
    .required("Username is a required field."),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is a required field."),
});

export const registerSchema = yup.object().shape({
  user_name: yup
    .string()
    .min(2, "Username must be at least 2 characters")
    .required("Username is a required field."),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is a required field."),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is a required field."),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Password's not match")
    .required("Confirm Password is a required field."),
});
