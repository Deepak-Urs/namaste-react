import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 0
        }
    }

    render() {
        const {count, count2} = this.state;

        return (
            <div className="profile">
                <h1>Profile Class Component!</h1>
                <h2>{this.props.data}</h2>
                <h3>Count:{this.state.count}</h3>
                <button onClick={() => this.setState(...state, count+=1)}>Click</button>
            </div>
        )
    }
}

export default Profile