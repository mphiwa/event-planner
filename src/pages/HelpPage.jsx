import NavBar from "../routes/NavBar"
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SessionState } from "../sharedstate/SessionState";

export default function HelpPage() {

const navigate = useNavigate();
const { loggedIn } = useContext(SessionState);

useEffect(() => {if (!loggedIn) navigate("/login");},
 [loggedIn, navigate]);

  return (
       <div>
         <div className="page-container">
         <NavBar />
         < h1 className="page-heading">Help Page</h1>
       </div>
    </div>
    );
}
