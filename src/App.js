import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import"react-toastify/ReactToastify.min.css";
import './App.css';
import BootstrapEx from './components/BootstrapEx';


import Header from "./components/HelloLogic/Header";
import Home from "./components/HelloLogic/Home";
import About from "./components/HelloLogic/About";
import Footer from "./components/HelloLogic/Footer";
import Routing from "./components/HelloLogic/Routing";
import BasicRead from "./HOOKS/Crudoperations/BasicRead";
import AddBatches from "./components/HelloLogic/Admin/AddBatches";
import BatchesData from "./components/HelloLogic/Admin/BatchesData";
import Batches from "./components/HelloLogic/Batches";
import SendEnquiry from "./components/HelloLogic/SendEnquiry";
import NoPage from "./components/HelloLogic/NoPage";
import CourseDetails from "./components/HelloLogic/Admin/CourseDetails";
import { createContext, useState } from "react";
export const loginStatus = createContext();



function App() {
  const dev = "hellosona";
  const [login,setLogin] = useState(false);
  return (
    <div className="App">
    <loginStatus.Provider value={[login,setLogin]}>
    <Header/>
    <Routing/>
    <Footer/>
    </loginStatus.Provider>
    </div>
  );
}

export default App;
