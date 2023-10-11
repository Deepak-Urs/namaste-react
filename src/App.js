import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer"
import { IMG_CDN_URL } from "./constants";

//import './index.css'

/** APPLICATION PLANNING
        Header
            - Logo (Title)
            - Nav Items
            - Cart
        Body
            - Searchbar
            - Restaurantlist (many cards)
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


const restaurantList = [{
    name: 'Burger King',
    id: 1,
    image: IMG_CDN_URL,
    cuisines: ["Burger", "American"],
    rating: "4.5"
},
{
    name: 'McDonalds',
    id: 2,
    image: IMG_CDN_URL,
    cuisines: ["Burger", "American"],
    rating: "4.4"
},
{
    name: 'Dominos',
    id: 3,
    image: IMG_CDN_URL,
    cuisines: ["Pizza", "Italian"],
    rating: "4.4"
},
{
    name: 'Chipotle',
    id: 4,
    image: IMG_CDN_URL,
    cuisines: ["Healthy foods", "Mexican"],
    rating: "4.5"
}]

const AppLayout = () => {
    return (
        <React.Fragment>
            {console.log('restauarantList seen', restaurantList)}
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
