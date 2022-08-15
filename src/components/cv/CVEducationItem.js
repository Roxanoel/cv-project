import React, { Component } from "react";

export class CVEducationItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            id, 
            institution, 
            degree, 
            start, 
            end, 
            gpa} = this.props;

        return (
            <ul>  {/* Will likely be some kind of grid? + add labels later */}
                {/* Institution */}
                <li key={`${id}-institution`}>{institution}</li>
                {/* Degree */}
                <li key={`${id}-degree`}>{degree}</li>
                {/* start + end */}
                <li key={`${id}-dates`}>{`${start}-${(end === '') ? end : '...'}`}</li>
                {/* gpa */}
                <li key={`${id}-gpa`}>{gpa}</li>
            </ul>
        )
    };
}