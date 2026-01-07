import NavBar from "../routes/NavBar"
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SessionState } from "../sharedstate/SessionState";
import Card from "react-bootstrap/Card";

export default function HelpPage() {

const navigate = useNavigate();
const { loggedIn } = useContext(SessionState);

useEffect(() => {if (!loggedIn) navigate("/login");},
 [loggedIn, navigate]);

  return (
       <div>
        <NavBar />
         <div className="page-container">
          <div className="container">
          < h1 className="page-heading text-center mb-4">Help Page</h1>
          <div className="row justify-content-center gap-4">
            <Card className="col-md-10 helpPage-card">
              <Card.Body>
                <Card.Title>Tip : How to register</Card.Title>
                <Card.Text>
                  Go to the Register page, fill in your info such as name,email etc.., and submit.
                  After registering, you can log in using your username and password.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="col-md-10 helpPage-card">
              <Card.Body>
                <Card.Title> Tip : How to add, edit, and delete events</Card.Title>
                <Card.Text>
                  Click the Add Event button to create an event. The Events will appear on the dashboard immediately.
                  Use Edit button to update an event and Save to apply the changes. 
                  Use Delete button to remove an event from the dashboard permanently.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="col-md-10 helpPage-card">
              <Card.Body>
                <Card.Title>Tip : Navigation tips</Card.Title>
                <Card.Text>
                  Use the navigation bar to move between Dashboard, Add Event,
                  and Help. You can log out anytime using the Logout button.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
         </div>
       </div>
    </div>
    );
}
