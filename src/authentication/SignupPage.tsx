import { EnvelopeIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import type { TSignupFormValues } from "./modules/hooks";
import { useAuthFormConfig } from "./modules/hooks";
import { useSignupWithEmail } from "./modules/mutations";
// import { useLoginWithGoogle, useSignupWithEmail } from "./modules/mutations";

const SignupPage = () => {
  const { signUpFormConfig } = useAuthFormConfig();
  const { isPending, mutateAsync: signUpWithEmail } = useSignupWithEmail();
  const navigate = useNavigate();

  const handleSignupByEmail = async (formValues: TSignupFormValues) => {
    await signUpWithEmail(formValues);
    navigate("/dashboard");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-medium">Sign up to Post Pulse</h1>
      <form
        action=""
        className="max-w-[440px]"
        onSubmit={signUpFormConfig.onSubmit(handleSignupByEmail)}
      >
        <p className="mt-4 text-center">
          Welcome! Create an account and start sharing your thoughts and ideas with the world.
        </p>

        <div className="flex flex-col mt-4 gap-4">
          <TextInput
            placeholder="Enter your full name"
            label="Full name"
            leftSection={<UserIcon className="w-5" />}
            key={signUpFormConfig.key("full_name")}
            {...signUpFormConfig.getInputProps("full_name")}
          />
          <TextInput
            placeholder="Enter your email"
            label="Email"
            leftSection={<EnvelopeIcon className="w-5" />}
            key={signUpFormConfig.key("email")}
            {...signUpFormConfig.getInputProps("email")}
          />
          <PasswordInput
            placeholder="Enter your password"
            label="Password"
            type="password"
            leftSection={<LockClosedIcon className="w-5" />}
            key={signUpFormConfig.key("password")}
            {...signUpFormConfig.getInputProps("password")}
          />

          <PasswordInput
            placeholder="Repeat the same password"
            label="Confirm password"
            type="password"
            leftSection={<LockClosedIcon className="w-5" />}
            key={signUpFormConfig.key("confirm_password")}
            {...signUpFormConfig.getInputProps("confirm_password")}
          />
          <Button variant="filled" className="mt-2" type="submit" loading={isPending}>
            Sign up
          </Button>

          <div>
            <p className="mt-3 text-center">
              Already have an account?{" "}
              <Link to="/login" className="font-medium underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </main>
  );
};
export default SignupPage;
