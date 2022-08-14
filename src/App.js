import React, { Component } from "react";
import { EditForm } from "./components/input/EditForm";
import { CV } from "./components/cv/CV";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      education: [],
      experience: [],
    }
    
    this.updateAppState = this.updateAppState.bind(this);
  }

  updateAppState(formData) {
    this.setState({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      education: formData.education,
      experience: formData.experience,
    });
  }

  
  render() {

    return (
      <div>
        <EditForm updateAppState={this.updateAppState} />
        <CV />
      </div>
    );
  }
}

export default App;
