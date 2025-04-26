// Home.jsx
import React from "react";
import SecondsCounter from "../secondscounter";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                seconds: prevState.seconds + 1
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="text-center">
                <SecondsCounter seconds={this.state.seconds} />
            </div>
        );
    }
}

export default Home;
