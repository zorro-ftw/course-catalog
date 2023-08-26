import Brand from "../Brand/Brand";
import LoginForm from "../LoginForm/LoginForm";

export default function SigninCard() {
  return (
    <section className="w-full max-w-[475px] py-11 px-2 mx-2 sc-477:mx-0 flex flex-col items-center shadow-md bg-white rounded-[20px]">
      <Brand variant="login" />
      <div className="flex flex-col mt-10 mb-12 gap-2 items-center text-center">
        <h2 className=" cc-text-22-semibold">SIGN IN</h2>
        <span className="cc-text-14-gr-med">
          Enter your credentials to access your account
        </span>
      </div>
      <LoginForm />

      <span className="cc-text-14-gr-med text-center mt-6">
        Forgot your password?{" "}
        <a className="text-cc-orange-200 cursor-pointer underline">
          Reset Password
        </a>
      </span>
    </section>
  );
}
