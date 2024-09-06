import { useState } from "react";

const EventItem = (props) => {
  const [viewmore, setViewmore] = useState(false);
  const [changeToUpdate, setChangeToUpdate] = useState(true)
  const viewHandler = () => {
    setViewmore(!viewmore);
  };
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  
  const updateHandler = () => {
    setChangeToUpdate(true)
    const item = {
      name: props.name,
      date: props.date,
      location: props.location,
      description: props.description,
      capacity: props.capacity,
      id: props.id,
    };
    props.onUpdate(item,props.id,changeToUpdate)
    window.globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  };
  return (
    <>
      {!viewmore && (
        <div key={props.id} className="overflow-hidden break-words block m-12 w-80 p-6 bg-black border border-gray-200 rounded-lg shadow hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <p className="mb-2 text-2xl font-bold tracking-tight text-purple-500 dark:text-purple-500">{props.name}</p>
          <p className="mb-3 font-normal text-white dark:text-white">Date : {props.date}</p>
          <button className="text-white bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={viewHandler}>View Details</button>
          <button className="text-white bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={updateHandler}>Update</button>
          <button className="text-white bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={deleteHandler}>Delete</button>    
        </div>
      )}
      {viewmore && (
        <div key={props.id} className="overflow-hidden break-words block m-12 w-80 p-6 bg-black border border-gray-200 rounded-lg shadow hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <p className="mb-2 text-2xl font-bold tracking-tight text-purple-500 dark:text-purple-500">{props.name}</p>
          <p className="mb-3 font-normal text-white dark:text-white">Date : {props.date}</p>
          <p className="mb-3 font-normal text-white dark:text-white">Location : {props.location}</p>
          <p className="mb-3 font-normal text-white dark:text-white">Type : {props.description}</p>
          <p className="mb-3 font-normal text-white dark:text-white">Capacity : {props.capacity}</p>
          <button className="text-white bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={viewHandler}>Cancel</button>
          <button className="text-white bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={updateHandler}>Update</button>
          <button className="text-white bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={deleteHandler}>Delete</button>
        </div>
      )}
      </>
  );
};

export default EventItem;
