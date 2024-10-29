import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import View from './Pages/View';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";

export default function App() {
  return (
    <>
     <Header/>
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add/>} />
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/view/:id" element={<View/>}/>
            </Routes>
          </div>
</Router>
    </>
   
);

  }
