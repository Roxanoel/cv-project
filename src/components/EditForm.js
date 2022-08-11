import React, { Component } from "react";
import { PersonalInfo } from "./PersonalInfo";

export class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        email: '',
        phone: '',
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleOnChange(e) {
    // Update the value in state
    this.updateState(e.target.id, e.target.value);
  }

  updateState(propertyName, value) {
    console.log(propertyName + ': ' + value);
  }

  render() {
    return (
        <form>
            {/* sub-forms will be here */}
            <PersonalInfo handleOnChange={this.handleOnChange} />
            <button>Submit</button> 
        </form>
    )
  }
}