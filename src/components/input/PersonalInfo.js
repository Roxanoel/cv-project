import React, { Component } from "react";

export class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleOnChange } = this.props;
    return (
        <fieldset className="personal-info">
          <h3>Personal Information</h3>
          <label htmlFor="name">Name: </label>
          <input id="name" name="name" onChange={handleOnChange}></input>
          <label htmlFor="email">Email: </label>
          <input id="email" name="email" type="email" onChange={handleOnChange}></input>
          <label htmlFor="phone-">Phone number: </label>
          <input id="phone" name="phone" onChange={handleOnChange}></input>
        </fieldset>
    )
  }
}