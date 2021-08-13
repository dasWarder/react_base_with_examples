import React,{ Component } from "react";
import LogginButton from "./LogginButton";
import LogoutButton from "./LogoutButton";
import Greeting from "../greeting/Greeting";

class Loggin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logged: false,
        }
    };

    handleLoginClick = () => {
       this.setState({ logged: true })
    };

    handleLogoutClick = () => {
        this.setState({ logged: false })
    };


    render() {
        const isLoggedIn = this.state.logged;
        let button;

        button = isLoggedIn? <LogoutButton onClick={ this.handleLogoutClick }/>
                                                        : <LogginButton onClick={ this.handleLoginClick }/>
        return(
            <div>
                <Greeting logged={ isLoggedIn }/>
                { button }
            </div>
        )
    };

}
export default Loggin;