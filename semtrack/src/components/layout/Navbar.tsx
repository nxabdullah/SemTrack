import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <Link to="/app">
          <a className="btn btn-ghost normal-case text-3xl">semtrack</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
