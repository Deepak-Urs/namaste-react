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
*/

const heading1 = React.createElement("h1", { id: 'title' }, "Heading1!")
const heading2 = React.createElement("h2", { id: 'title' }, "Heading2")
const container = React.createElement("div", { id: 'container' }, [heading1, heading2])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)

console.log(heading1);