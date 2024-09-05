import { useState } from "react";
import EventItem from "./EventItem";

const EventList = (props) => {
  return (
    <>
      {props.items.length === 0 && (
        <div className="flex justify-center bg-purple-500 rounded-lg ... m-10">
          <h1 className="text-3xl ml-12 text-black-600">
            No Events Currently available
          </h1>
        </div>
      )}
      <div className="flex flex-wrap justify-items-start bg-purple-500 rounded-lg ... m-10">
      {props.items.map((item) => (
        <>
          <EventItem
            name={item[Object.keys(item)[0]].name}
            date={item[Object.keys(item)[0]].date}
            location={item[Object.keys(item)[0]].location}
            description={item[Object.keys(item)[0]].description}
            capacity={item[Object.keys(item)[0]].capacity}
            key={Object.keys(item)[0]}
            id={Object.keys(item)[0]}
            onUpdate={props.onUpdate}
            onDelete={props.onDelete}
          />
          <br></br>
        </>
      ))}
    </div>
    </>
  );
};
export default EventList;
