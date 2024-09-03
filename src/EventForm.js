import { useEffect, useState } from "react";

const EventForm = (props) => {
    console.log(props.updateItem)
    const [eventName,setEventName] = useState(props.updateItem.name)
    const [date,setDate] = useState(props.updateItem.date)
    const [location,setLocation] = useState(props.updateItem.location)
    const [description,setDescripton] = useState(props.updateItem.description)
    const [capacity,setCapacity] = useState(props.updateItem.capacity)
    
    const updateValues=()=>{
        setEventName(props.updateItem.name)
        setCapacity(props.updateItem.capacity)
        setDate(props.updateItem.date)
        setLocation(props.updateItem.date)
        setDescripton(props.updateItem.description)
    }

    useEffect(()=>{
        updateValues()
    },[props.updateItem])
    
    
    const nameHandler = (e)=>{
        setEventName(e.target.value)
    }
    const dateHandler = (e)=>{
        setDate(e.target.value)
    }
    const locationHandler = (e)=>{
        setLocation(e.target.value)
    }
    const descriptionHandler= (e)=>{
        setDescripton(e.target.value)
    }
    const capacityHandler= (e)=>{
        setCapacity(e.target.value)
    }
    
    const submitHandler = (e)=>{
        e.preventDefault()
        const eventData= {
            name:eventName,
            date:date,
            location:location,
            description:description,
            capacity:capacity,
            id:Math.random().toString()
          }
        props.onAddEvents(eventData)
    }
  return (<div>
    <form onSubmit={submitHandler}>
        <label for='ename'>Event Name:</label>
        <input id='ename' value={eventName} type="text" onChange={nameHandler}/><br></br>
        <label for='date'>DateTime:</label>
        <input id='date' value={date} onChange={dateHandler} type="text" /><br></br>
        <label for='loc'>Location:</label>
        <input id='loc' value={location} onChange={locationHandler} type="text"  /><br></br>
        <label for='des'>Description:</label>
        <input id='des' value={description} onChange={descriptionHandler}  type="text" /><br></br>
        <label for='cap'>Capacity:</label>
        <input id='cap' value={capacity} onChange={capacityHandler}  type="text" /><br></br>
        <button type="submit">Submit</button>
    </form>
  </div>);
};

export default EventForm;
