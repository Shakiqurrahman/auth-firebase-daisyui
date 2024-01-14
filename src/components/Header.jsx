import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <header className="bg-[#1f739c] text-white">
      <div className="navbar max-width">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Shake</a>
        </div>
        <div className="flex-1">
          <ul className="menu menu-horizontal gap-4 px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Orders</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
        <div>
          {user ? (
            <>
              <span>{user.email}</span>
              <button onClick={handleLogout} className="btn btn-sm ml-5">
                Sign Out
              </button>
            </>
          ) : (
            <button className="btn btn-sm">Login</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
