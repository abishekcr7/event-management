import { useState } from "react";
import EventItem from "./EventItem";

const EventList = (props) => {
  return (
    <div className="flex flex-wrap justify-items-start bg-purple-600 rounded-lg ... m-10">
      {props.items.map((item)=>(
        <>
        <EventItem
          name={item[Object.keys(item)[0]].name}
          date={item[Object.keys(item)[0]].date}
          location={item[Object.keys(item)[0]].location}
          description={item[Object.keys(item)[0]].description}
          capacity={item[Object.keys(item)[0]].capacity}
          key={item[Object.keys(item)[0]].id}
          id={Object.keys(item)[0]}
          onUpdate={props.onUpdate}
          onDelete={props.onDelete}
        />
        <br></br>
      </>
      ))}
    </div>
  );
};
export default EventList;
