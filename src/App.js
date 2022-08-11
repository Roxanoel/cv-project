import React, { Component } from "react";
import { EditForm } from "./components/EditForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  
  render() {
    return (
      <div>
        <EditForm></EditForm>
      </div>
    );
  }
}

export default App;
