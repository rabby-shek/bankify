import Link from "next/link";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center  h-screen bg-green-500">
      <div className="bg-white shadow rounded-xl w-full max-w-sm p-8">
        <h1 className="text-3xl font-bold text-center text-green-500 mb-3">
          Bankify
        </h1>
        <p className="mb-3">Welcome back! Please enter your details. </p>
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label htmlFor="email" className="input-box-label">
              Email
            </label>
            <input type="email" id="email" className="input-box" required />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="input-box-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input-box"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-green-700 w-full hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
          >
            Sign In
          </button>
        </form>
        <p className="mt-3 ">
          Don't have an account?
          <Link href="/sign-up" className="font-bold mx-1 hover:text-green-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
