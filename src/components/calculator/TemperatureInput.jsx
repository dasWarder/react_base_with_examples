import React,{ Component } from "react";


const scaleNames = {
    c: 'Cilsious',
    f: 'Fahrenheit'
};

class TemperatureInput extends Component {

    changeHandler = (event) => {
        this.props.onTemperatureChange(event.target.value);
    };

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter the temperature in { scaleNames[scale] }:</legend>
                <input value={ temperature } onChange={ this.changeHandler }/>
            </fieldset>
        )
    }
};

export default TemperatureInput;