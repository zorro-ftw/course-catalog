import PrimaryButton from "../PrimaryButton/PrimaryButton";
import InputField from "./InputField/InputField";

export default function LoginForm() {
  return (
    <form className="w-full px-8">
      <div className="flex flex-col gap-5">
        <InputField type="email" label="Email" />
        <InputField type="password" label="Password" />
        <PrimaryButton type="submit" margin="mt-2" navigateTo="/dashboard">
          SIGN IN
        </PrimaryButton>
      </div>
    </form>
  );
}
