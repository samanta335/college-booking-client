import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Pages/Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar z-10 bg-opacity-30 max-w-screen-xl bg-black lg:text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/college">Colleges</Link>
            </li>
            <li>
              <Link to="/admission">Admission</Link>
            </li>
            <li>
              <Link to="/myCollege">My College</Link>
            </li>
          </ul>
        </div>
        <a className=" text-2xl text-purple-800 uppercase">College Booking</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/college">Colleges</Link>
          </li>
          <li>
            <Link to="/admission">Admission</Link>
          </li>
          <li>
            <Link to="/myCollege">My College</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <Link to="/profile" className="uppercase text-black lg:">
              {user.displayName}
            </Link>

            <Link className="btn btn-primary ml-5" onClick={handleLogOut}>
              Logout
            </Link>
          </>
        ) : (
          <Link className="btn btn-primary" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
