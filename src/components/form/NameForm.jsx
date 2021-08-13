import React, { Component } from "react";

class NameForm extends Component {

    constructor(props) {
        super(props);
        this.state= { value: '' }
    };

    changeHandler = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    submitForm = (e) => {
      alert('The name was send: ' + this.state.value);
      e.preventDefault();
    };


    render() {
        return(
            <form onSubmit={ this.submitForm }>
                <label>Name
                    <input type='text' value={ this.state.value } onChange={ this.changeHandler }/>
                </label>
                <input type='submit' value='Send'/>
            </form>
        )
    };

};

export default NameForm;