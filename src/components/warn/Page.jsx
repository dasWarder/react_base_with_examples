import React, { Component } from "react";
import WarningBanner from "./WarningBanner";

class Page extends Component {

    constructor(props) {
        super(props);
        this.state = { showWarning: false }
    }

    handleToggleClick = () => {
        this.setState((state) => ({
            showWarning: !state.showWarning
        }))
    };

    render() {
        return(
            <div style={ { textAlign: 'center', margin: 'auto', maxWidth: '49%' } }>
                <WarningBanner warn={ this.state.showWarning } />
                <button onClick={ this.handleToggleClick }>
                    { this.state.showWarning? 'Hide' : 'Show' }
                </button>
            </div>
        )
    }
};

export default Page;