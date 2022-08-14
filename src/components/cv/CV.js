import React, { Component } from "react";

export class CV extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name } = this.props;

        return (
        <div>
            <h1>{name}</h1>
        </div>
        );
    }
}