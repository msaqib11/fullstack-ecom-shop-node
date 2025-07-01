import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../../store/userSlice.js";
import axiosInstance from "../../api/axios.js";
const Login = () => {
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const {isFetching,error} = useSelector((state)=>state.user)
  const dispatch = useDispatch()

  async function handleSubmit(e){
    e.preventDefault()
    dispatch(loginStart())
    try {
      const res = await axiosInstance.post("/auth/login",{
        username : userName,
        password : password
      })
      dispatch(loginSuccess(res.data))
    } catch (error) {
      dispatch(loginFailure(error.response.data.message))
    }
    

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-teal-700 mb-6 text-center">Login</h1>
        <form className="flex flex-col gap-y-4">
          <input
            type="text"
            onChange={(e)=>setUserName(e.target.value)}
            placeholder="Username or Email"
            className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {
            error && <div className="text-red-500 text-sm lowercase">{error}</div>
          }
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-teal-600" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-teal-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="mt-2 px-5 py-3 rounded-lg text-lg font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-all  disabled:bg-slate-500 disabled:cursor-not-allowed"
            disabled={isFetching}
            onClick={handleSubmit}
          >
            {isFetching ? "please wait..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
