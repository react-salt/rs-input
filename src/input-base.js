import React, { Component } from 'react';

const SIZES = {
    'large': 'input-lg',
    'normal': '',
    'small': 'input-sm'
}
export default class Input extends Component {

    static propTypes = {
        mySize: React.PropTypes.string
    }

    static defaultProps = {
        mySize: 'normal'
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
                className={`${this.props.className ? this.props.className : ''} form-control ${this.props.mySize !== '' ? SIZES[this.props.mySize] : ''}`}
                onChange={this.handleChange}
                value={this.props.value}
            />
        );
    }
}
