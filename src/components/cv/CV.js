import React, { Component } from "react";

export class CV extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;

        return (
        <div>
            <div>
                <h1>{data.name}</h1>
                <span>{data.email}</span>  {/* Add label later */}
                <span>{data.phone}</span>  {/* Add label later */}
            </div>
            <div>
                <h2>Education</h2>
                {/* Loop over education items */}
            </div>
            <div>
                <h2>Experience</h2>
                {/* Loop over experience items */}
            </div>
        </div>
        );
    }
}