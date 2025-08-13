import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { publicRequest } from "../requestMethods";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAdmin = useSelector((state) => state.user?.currentUser?.isAdmin)
    if (isAdmin) return <Navigate to="/" replace />
    async function handleLogin(e) {
        e.preventDefault();
        dispatch(loginStart());
        try {
            const res = await publicRequest.post("/auth/login", { username, password })
            dispatch(loginSuccess(res.data));
            navigate("/");
        } catch (error) {
            dispatch(loginFailure())
            setError(true);
            console.error("Login failed:", error);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    Admin Login
                </h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1" htmlFor="email">
                            user name
                        </label>
                        <input
                            id="user name"
                            type="text"
                            placeholder="Enter your user name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-600 mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && (
                        <div className="text-red-500 text-sm mb-4">
                            Invalid username or password
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
