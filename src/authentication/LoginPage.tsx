import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import type { TLoginFormValues } from "./modules/hooks";
import { useAuthFormConfig } from "./modules/hooks";
import { useLoginWithEmail } from "./modules/mutations";

const LoginPage = () => {
  const { loginFormConfig } = useAuthFormConfig();
  const { isPending, mutateAsync: loginWithEmail } = useLoginWithEmail();
  const navigate = useNavigate();

  const handleLoginByEmail = async (formValues: TLoginFormValues) => {
    loginWithEmail(formValues);
    navigate("/dashboard");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-medium">Sign in to Post Pulse</h1>
      <form
        action=""
        className="max-w-[440px]"
        onSubmit={loginFormConfig.onSubmit(handleLoginByEmail)}
      >
        <p className="mt-4 text-center">
          Welcome back! Login to access and manage your blogs and articles.
        </p>

        <div className="flex flex-col mt-4 gap-4">
          <TextInput
            placeholder="Enter your email"
            label="Email"
            leftSection={<EnvelopeIcon className="w-5" />}
            key={loginFormConfig.key("email")}
            {...loginFormConfig.getInputProps("email")}
          />
          <PasswordInput
            placeholder="Enter your password"
            label="Password"
            type="password"
            leftSection={<LockClosedIcon className="w-5" />}
            key={loginFormConfig.key("password")}
            {...loginFormConfig.getInputProps("password")}
          />
          <Button variant="filled" color="dark" className="mt-2" type="submit" loading={isPending}>
            Login
          </Button>

          <div>
            <p className="mt-3 text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="font-medium underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </main>
  );
};
export default LoginPage;
