import React, { Component } from 'react';

export default class Input extends Component {

    static propTypes = {
        password: React.PropTypes.bool
    }

    static defaultProps = {
        password: false
    }

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
                {...this.attributes}
                className="form-control"
                onChange={this.handleChange}
                value={this.props.value}
            />
        );
    }
}
