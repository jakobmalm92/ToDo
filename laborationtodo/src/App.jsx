import { useState } from 'react'

import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <>
      <Routes>
        <Route exact path='/' element={<WelcomePage />} />
        <Route exact path='/todo' element={<TodoPage />} /> 
      </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
