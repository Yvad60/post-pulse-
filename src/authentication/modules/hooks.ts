import { useForm } from "@mantine/form";
import { VALID_EMAIL_REGEX, VALID_PASSWORD_REGEX } from "../../core/constants/regexes";

export type TSignupFormValues = {
  full_name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type TLoginFormValues = {
  email: string;
  password: string;
};

export const useAuthFormConfig = () => {
  const validateEmail = (value: string) => (VALID_EMAIL_REGEX.test(value) ? null : "Invalid email");
  const signUpFormConfig = useForm<TSignupFormValues>({
    mode: "uncontrolled",
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validate: {
      full_name: (value) => (value.length > 2 ? null : "Name must have at least 2 letters"),
      email: validateEmail,
      password: (value) =>
        VALID_PASSWORD_REGEX.test(value) ? null : "Please enter a strong password",
      confirm_password: (value, values) =>
        value === values.password ? null : "Passwords do not match",
    },
  });

  const loginFormConfig = useForm<TLoginFormValues>({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: validateEmail,
      password: (value) => (value ? null : "Password is required"),
    },
  });

  return { signUpFormConfig, loginFormConfig };
};
