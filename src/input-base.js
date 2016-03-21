import React, { Component } from 'react';

export default class Input extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        let Node = this.Node ? this.Node : 'input';

        return (
            <Node
                {...this.props}
                className="form-control"
                onChange={this.handleChange}
                value={this.props.value}
            />
        );
    }
}
