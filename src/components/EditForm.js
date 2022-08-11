import React, { Component } from "react";
import { PersonalInfo } from "./PersonalInfo";

export class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
        <form>
            {/* sub-forms will be here */}
            <button>Submit</button> 
        </form>
    )
  }
}