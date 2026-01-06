// import Bootstrap components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function EventCard({ event }) {
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
        </Card.Body>
      </Card>
    </div>
  );
}
