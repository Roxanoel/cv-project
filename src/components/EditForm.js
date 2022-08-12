import React, { Component } from "react";
import { Education } from "./Education";
import { PersonalInfo } from "./PersonalInfo";

export class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        email: '',
        phone: '',
        education: [],
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleOnChange(e) {
    // Update the value in state
    this.updateState(e.target.id, e.target.value);
  }

  handleEducationChange(educationItems) {
    this.setState({
        education: educationItems,
    })
  }

  updateState(propertyName, value) {
    this.setState({
        [propertyName]: value,
    })
  }

  render() {
    console.log(this.state);
    return (
        <form>
            {/* sub-forms will be here */}
            <PersonalInfo handleOnChange={this.handleOnChange} />
            <Education handleEducationChange={this.handleEducationChange} />
            <button>Submit</button> 
        </form>
    )
  }
}