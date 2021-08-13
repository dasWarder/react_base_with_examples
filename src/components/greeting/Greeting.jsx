import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

const Greeting = (props) => {
    const logged = props.logged;

    return logged? <UserGreeting /> : <GuestGreeting />;
};

export default Greeting;