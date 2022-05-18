import './App.css';
import Home from './Components/Home/Home';
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h5>Welcome to TODO APP</h5>
      <Home></Home>
      <ToastContainer />

      <Routes>
        {/* <Route path='/addTask' element={<AddTask></AddTask>}></Route> */}

      </Routes>
    </div>
  );
}

export default App;
