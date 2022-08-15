import React, { Component } from "react";
import { CVListSection } from "./CVListSection";

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
                {/* Loop over education items */}
                <ul>
                    {data.education.forEach(item => {
                        return <li>

                        </li>
                    })}
                </ul>
            </div>
            <div>
                <h3>Experience</h3>
                {/* Loop over experience items */}
                <ul>
                    
                </ul>
            </div>
        </div>
        );
    }
}