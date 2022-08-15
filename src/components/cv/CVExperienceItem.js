import React, { Component } from "react";

export class CVExperienceItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            id, 
            title, 
            employer, 
            start, 
            end, 
            description} = this.props;

        return (
            <ul>  {/* Will likely be some kind of grid? + add labels later */}
                {/* Institution */}
                <li key={`${id}-title`}>{title}</li>
                {/* Degree */}
                <li key={`${id}-employer`}>{employer}</li>
                {/* start + end */}
                <li key={`${id}-dates`}>{`${start}-${(end !== '') ? end : '...'}`}</li>
                {/* gpa */}
                <li key={`${id}-descr`}>{description}</li>
            </ul>
        )
    };
}