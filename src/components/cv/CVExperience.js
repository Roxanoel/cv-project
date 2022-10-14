import React, { Component } from "react";
import { CVExperienceItem } from "./CVExperienceItem";

export class CVExperience extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {experience} = this.props;

        // Remove entries which have no content 
        const filteredExperience = experience.filter(item => {
            for (const property in item) {
                if (item[property] === '') return false; 
            }
            return true; 
        })

        return(
              <ol>
                {filteredExperience.map(item => {
                    return <li key={item.id}>
                        <CVExperienceItem id={item.id} title={item.title} employer={item.employer} 
                        start={item.start} end={item.end} description={item.description} />
                    </li>
                })}
              </ol>
        )
    };
}