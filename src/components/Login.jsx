import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { useContext } from "react";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" hero min-h-screen  bg-base-200">
      <div className="max-width hero-content w-full gap-10 flex-col">
        <h1 className="text-3xl sm:text-5xl text-center font-bold">
          Login now!
        </h1>
        <div className="card w-full max-w-xl shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
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
                name="password"
                placeholder="Your Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <label className="label mx-auto">
              <Link to="/register" className="label-text-alt link link-hover">
                New to this website? Please Register
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
