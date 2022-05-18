import * as yup from "yup";

export const loginSchema = yup.object().shape({
  userName: yup.string().required('Username cannot empty'),
  password: yup.string().min(4).required(),
});
