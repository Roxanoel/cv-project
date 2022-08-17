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
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);

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

  handleSubmitForm(e) {
    e.preventDefault();
    /* For now */ 
    this.props.updateAppState(this.state);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmitForm}>
            <PersonalInfo handleOnChange={this.handleOnChange} />
            <Education handleEducationChange={this.handleEducationChange} />
            <Experience handleExperienceChange={this.handleExperienceChange} />
            <div className="btn-container">
              <button>Submit</button> 
            </div>
        </form>
    )
  }
}