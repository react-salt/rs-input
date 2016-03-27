import React from 'react';
import Text from '../src/text.js';
import Textarea from '../src/textarea.js';
import Radio from '../src/radio.js';
import Checkbox from '../src/checkbox.js';

export default class Simple extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeSchool = this.onChangeSchool.bind(this);
    }

    state = {
        name: '',
        age: '2',
        school: []
    }

    onChangeName(value) {
        this.setState({
            name: value
        });
    }

    onChangeAge(value) {
        this.setState({
            age: value
        });
    }
    onChangeSchool(value) {
        this.setState({
            school: value
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
                        disabled={true}
                    />
                </div>
                <div>
                    <label>描述姓名</label>
                    <Textarea
                        onChange={this.onChangeName}
                        value={this.state.name}
                        disabled={true}
                    />
                </div>
                <div>
                    <label>年龄</label>
                    <Radio
                        onChange={this.onChangeAge}
                        value={this.state.age}
                        options={[
                            {value: '1', name: '18'},
                            {value: '2', name: '19'},
                            {value: '3', name: '20'}
                        ]}
                        disabled={true}
                        inline
                    />
                </div>
                <div>
                    <label>年龄</label>
                    <Radio
                        onChange={this.onChangeAge}
                        value={this.state.age}
                        options={[
                            {value: '1', name: '18'},
                            {value: '2', name: '19'},
                            {value: '3', name: '20', disabled: true}
                        ]}
                        inline
                    />
                </div>
                <div>
                    <label>学校</label>
                    <Checkbox
                        onChange={this.onChangeSchool}
                        value={this.state.school}
                        options={[
                            {value: '1', name: '北大'},
                            {value: '2', name: '清华'},
                            {value: '3', name: '人大'}
                        ]}
                        disabled={true}
                        inline
                    />
                </div>
                <div>
                    <label>学校</label>
                    <Checkbox
                        onChange={this.onChangeSchool}
                        value={this.state.school}
                        options={[
                            {value: '1', name: '北大'},
                            {value: '2', name: '清华'},
                            {value: '3', name: '人大', disabled: true}
                        ]}
                        inline
                    />
                </div>
            </form>
        );
    }
}
