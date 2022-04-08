import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./componentes/Home.jsx"
import Hoteles from "./componentes/Hoteles"
import Paquetes from "./componentes/Paquetes"
import Nav from "./componentes/Nav"
import React,{Component} from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoteles: [],
      paquetes: [],
    };
  }
  async request(){
    await axios("https://pruebagcd.herokuapp.com/paquetes")
    .then(res => 
      this.setState({
        paquetes: res.data
      }))
    }
componentDidMount() {
  this.request();
}
  
  render(){
    console.log(this.state.paquetes)
  return (
    <div className="App">
      <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} > </Route>
          <Route path="/hoteles" element={<Hoteles />} > </Route>
          <Route path="/paquetes" element={<Paquetes data={this.state.paquetes}/>} > </Route>
        </Routes> 
      </Router>
  
    </div>
  );
}
}


export default App;
