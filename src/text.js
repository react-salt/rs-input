import React from 'react';
import InputBase from './input-base.js';

// input 这里需要实现比较多的type，考虑怎样实现会比较现实
export default class Text extends InputBase {
    Node = 'input'

    attributes = {
        type: this.props.password ? 'password' : 'text'
    }
}
