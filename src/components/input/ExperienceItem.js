import React, { Component } from "react";

export class ExperienceItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleOnChange, id, removeEntry } = this.props;

    return (
        <fieldset>
          <label htmlFor="title">Title: </label>
          <input id="title" name="title" onChange={handleOnChange} data-key={id}></input>
          <label htmlFor="employer">Employer: </label>
          <input id="employer" name="employer" onChange={handleOnChange} data-key={id}></input>
          <label htmlFor="start">Start: </label>
          <input type="month" name="start" id="start" onChange={handleOnChange} data-key={id}></input>
          <label htmlFor="end">End: </label>
          <input type="month" name="end" id="end" onChange={handleOnChange} data-key={id}></input>
          <label htmlFor="description">Description: </label>
          <textarea name="description" id="description" onChange={handleOnChange} data-key={id} />
          <button type="button" onClick={removeEntry} data-key={id}>Remove</button>
        </fieldset>
    )
  }
}