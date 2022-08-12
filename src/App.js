import React, { Component } from "react";
import { EditForm } from "./components/input/EditForm";
import { CV } from "./components/cv/CV";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  
  render() {
    return (
      <div>
        <EditForm />
        <CV />
      </div>
    );
  }
}

export default App;
