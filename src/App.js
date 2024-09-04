import logo from "./logo.svg";
import "./App.css";
import EventForm from "./EventForm";
import { useEffect, useState } from "react";
import EventList from "./Events/Eventlist";

function App() {
  const [eventData, setEventData] = useState([]);
  const [updateItem, setUpdateItem] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
    capacity: "",
  });
  const [updateState, setUpdateState] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const addEventHandler = (event) => {
    console.log(event)
    const reqOpt = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    };
    fetch(
      "https://eventmanagement-c31e7-default-rtdb.firebaseio.com/event.json",
      reqOpt
    )
      .then((res) => {
        console.log('success')
        return res.json();
      })
      .then((data) => {
        const key = Object.keys(data);
        let key1 = data[key[0]];
        fetch(
          `https://eventmanagement-c31e7-default-rtdb.firebaseio.com/event/${key1}.json`
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            const obj = {};
            obj[key1] = event;
            setEventData((prevData) => {
              return [...prevData, obj];
            });
          });
      });
  };

  const deleteHandler = (id) => {
    var r = window.confirm("Confirm deletion of selected item");
    if (r === true) {
      const newData = eventData.filter((event) => {
        return id !== Object.keys(event)[0];
      });
      setEventData(newData);
      fetch(
        `https://eventmanagement-c31e7-default-rtdb.firebaseio.com/event/${id}.json`,
        { method: "DELETE" }
      );
    }
  };
  const updateHandler = (item, id, updateState) => {
    setUpdateItem(item);
    setUpdateState(updateState);
    setUpdateId(id);
  };
  const updateEventHandler = (event) => {
    const reqOpt = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    };
    fetch(
      `https://eventmanagement-c31e7-default-rtdb.firebaseio.com/event/${updateId}.json`,
      reqOpt
    ).then((res) => {
      return res.json();
    }).then((data)=>{
      console.log(data,'data')
      fetch("https://eventmanagement-c31e7-default-rtdb.firebaseio.com/event.json").then((res)=>{
        return res.json()
      }).then((data)=>{
        console.log(data)
        let event = []
        for (let key in data) {
          let obj = {};
          obj[key] = data[key];
          event.push(obj);
        }
        setEventData(event)
      })
    })
  };
  useEffect(() => {
    fetch(
      "https://eventmanagement-c31e7-default-rtdb.firebaseio.com/event.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let event = [];
        for (let key in data) {
          let obj = {};
          obj[key] = data[key];
          event.push(obj);
        }
        setEventData(event);
      });
  }, []);
  return (
    <div>
      <h1 className="text-5xl text-purple-600 flex justify-center">
        Event Management
      </h1>
      <br></br>
      <h2 className="text-3xl ml-12 text-purple-600 flex justify-center">
        Add Event
      </h2>
      <br></br>
      <div className="flex justify-center">
        <EventForm
          updateState={updateState}
          updateItem={updateItem}
          onUpdateEvent={updateEventHandler}
          onAddEvents={addEventHandler}
        />
      </div>
      <br></br>
      <h4 className="text-5xl ml-12 text-purple-600">Event List</h4>
      <EventList
        onUpdate={updateHandler}
        onDelete={deleteHandler}
        items={eventData}
      />
    </div>
  );
}

export default App;
