import React, { Component } from 'react';

class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggle: true,
        }
    };

    handleClick = () => {
        this.setState( prevState => ({
            isToggle: !prevState.isToggle
        }));
    }


    render() {
        return(
            <div style={ { margin: 'auto', textAlign: 'center' } }>
                <button onClick={ this.handleClick }>
                    { this.state.isToggle? 'On' : 'Off' }
                </button>
            </div>
        )
    }
};

export default Toggle;