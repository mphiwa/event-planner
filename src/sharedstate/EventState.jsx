// create a shared state container for events
import { createContext, useState } from "react";
// Context object for events
export const EventState = createContext(null);
// Provider component that holds all event logic
export function EventStore({ children }) {
  // Stores all events in memory as a list
  const [events, setEvents] = useState([]);
  // a counter for event ids
  const [nextId, setNextId] = useState(1);
  // Add a new event to the list
  function addEvent(eventInfo) {
    const newEvent = {
      id: nextId.toString(),
      name: eventInfo.name,
      date: eventInfo.date,
      time: eventInfo.time,
      location: eventInfo.location,
      description: eventInfo.description,
    };
    setEvents((prevEvents) => prevEvents.concat(newEvent));
    setNextId((prevId) => prevId + 1);
  }
  // Update an existing event
  function updateEvent(eventId, updatedInfo) {
   setEvents((prevEvents) =>
    prevEvents.map((event) => {
     if (event.id !== eventId) {
         return event;
        }
        return {
          id: event.id,
          name: updatedInfo.name !== undefined ? updatedInfo.name : event.name,
          date: updatedInfo.date !== undefined ? updatedInfo.date : event.date,
          time: updatedInfo.time !== undefined ? updatedInfo.time : event.time,
          location: updatedInfo.location !== undefined ? updatedInfo.location : event.location,
          description: updatedInfo.description !== undefined ? updatedInfo.description : event.description,
        };
      })
    );
  }

  // Remove an event completely
  function deleteEvent(eventId) {
   setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
  }

  // data and functions to be shared with other components
  const value = {
    events,
    addEvent,
    updateEvent,
    deleteEvent,
  };

  // Enable shared access to event state
  return <EventState.Provider value={value}>{children}</EventState.Provider>;
}
