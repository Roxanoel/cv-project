import React, { Component } from "react";
import { ExperienceItem } from "./ExperienceItem";
import uniqid from "uniqid";

export class Experience extends Component {
  constructor(props) {
    super(props);

    const defaultExperience = {
        id: uniqid(),
        title: '',
        employer: '',
        start: '', 
        end: '',
        description: '',
    };

    this.state = {
        experienceItems: [defaultExperience],
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
  }

  handleOnChange(e) {
    // use map to change only relevant values
    const newState = this.state.experienceItems.map(item => {
            if(item.id === e.target.dataset.key) {
                // Modify only the item whose id matches the key of the element triggering onChange
                const itemCopy = item;
                itemCopy[e.target.name] = e.target.value;
                return itemCopy;
            }
            
            return item;
        });
    // Update array to newly updated array
    this.setState({
        experienceItems: newState,
    });
    // Trigger event in parent component
    this.props.handleExperienceChange(this.state.experienceItems);
  }

  addEntry() {
    const blankEntry = {
        id: uniqid(),
        institution: '',
        degree: '',
        start: '',
        end: '',
        gpa: '',
    }
    this.setState({
        experienceItems: [...this.state.experienceItems, blankEntry],
    });
    // Trigger event in parent component
    this.props.handleExperienceChange(this.state.experienceItems);
  }

  removeEntry(e) {
    const newState = this.state.experienceItems.filter(item => item.id === e.target.dataset.key);
   
    this.setState({
        experienceItems: newState,
    })

    // Trigger event in parent component
    this.props.handleExperienceChange(this.state.experienceItems);
  }

  render() {
    const { experienceItems } = this.state;

    return (
        <fieldset className="list-section">
          <h3>Experience</h3>
          <ul>
            {experienceItems.map((item) => {
              return <li key={item.id}><ExperienceItem id={item.id} handleOnChange={this.handleOnChange} removeEntry={this.removeEntry}/></li>
            })}
          </ul>
          <button type="button" onClick={this.addEntry}>Add entry</button>
        </fieldset>
    )
  }
}