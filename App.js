import React from "react";
import ReactDOM from "react-dom/client"
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
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F20190410-burger-king-logo-vector-burger-king-icon-free-vector&psig=AOvVaw2jElvERXxlFcNqz7ScSL3z&ust=1696978251334000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKCXyOCG6oEDFQAAAAAdAAAAABAE',
    cuisines: ["Burger", "American"],
    rating: "4.5"
},
{
    name: 'McDonalds',
    id: 2,
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F20190410-burger-king-logo-vector-burger-king-icon-free-vector&psig=AOvVaw2jElvERXxlFcNqz7ScSL3z&ust=1696978251334000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKCXyOCG6oEDFQAAAAAdAAAAABAE',
    cuisines: ["Burger", "American"],
    rating: "4.4"
},
{
    name: 'Dominos',
    id: 3,
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F20190410-burger-king-logo-vector-burger-king-icon-free-vector&psig=AOvVaw2jElvERXxlFcNqz7ScSL3z&ust=1696978251334000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKCXyOCG6oEDFQAAAAAdAAAAABAE',
    cuisines: ["Pizza", "Italian"],
    rating: "4.4"
},
{
    name: 'Chipotle',
    id: 4,
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F20190410-burger-king-logo-vector-burger-king-icon-free-vector&psig=AOvVaw2jElvERXxlFcNqz7ScSL3z&ust=1696978251334000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKCXyOCG6oEDFQAAAAAdAAAAABAE',
    cuisines: ["Healthy foods", "Mexican"],
    rating: "4.5"
}]


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
        <div className="body" style={{ display: "flex", flexWrap: "wrap" }}>
            {/*<RestaurantCard restaurant={restaurantList[0]}/>
            <RestaurantCard restaurant={restaurantList[1]}/>
            <RestaurantCard restaurant={restaurantList[2]}/>
            <RestaurantCard restaurant={restaurantList[3]}/>*/}
            {restaurantList.map((res) => {
                return <RestaurantCard {...res} key={res.id}/>
            })}
        </div>
    )
}

const RestaurantCard = ({image, name, cuisines, rating}) => {
    //const {image, name, cuisines, rating} = props.restaurant
    return (
        <div className="card">
            <img alt="company-logo" src={image} />
            <h2>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4>{rating} stars</h4>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <h4>Footer</h4>
        </div>
    )
}
console.log('heading', heading);


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
