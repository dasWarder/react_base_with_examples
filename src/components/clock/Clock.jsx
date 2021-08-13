import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        }
    };

    formatTime = (time) => {
        return time.toLocaleTimeString();
    }

    componentDidMount() {
        this.timerID = setInterval( () => {
            this.tick();
        }, 1000);
    };

    tick = () => {
        this.setState( {
            time: new Date()
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div style={ { margin: 'auto', maxWidth: '100%', textAlign: 'center'}}>
                <h1>Timer</h1>
                <h2>Current time: { this.formatTime(this.state.time) }</h2>
            </div>
        )
    }
};

export default Clock;