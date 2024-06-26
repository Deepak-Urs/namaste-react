import React from "react"

class About extends React.Component {
    // First render
    constructor(props) {
        console.log("constructor - First render")
        super(props);
        this.state = {
            count: 0
        }
    }

    // Second render
    render() {
        console.log("render - Second render")
        return (
            <div>
                About Us Page
            
                <p>React Page in class</p>
            </div>
        )
    }

    // Third render
    componentDidMount() {
        console.log("componentDidMount - Third render")
        console.log("componentDidMount - Best place to make an API call")
    }
}