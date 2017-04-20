/**
 * Created by Germo on 17/04/2017.
 */
import React, {Component} from 'react'

class InputChangesOnSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.onChange = this.onChange.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    onKeyUp(event) {
        if (event.keyCode === 13) {
            const submissionValue = this.state.value;
            this.setState({value: ''});
            this.props.onSubmit(submissionValue);
        }
    }

    render() {
        return (
            <input
                type={this.props.type}
                onKeyUp={this.onKeyUp}
                value={this.state.value}
                onChange={this.onChange}
            />
        );
    }
}

InputChangesOnSubmit.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    type: React.PropTypes.string.isRequired
};

export default InputChangesOnSubmit;