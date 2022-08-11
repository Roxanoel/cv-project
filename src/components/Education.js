import React, { Component } from "react";
import { EducationItem } from "./EducationItem";
import uniqid from "uniqid";

export class Education extends Component {
  constructor(props) {
    super(props);

    const defaultEducation = {
        id: uniqid,
        institution: '',
        degree: '',
        start: '', 
        end: '',
    };

    this.state = {
        educationItems: [defaultEducation],
        currentItem: {
            id: '',
            institution: '',
            degree: '',
            start: '',
            end: '',
        }
    }

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    // Generate unique id + store educationItem info
    this.setState({

    });
  }

  render() {
    const { handleOnChange } = this.props;
    const { educationItems } = this.state;
    return (
        <fieldset>
          <h3>Education</h3>
          <ul>
            {educationItems.map((item) => {
              return <li key={item.id}><EducationItem handleOnChange={this.handleOnChange}/></li>
            })}
          </ul>
          <button type="button">Add entry</button>
        </fieldset>
    )
  }
}