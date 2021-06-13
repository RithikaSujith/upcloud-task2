import React, { Component } from "react";
import "./App.css";
import ValidationForm from "./components/ValidationForm";
import GetData from "./components/GetData";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <ValidationForm />
        <GetData/>        
      </div>
    );
  }
}

export default App;