import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  // const [firstName,setFirstName]=useState('');
  // const [lastName,setLastName]=useState('');

  // console.log(firstName);
  // console.log(lastName);
  
  
  // function changeFHandler(event)
  // {
  //   // console.log('First Name');
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
    
  // }
  // function changeLHandler(event)
  // {
  //   // console.log('Last Name');
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData,setFormData]=useState( {firstName: "",lastName: "",email: "",comments: "",check: true,round:"",favCar:""} );
  
  // console.log(formData);
  
  function changeHandler(event)
  {
    const {name,value,checked,type}=event.target
    setFormData( (prevFormData) => {
      return {
       ...prevFormData,
        // [event.target.name]: event.target.value,
        [name]: type==="checkbox" ? checked : value, // For considering checkboxes also

      }
      });
  }
  function submitHandler(event)
  {
    event.preventDefault(); // By default all form data get erased on submit, It prevents it.
    console.log(formData); //Final Data after submit
    
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        
        <br/>
        <input type='text' placeholder='First Name' onChange={changeHandler} name="firstName" value={formData.firstName}></input>

        <br/> <br/>
        <input type='text' placeholder='Last Name' onChange={changeHandler} name="lastName" value={formData.lastName}></input>
        
        <br/> <br/>
        <input type='email' placeholder='abc@gmail.com' onChange={changeHandler} name="email" value={formData.email}></input>
        
        <br/><br/>
        <textarea placeholder='Enter Comments' onChange={changeHandler} 
        name='comments' value={formData.comments}/>

        <br/><br/>
        <input type='checkbox' onChange={changeHandler} name='check' checked={formData.check} id='check'></input>
        <label htmlFor='check'>Am I visible ?</label>

        <br/><br/>
        <fieldset>
          <legend>Mode:</legend>
          <br/><br/>
          <input type='radio' onChange={changeHandler} name="round" value="Online" checked={formData.round === "Online"} id="Online"></input>
          <label htmlFor='Online'>Online Mode</label>

          <br/><br/>
          <input type='radio' onChange={changeHandler} name="round" value="Offline" checked={formData.round==="Offline"} id="Offline"></input>
          <label htmlFor='Offline'>Offline Mode</label>
        </fieldset>

        <br/><br/>
        <label htmlFor='favCar'>Your Favourite Car </label>
        <select onChange={changeHandler} name='favCar' id='favCar' value={formData.favCar}>
          <option value="default">--Select--</option>
          <option value="Scorpio">Scorpio</option>
          <option value="Alto">Alto</option>
          <option value="BMW">BMW</option>
          <option value="OOOO">Audi</option>
          <option value="Fortuner">Fortuner</option>
        </select>

        {/* <input type='Submit'></input> */}
        <br/><br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
