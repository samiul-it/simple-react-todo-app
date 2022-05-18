import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <h5>Welcome to TODO APP</h5>
      <Home></Home>
      <ToastContainer />
    </div>
  );
}

export default App;
