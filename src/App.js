import React, { Component } from "react";
import "./App.css";
import "../src/dist/css/style.css"
import { observer } from "mobx-react";
import Header from "./Components/Header";
import Middle from "./Components/Middle";
import Bottom from "./Components/Bottom";


@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Middle />
        <Bottom />
      </div>
    );
  }
}

export default App;
