import React, { Component } from "react";

export class CV extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;

        return (
        <div>
            <h1>{data.name}</h1>
        </div>
        );
    }
}