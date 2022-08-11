import React, { Component } from "react";
import { EducationItem } from "./EducationItem";
import uniqid from "uniqid";

export class Education extends Component {
  constructor(props) {
    super(props);

    const defaultEducation = {
        id: uniqid(),
        institution: '',
        degree: '',
        start: '', 
        end: '',
    };

    this.state = {
        educationItems: [defaultEducation],
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
  }

  handleOnChange(e) {
    // use map to change only relevant values
    const newState = this.state.educationItems.map(item => {
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
        educationItems: newState,
    });
  }

  addEntry() {
    const blankEntry = {
        id: uniqid(),
        institution: '',
        degree: '',
        start: '',
        end: '',
    }
    this.setState({
        educationItems: [...this.state.educationItems, blankEntry],
    });
  }

  removeEntry(e) {
    const newState = this.state.educationItems.filter(item => item.id === e.target.dataset.key);
   
    this.setState({
        educationItems: newState,
    })
  }

  render() {
    const { educationItems } = this.state;

    return (
        <fieldset>
          <h3>Education</h3>
          <ul>
            {educationItems.map((item) => {
              return <li key={item.id}><EducationItem id={item.id} handleOnChange={this.handleOnChange} removeEntry={this.removeEntry}/></li>
            })}
          </ul>
          <button type="button" onClick={this.addEntry}>Add entry</button>
        </fieldset>
    )
  }
}