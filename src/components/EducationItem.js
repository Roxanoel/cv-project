import React, { Component } from "react";

export class EducationItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleOnChange, id } = this.props;

    return (
        <fieldset>
          <label htmlFor="institution">Institution: </label>
          <input id="institution" name="institution" onChange={handleOnChange} data-key={id}></input>
          <label htmlFor="degree">Degree: </label>
          <input id="degree" name="degree" onChange={handleOnChange} data-key={id}></input>
          <label htmlFor="start">Start: </label>
          <input type="month" name="start" id="start" onChange={handleOnChange} data-key={id}></input>
          <label htmlFor="end">End: </label>
          <input type="month" name="end" id="end" onChange={handleOnChange} data-key={id}></input>
        </fieldset>
    )
  }
}