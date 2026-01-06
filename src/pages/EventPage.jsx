import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SessionState } from "../sharedstate/SessionState";

export default function EventPage() {
  const navigate = useNavigate();
  const { loggedIn } = useContext(SessionState);

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn, navigate]);

  return (
    <div className="page-container">
      <h1 className="page-heading">Add Event</h1>
    </div>
  );
}