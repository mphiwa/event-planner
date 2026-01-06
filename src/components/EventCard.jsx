// import Bootstrap components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import navigation tool for moving to the edit screen
import { useNavigate } from "react-router-dom";
// import React hook to read shared state
import { useContext } from "react";
// import the shared event context to delete events
import { EventState } from "../sharedstate/EventState";

export default function EventCard({ event }) {

  const navigate = useNavigate();
  const { deleteEvent } = useContext(EventState);

  // send the user to the edit page event
  function editEvent() {
    navigate("/event", { state: { eventToEdit: event } });
  }

  // remove this event from shared state
  function handleDelete() {
    deleteEvent(event.id);
  }

  return (
    // use Bootstrap columns so cards align in a grid layout
    <div className="col-md-4 mb-4">
      {/* make card take full height so all cards align evenly */}
      <Card className="h-100">
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          {/* show event details */}
          <Card.Text>
            Date: {event.date}
            <br />
            Time: {event.time}
            <br />
            Location: {event.location}
            <br/>
            Description: {event.description}
          </Card.Text>
          {/* action buttons for this event */}
          <div className="d-flex gap-2">
            <Button variant="outline-primary" type="button" onClick={editEvent}>
              Edit
            </Button>
            <Button variant="outline-danger" type="button" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
