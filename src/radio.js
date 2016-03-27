import React, { Component } from 'react';
import { createFragment } from 'rs-util';

export default class Radio extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    renderR(value, disabled) {
        return <input
                    type="radio"
                    value={value}
                    onChange={this.handleChange}
                    checked={this.props.value === value}
                    disabled={disabled ? true : false}
                />;
    }


    renderRadio(value, name, disabled) {
        let dis = this.props.disabled || disabled;

        if (this.props.inline) {
            return (
                <label className={`radio-inline ${dis ? 'disabled' : ''}`}>
                    {this.renderR(value, dis)}
                    {name}
                </label>
            );
        } else {
            return (
                <div className={`radio ${dis ? 'disabled' : ''}`}>
                    <label>
                        {this.renderR(value, dis)}
                        {name}
                    </label>
                </div>
            );
        }
    }

    render() {
        let { options } = this.props;
        let tmp = {};

        if (Array.isArray(options)) {
            for (let value of options) {
                tmp['rs-radio-' + value.value] = this.renderRadio(value.value, value.name, value.disabled);
            }
        } else {
            for (let value of Object.keys(options)) {
                if (typeof options.value !== 'object') {
                    tmp['rs-radio-' + value.toString()] = this.renderRadio(value, options.value, false);
                } else {
                    tmp['rs-radio-' + value.toString()] = this.renderRadio(value, options.value.name, options.name.disabled);
                }
            }
        }

        return <div>{ createFragment(tmp) }</div>;
    }
}
