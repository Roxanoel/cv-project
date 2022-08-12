import React, { Component } from "react";
import { Education } from "./Education";
import { PersonalInfo } from "./PersonalInfo";
import { Experience } from "./Experience";

export class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        email: '',
        phone: '',
        education: [],
        experience: [],
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    // Update the value in state
    this.updateState(e.target.id, e.target.value);
  }

  handleEducationChange(educationItems) {
    this.setState({
        education: educationItems,
    });
  }

  handleExperienceChange(experienceItems) {
    this.setState({
      experience: experienceItems,
    });
  }

  updateState(propertyName, value) {
    this.setState({
        [propertyName]: value,
    })
  }

  handleOnSubmit(e) {
    e.preventDefault();
    /* For now */ 
    console.log('Form submitted');
  }

  render() {
    console.log(this.state);
    return (
        <form onSubmit={this.handleOnSubmit}>
            <PersonalInfo handleOnChange={this.handleOnChange} />
            <Education handleEducationChange={this.handleEducationChange} />
            <Experience handleExperienceChange={this.handleExperienceChange} />
            <button>Submit</button> 
        </form>
    )
  }
}