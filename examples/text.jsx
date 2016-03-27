import React from 'react';
import Text from '../src/text.js';
import Textarea from '../src/textarea.js';
import Radio from '../src/radio.js';
import Checkbox from '../src/checkbox.js';

export default class Simple extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
    }

    state = {
        name: ''
    }

    onChangeName(value) {
        this.setState({
            name: value
        });
    }

    render() {
        return (
            <form>
                <div>
                    <label>姓名</label>
                    <Text
                        onChange={this.onChangeName}
                        value={this.state.name}
                    />
                    <Text
                        onChange={this.onChangeName}
                        value={this.state.name}
                        mySize='small'
                    />
                    <Text
                        onChange={this.onChangeName}
                        value={this.state.name}
                        mySize='large'
                    />
                </div>
                <div>
                    <label>描述姓名</label>
                    <Textarea
                        onChange={this.onChangeName}
                        value={this.state.name}
                    />
                </div>
            </form>
        );
    }
}
