import LoginForm from "../LoginForm/LoginForm";

export default function SigninCard() {
  return (
    <section className="w-full max-w-[475px] py-11 px-2 mx-2 sc-477:mx-0 flex flex-col items-center shadow-md bg-white rounded-[20px]">
      <div className="w-fit h-fit flex items-center gap-3">
        <div className="w-[6px] h-10 bg-cc-orange-100"></div>
        <h1 className="text-heading ">MANAGE COURSES</h1>
      </div>
      <div className="flex flex-col mt-10 mb-12 gap-2 items-center text-center">
        <h2 className=" text-title">SIGN IN</h2>
        <span className="text-description">
          Enter your credentials to access your account
        </span>
      </div>
      <LoginForm />

      <span className="text-description text-center mt-6">
        Forgot your password?{" "}
        <a className="text-cc-orange-200 cursor-pointer underline">
          Reset Password
        </a>
      </span>
    </section>
  );
}
