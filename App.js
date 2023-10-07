import React from "react";
import ReactDOM from "react-dom/client"
/*
* creates a server
* Hot Module Replacement
* .parcel-cache
* bundling
* minify
* cleaning our code
* dev and production build
* image optimization
* caching while development
* compression
* compatible with older version of browser
* HTTPS on dev
* port number
* consistent hashing algorithm
* zero config
* Tree Shaking - Removing unwanted code
*/

//const heading1 = React.createElement("h1", { id: 'title', key: 'h1' }, "Heading1!")
//const heading2 = React.createElement("h2", { id: 'title', key: 'h2' }, "Heading2")
//const container = React.createElement("div", { id: 'container' }, [heading1, heading2])

// React element / JSX
const heading = (
    <h1 title="id">Namaste React Element</h1>
)

// React component definition-1
const Title = () => (
    <h1 title="id"> Title Element</h1>
)

// React component definition-2
// Component compoition done below
const HeaderComponent = () => {
    return (
    <div>
        {heading}
        <Title />
        {Title()}
        <h1>Namaste React Functional Component</h1>
        <h2>This is a h2 tag!</h2>
    </div>
    );
}

console.log('heading', heading);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeaderComponent />)
