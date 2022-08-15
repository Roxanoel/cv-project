import React, { Component } from "react";
import { CVEducationItem } from "./CVEducationItem";

export class CVEducation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {education} = this.props;

        return(
              <ol>
                {education.map(item => {
                    return <li key={item.id}>
                        <CVEducationItem id={item.id} institution={item.institution}
                        degree={item.degree} start={item.start} end={item.end} gpa={item.gpa} />
                    </li>
                })}
              </ol>
        )
    };
}