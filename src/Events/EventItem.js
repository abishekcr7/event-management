import { useState } from "react";

const EventItem = (props) => {
  const [viewmore, setViewmore] = useState(false);
  const viewHandler = () => {
    setViewmore(!viewmore);
  };
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  const updateHandler = () => {
    const item = {
      name: props.name,
      date: props.date,
      location: props.location,
      description: props.description,
      capacity: props.capacity,
      id: props.id,
    };
    props.onUpdate(item)
  };
  return (
    <li>
      {!viewmore && (
        <div>
          <p>{props.name}</p>
          <p>{props.date}</p>
          <button onClick={viewHandler}>ViewMore</button>
        </div>
      )}
      {viewmore && (
        <div>
          <p>{props.name}</p>
          <p>{props.date}</p>
          <p>{props.location}</p>
          <p>{props.description}</p>
          <p>{props.capacity}</p>
          <button onClick={viewHandler}>Cancel</button>
          <button onClick={deleteHandler}>Delete</button>
          <button onClick={updateHandler}>Update</button>
        </div>
      )}
    </li>
  );
};

export default EventItem;
