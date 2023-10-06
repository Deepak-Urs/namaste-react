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

const headingJSX = (
    <h1 title="id">Namaste Javascript</h1>
)

console.log('headingJSX', headingJSX);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(headingJSX)
