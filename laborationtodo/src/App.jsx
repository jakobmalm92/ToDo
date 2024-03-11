import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './assets/components/WelcomePage';
import TodoPage from './assets/components/TodoPage';
import './App.css';

 

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

