import logo from './logo.svg';
import './App.css';
import EventForm from './EventForm';
import { useState } from 'react';
import EventList from './Events/Eventlist';

const Dummy_Events=[{name:'event',date:'wed',location:'delhi',description:'test event',capacity:'9',id:'1'},{name:'event',date:'wed',location:'delhi',description:'test event',capacity:'9',id:'2'}]
function App() {
  const [eventData,setEventData]=useState(Dummy_Events)
  const [updateItem,setUpdateItem]=useState({name:'',date:'',location:'',description:'',capacity:''})
  const addEventHandler=((event)=>{
    setEventData((prevEvent)=>{
      return [...prevEvent,event]
    })
  })

  const deleteHandler=(id)=>{
   var r=window.confirm('Confirm deletion of selected item')
   if(r===true){
    const newData = eventData.filter((event)=>{
      return event.id !== id
     })
     setEventData(newData)
   } 
  }
  const updateHandler=(item)=>{
    setUpdateItem(item)
    console.log(updateItem,'updateItem')
  }
  const fillItem = ()=>{

  }
  return (
    <div className="App">
      <EventForm updateItem={updateItem} onAddEvents={addEventHandler}/>
      <EventList onUpdate={updateHandler} onDelete={deleteHandler} items={eventData} />
    </div>
  );
}

export default App;
