import React, { Component } from "react";
import { EditForm } from "./components/input/EditForm";
import { CV } from "./components/cv/CV";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(e) {
    e.preventDefault();
    /* For now */ 
    console.log('Form submitted');
  }
  
  render() {
    return (
      <div>
        <EditForm handleOnSubmit={this.handleSubmitForm} />
        <CV />
      </div>
    );
  }
}

export default App;
