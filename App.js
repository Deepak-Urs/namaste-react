import React from "react";
import ReactDOM from "react-dom/client"

/** APPLICATION PLANNING
        Header
            - Logo
            - Nav Items
            - Cart
        Body
            - Searchbar
            - Restaurantlist
                - Restaurant Card
                    - Image
                    - Name
                    - Rating
                    - Cuisine
        Footer
            - links
            - copyrights
    */


/* PARCEL --
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
//const heading = (
//    <h1 title="id">Namaste React Element</h1>
//)

// React component definition-1: functional component
const Title = () => (
    <img src="fv.jpeg" alt="logo" className="logo" />
)


// React component definition-2
// Component compoition done below
const Header = () => {
    return (
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
}

const Body = () => {
    return (
        <div className="body" style={{backgroundColor: 'green'}}><h1>Body</h1></div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
        <h1>Footer</h1>
        </div>
    )
}

console.log('heading', heading);


const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
