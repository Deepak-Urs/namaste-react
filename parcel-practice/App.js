import React from "react";
import ReactDOM from "react-dom/client"

const AppLayout = () => {
    return (
        <></>
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


const Title = () => 
        <div>
            <img src="unnamed.webp" alt="logo" />
            <h2>Food Villa</h2>
        </div>

const HeaderComponent = () => 
        <div className="header">  
            <Title titleName="FoodVilla"/>
            {/*<h1>Food Villa</h1>*/}
            <div className="nav-items">
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
root.render(<HeaderComponent />);