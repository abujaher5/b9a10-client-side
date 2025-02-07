import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider } from "firebase/auth";

const Login = () => {
  const auth = getAuth(app);
  const { loginUser } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //sign in user
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .then((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left mb-3">
          <h1 className="text-5xl font-bold">Please Login</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center p-3">
            New Here !! Please
            <Link to="/register">
              <button className="text-blue-600 font-semibold pl-3">
                Register
              </button>
            </Link>
          </p>

          <div className="p-4 space-y-3 mx-auto">
            <h2 className="text-xl text-center font-semibold">Login With</h2>
            <button onClick={handleGoogleLogin} className="btn  w-full">
              <FaGoogle></FaGoogle>
              Login With Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="btn btn-outline w-full"
            >
              <FaGithub></FaGithub>
              Login With Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
