import { Route, Routes } from 'react-router-dom';
import './App.css';
import "./Assets/CSS/Landing.css"
import Home from './Pages/Home';

function App() 
{
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
