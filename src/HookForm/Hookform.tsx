import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import React from "react";

const EventForm = (props) => {
  const [edit, setEdit] = useState(Boolean);
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescripton] = useState("");
  const [capacity, setCapacity] = useState("");
  const [updateState, setUpdateState] = useState(true);
  const form = useForm<formValues>({
    defaultValues: {
      name: "",
      date: new Date(),
      location: "",
      description: "",
      capacity: 0,
    },
  });

  const { register, control, handleSubmit, formState, getValues, setValue } =
    form;
  const { errors } = formState;

  const updateValues = () => {
    // if (edit === false) {
    //   setEdit(true);
    // }
    setEdit(true)
    setValue("name", props.updateItem.name);
    setValue("date", props.updateItem.date);
    setValue("location", props.updateItem.location);
    setValue("description", props.updateItem.description);
    setValue("capacity", props.updateItem.capacity);
    setUpdateState(props.updateState);
  };

  useEffect(() => {
    updateValues();
  }, [props.updateItem]);

  const handleEdit = () => {
    setEdit(!edit);
    setUpdateState(false);
    setValue("name", "");
    setValue("date", new Date());
    setValue("location", "");
    setValue("description", "");
    setValue("capacity", 0);
  };
  type formValues = {
    name: String;
    date: Date;
    location: String;
    description: String;
    capacity: number;
  };
  const updateHandler = () => {
    console.log("getValues", getValues());
    props.onUpdateEvent(getValues());
    setValue("name", "");
    setValue("date", new Date());
    setValue("location", "");
    setValue("description", "");
    setValue("capacity", 0);
    setUpdateState(false)
  };
  const fullSubmitHandler = (data: formValues) => {
    console.log("form submitted", data);
    props.onAddEvents(data);
    setValue("name", "");
    setValue("date", new Date());
    setValue("location", "");
    setValue("description", "");
    setValue("capacity", 0);
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
          {updateState && <p className="text-black-500">*Update the values</p>}
          <form
            onSubmit={handleSubmit(fullSubmitHandler)}
            className="max-w-sm mx-auto"
            noValidate
          >
            <div className="mb-1">
              <label
                htmlFor="ename"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Event Name:
              </label>
              <input
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="ename"
                type="text"
                // value={eventName}
                // onChange={nameHandler}
                {...register("name", { required: "*Event name is required" })}
              />
              <p className="text-red-900">{errors.name?.message}</p>
            </div>
            <div className="mb-1">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                DateTime:
              </label>
              <input
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="date"
                // value={date}
                // onChange={dateHandler}
                type="date"
                {...register("date", {
                  required: "*Date is required",
                })}
              />
              <p className="text-red-900">{errors.date?.message}</p>
            </div>
            <div className="mb-1">
              <label
                htmlFor="loc"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Location:
              </label>
              <input
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="loc"
                // value={location}
                // onChange={locationHandler}
                type="text"
                {...register("location", { required: "*Location is required" })}
              />
              <p className="text-red-900">{errors.location?.message}</p>
            </div>
            <div className="mb-1">
              <label
                htmlFor="des"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description:
              </label>
              <input
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="des"
                // value={description}
                // onChange={descriptionHandler}
                type="text"
                {...register("description", {
                  required: "*Description is required",
                })}
              />
              <p className="text-red-900">{errors.description?.message}</p>
            </div>
            <div className="mb-1">
              <label
                htmlFor="cap"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Capacity:
              </label>
              <input
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="cap"
                // value={capacity}
                // onChange={capacityHandler}
                type="number"
                {...register("capacity", {
                  valueAsNumber: true,
                  required: "*Capacity is required",
                })}
              />
              <p className="text-red-900">{errors.capacity?.message}</p>
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
                <button
                  type="button"
                  onClick={updateHandler}
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
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
          <DevTool control={control} />
        </div>
      )}
    </>
  );
};

export default EventForm;
