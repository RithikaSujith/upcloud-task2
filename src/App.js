import React, { Component } from "react";
import "./App.css";
import TabNav from "./components/Tabs";
// import ValidationForm from "./components/ValidationForm";
// import GetData from "./components/GetData";


class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <TabNav />        
       </div>      
    );
  }
}

export default App;