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
    console.log(changeToUpdate,'1')
    props.onUpdate(item,props.id,changeToUpdate)
  };
  return (
    <>
      {!viewmore && (
        <div className="overflow-hidden break-words block m-12 w-80 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.date}</p>
          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={viewHandler}>ViewMore</button>
          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={deleteHandler}>Delete</button>
          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={updateHandler}>Update</button>
        </div>
      )}
      {viewmore && (
        <div className="overflow-hidden break-words  block m-12 w-80  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.date}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.location}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.capacity}</p>
          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={viewHandler}>Cancel</button>
          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={deleteHandler}>Delete</button>
          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={updateHandler}>Update</button>
        </div>
      )}
      </>
  );
};

export default EventItem;
