import React, { Component } from "react";
import { CVExperienceItem } from "./CVExperienceItem";

export class CVExperience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {experience} = this.props;

        return(
              <ol>
                {experience.map(item => {
                    return <li key={item.id}>
                        <CVExperienceItem id={item.id} title={item.title} employer={item.employer} 
                        start={item.start} end={item.end} description={item.description} />
                    </li>
                })}
              </ol>
        )
    };
}