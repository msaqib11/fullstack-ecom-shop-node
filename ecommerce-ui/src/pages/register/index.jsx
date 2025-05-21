const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-teal-700 mb-6 text-center">Register</h1>
        <form className="flex flex-col gap-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <div className="text-sm text-slate-500">
            Agreement with Terms and Conditions
          </div>

          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="w-4 h-4 accent-teal-600" />
            <span>I agree with Terms and Conditions</span>
          </div>

          <button
            type="submit"
            className="mt-2 px-5 py-3 rounded-lg text-lg font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-all"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
