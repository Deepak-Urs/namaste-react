import React from "react";
import ReactDOM from "react-dom/client"

const AppLayout = () => {
    return (
        <React.Fragment>
        <HeaderComponent />
        <Body />
        <Footer />
        </React.Fragment>
            /*
            Header
                Logo
                Navbar items
                Cart
            Body
                Search Bar
                Restaurant List
                    Restaurant Card
                        Image
                        Location
                        Metadata
                        Rating
            Footer
                Links
                Copyrights
            */
     )
}

const restaurantList = [
    {
        id: 1,
        name: "KFC",
        genre: "Burgers, American",
        rating: "4",
        image: "./unnamed.webp"
    },
    {
        id: 2,
        name: "BK",
        genre: "Burgers, American",
        rating: "4",
        image: "./unnamed.webp"
    },
    {
        id: 3,
        name: "MD",
        genre: "Burgers, American",
        rating: "4",
        image: "./unnamed.webp"
    },
    {
        id: 4,
        name: "JB",
        genre: "Burgers, American",
        rating: "4",
        image: "./unnamed.webp"
    },
    {
        id: 5,
        name: "D",
        genre: "Burgers, American",
        rating: "4",
        image: "./unnamed.webp"
    },
]

const RestaurantList = ({data}) => {
    return data.map(item => <RestaurantCard {...item} key={item.id} />)
}

const RestaurantCard = ({image, name, genre, rating}) => {
    //console.log('data seen', data)
    //const {image, name, genre, rating} = data;
    return (
        <div className="card">
            <img src={image} alt="restauarant" />
            <h2>{name}</h2>
            <h3>{genre}</h3>
            <h4>{rating} stars</h4>
        </div>
    )
}


const Body = () => (
    <h4>
        {/*<RestaurantCard data={restaurantList[0]}/>*/}
        <RestaurantList data={restaurantList} />
        {console.log('body dta-', restaurantList[0])}
        </h4>
)

const Footer = () => (
    <h4>Footer</h4>
)


const Title = () => 
        <div>
            <img src="unnamed.webp" alt="logo" />
            <h2>Food Villa</h2>
        </div>

const HeaderComponent = () => 
        <div className="header">  
            <Title titleName="FoodVilla"/>
            {/*<h1>Food Villa</h1>*/}
            <div className="nav-items" style={{backgroundColor: 'orange'}}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
            </div>
            
        </div>
//const divContainer = React.createElement("div", {id: "title"}, [HeaderComponent1a, HeaderComponent1b])
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(HeaderComponent1a());
root.render(<AppLayout />);