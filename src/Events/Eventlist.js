import { useState } from "react";
import EventItem from "./EventItem";

const EventList = (props) => {
  
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <EventItem
            name={item.name}
            date={item.date}
            location={item.location}
            description={item.description}
            capacity={item.capacity}
            key={item.id}
            id={item.id}
            onUpdate={props.onUpdate}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
    </div>
  );
};
export default EventList;
