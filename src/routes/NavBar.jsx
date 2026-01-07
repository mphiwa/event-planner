import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SessionState } from "../sharedstate/SessionState";

export default function NavBar() {
  const navigate = useNavigate();
  const { logout } = useContext(SessionState);

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="navBar">
      <nav className="navBar-inner">
        <div className="brand-name">Event Planner</div>

        <ul className="navBar-links">
          <li>
            <Link className="navBar-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="navBar-link eventAddBtn" to="/event">
              Add Event
            </Link>
          </li>
          <li>
            <Link className="navBar-link" to="/help">
              Help
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="navBar-logout-button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

