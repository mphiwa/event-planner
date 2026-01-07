// import React hook to read shared state
import { useContext } from "react";
// import the shared event context
import { EventState } from "../sharedstate/EventState";
// import the card used to display each event
import EventCard from "./EventCard";

export default function EventList() {
  // read the events array from shared state
  const { events } = useContext(EventState);

  // show a friendly message if there are no events
  if (events.length === 0) {
    return <p className="mt-3"> Sorry no events yet. Click Add Event to create one.</p>;
  }

  return (
    <div className="mt-3">
      <div className="row">
      {/* loop through events and show an EventCard for each item */}
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      </div>
    </div>
  );
}
