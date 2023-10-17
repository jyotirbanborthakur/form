import React from "react";
import { useState } from "react";

const Form = () => {
  let obj = {};
const [isLoading, setIsLoading] = useState(false)
const [isDataPosted, setIsDataPosted] = useState(false)
const [isLastPage, setIsLastPage] = useState(false)

  async function postJSON(obj) {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj), 
      });
     
      const result = await response.json();
      
      return result
    } catch (error) {
      throw error
    }
  }
  

  
  const onClickHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const val = e.target.elements;
  
    for (let i = 0; i < val.length; i++) {
      let key = val[i].name;
      let value = val[i].value;
      obj[key] = value;
    }
    try {
      const result =await postJSON(obj)
      console.log(result)
      setIsLoading(false)
      setIsDataPosted(true)
    } catch (error) {
      console.log(error)
    }
  };
const formFunc=()=>
{
  if(setIsDataPosted)
  {
    setIsDataPosted(false)
  }
}

  return (
    <div> 
      <p>basic info</p>

      {isLoading?<p>loading</p>:isLoading===false&&isDataPosted?<p>
        lastpage 
        <button onClick={formFunc}>cancel</button>
      </p>:
      <form onSubmit={onClickHandler}>
       
        FirstName<input type="textbox" name="firstName"></input>
        LastName<input type="textbox" name="lastName"></input>
        <p>
          Email<input type="textbox" name="email"></input>
        </p>
        Doctor
        <p>
          <select name="doctor">
            <option value="Dr Aloo">Dr Aloo</option>
            <option value="Dr Tamatar">Dr Tamatar</option>
            <option value="Dr Piyaz">Dr piyaz</option>
            <option value="Dr Dhaniya">Dr Dhaniya</option>
          </select>
        </p>
        Where
        <p>
        
        <input type="radio" value="gmeet" name="meet"/> gmeet
        <input type="radio" value="phone"name="meet"/> phone
    
        </p>
        When
        <p>
          <input type="date" name="time" id="date" />
        </p>
        <button type="submit">Confirm Booking</button>
      </form>}
    </div>
  );
};

export default Form;
