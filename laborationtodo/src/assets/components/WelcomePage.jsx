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
      
    </div>
  )
}

export default WelcomePage
