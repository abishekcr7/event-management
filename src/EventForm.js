import { useEffect, useState } from "react";

const EventForm = (props) => {
  const [edit, setEdit] = useState();
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescripton] = useState("");
  const [capacity, setCapacity] = useState("");
  const [updateState, setUpdateState] = useState("");
  const updateValues = () => {
    if (edit === false) {
      setEdit(true);
    }
    setEventName(props.updateItem.name);
    setCapacity(props.updateItem.capacity);
    setDate(props.updateItem.date);
    setLocation(props.updateItem.date);
    setDescripton(props.updateItem.description);
    setUpdateState(props.updateState);
  };

  useEffect(() => {
    updateValues();
  }, [props.updateItem]);

  const nameHandler = (e) => {
    setEventName(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const locationHandler = (e) => {
    setLocation(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescripton(e.target.value);
  };
  const capacityHandler = (e) => {
    setCapacity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const eventData = {
      name: eventName,
      date: date,
      location: location,
      description: description,
      capacity: capacity,
      id: Math.random().toString(),
    };
    props.onAddEvents(eventData);
    setEdit(false)
    setEventName("");
    setDate("");
    setLocation("");
    setDescripton("");
    setCapacity("");
  };
  const handleEdit = () => {
    setEdit(!edit);
    setUpdateState(false);
    setEventName("");
    setDate("");
    setLocation("");
    setDescripton("");
    setCapacity("");
  };
  const updateHandler = (e) => {
    e.preventDefault();
    const eventData = {
      name: eventName,
      date: date,
      location: location,
      description: description,
      capacity: capacity,
      id: Math.random().toString(),
    };
    setEdit(false)
    props.onUpdateEvent(eventData);
    setEventName("");
    setDate("");
    setLocation("");
    setDescripton("");
    setCapacity("");
    setUpdateState(false)
  };
  const fullSubmitHandler = (e) => {
    e.preventDefault();
    if (updateState) {
      updateHandler(e);
    } else {
      submitHandler(e);
    }
  };
  return (
    <>
      {!edit && (
        <div className="rounded-lg ... w-96 p-5 bg-purple-500 border border-indigo-600 ... flex justify-center">
          <button
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={handleEdit}
          >
            Add new Event
          </button>
        </div>
      )}
      {edit && (
        <div className="rounded-lg ... w-96 p-5 bg-purple-500 border border-indigo-600 ...">
          <form onSubmit={fullSubmitHandler} className="max-w-sm mx-auto">
            <div class="mb-1">
              <label
                for="ename"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Event Name:
              </label>
              <input
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="ename"
                value={eventName}
                type="text"
                onChange={nameHandler}
              />
            </div>
            <div class="mb-1">
              <label
                for="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                DateTime:
              </label>
              <input
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="date"
                value={date}
                onChange={dateHandler}
                type="text"
              />
            </div>
            <div class="mb-1">
              <label
                for="loc"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Location:
              </label>
              <input
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="loc"
                value={location}
                onChange={locationHandler}
                type="text"
              />
            </div>
            <div class="mb-1">
              <label
                for="des"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description:
              </label>
              <input
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="des"
                value={description}
                onChange={descriptionHandler}
                type="text"
              />
            </div>
            <div class="mb-1">
              <label
                for="cap"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Capacity:
              </label>
              <input
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="cap"
                value={capacity}
                onChange={capacityHandler}
                type="text"
              />
            </div>
            <div className="flex justify-center pt-5">
              {!updateState && (
                <button
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  type="submit"
                >
                  Submit
                </button>
              )}
              {updateState && (
                <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                  Update
                </button>
              )}

              {!updateState && (
                <button
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={handleEdit}
                >
                  close
                </button>
              )}
              {updateState && (
                <button
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={handleEdit}
                >
                  Cancel Update
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EventForm;
