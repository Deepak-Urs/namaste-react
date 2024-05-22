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

const RestaurantCard = () => {
    return (
        <div className="card">
            <img src="unnamed.webp" alt="restauarant" />
            <h2>Burger King</h2>
            <h3>Burgers, American</h3>
            <h4>4 stars</h4>
        </div>
    )
}


const Body = () => (
    <h4><RestaurantCard />
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