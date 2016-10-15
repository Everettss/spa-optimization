
import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './talks.scss';
import Talk from './Talk';
import talksList from './talksList';

class Talks extends Component {
    constructor(props) {
        super(props);
        this.state = talksList[0];
        this.selectChange = this.selectChange.bind(this);
    }

    selectChange(selectedTalk) {
        this.setState(selectedTalk);
    }

    render() {
        return (
            <div>
                <Select
                    className="test"
                    options={talksList}
                    value={this.state.value}
                    onChange={this.selectChange}
                    clearable={false}
                    searchable={true} // eslint-disable-line react/jsx-boolean-value
                />
                <div className="talks">
                    <Talk
                        author={this.state.author}
                        description={this.state.description}
                        slides={this.state.slides}
                    />
                </div>
            </div>
        );
    }
}

export default Talks;
