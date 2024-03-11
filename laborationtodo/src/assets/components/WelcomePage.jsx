import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function WelcomePage() {

const [name, setName] = useState("");
const navigate = useNavigate(); // För att kunna navigera till TodoPage

const handlestart = () => {
    navigate("/todo", {state: {name}}) //Navigerar med namnet till TodoPage
};



  return (
    <div>
      <h1>Todo Lista</h1>
      <button type='submit'>Starta</button>
    </div>
  )
}

export default WelcomePage
