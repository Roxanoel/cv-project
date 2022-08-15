import React, { Component } from "react";
import { CVExperience } from "./CVExperience";
import { CVEducation } from "./CVEducation";

export class CV extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;

        return (
        <div>
            <div>
                <h2>{data.name}</h2>
                <span>{data.email}</span>  {/* Add label later */}
                <span>{data.phone}</span>  {/* Add label later */}
            </div>
            <div>
                <h3>Education</h3>
                <CVEducation education={data.education} />
            </div>
            <div>
                <h3>Experience</h3>
                <CVExperience experience={data.experience} />
            </div>
        </div>
        );
    }
}