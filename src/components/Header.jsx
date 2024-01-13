import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#1f739c] text-white">
      <div className="navbar max-width">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Shake</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-4 px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
