import Link from "next/link";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-full bg-green-500 py-4">
      <div className="bg-white shadow rounded-xl w-full max-w-lg p-8">
        <h1 className="text-3xl font-bold text-center text-green-500 mb-3">
          Sign up
        </h1>
        <p className="mb-5 text-center">Please enter your details.</p>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="input-box-label">First Name</label>
              <input type="text" id="firstName" placeholder="John" className="input-box" required />
            </div>
            <div>
              <label htmlFor="lastName" className="input-box-label">Last Name</label>
              <input type="text" id="lastName" placeholder="ex: Doe" className="input-box" required />
            </div>
          </div>
          <div>
            <label htmlFor="address" className="input-box-label">Address</label>
            <input type="text" id="address" placeholder="Enter your specific address" className="input-box" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="state" className="input-box-label">State</label>
              <input type="text" id="state" placeholder="ex: NY" className="input-box" required />
            </div>
            <div>
              <label htmlFor="postalCode" className="input-box-label">Postal Code</label>
              <input type="text" id="postalCode" placeholder="ex: 11101" className="input-box" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="dob" className="input-box-label">Date of Birth</label>
              <input type="date" id="dob" className="input-box" required />
            </div>
            <div>
              <label htmlFor="ssn" className="input-box-label">SSN</label>
              <input type="text" id="ssn" placeholder="ex: 1234" className="input-box" required />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="input-box-label">Email</label>
            <input type="email" id="email" placeholder="Enter your email" className="input-box" required />
          </div>
          <div>
            <label htmlFor="password" className="input-box-label">Password</label>
            <input type="password" id="password" placeholder="Enter your password" className="input-box" required />
          </div>
          <button
            type="submit"
            className="text-white bg-green-700 w-full hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
          >
            Sign up
          </button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account?
          <Link href="/sign-in" className="font-bold mx-1 hover:text-green-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
