import React from "react";
import ReactDOM from "react-dom/client"

import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/ABout";


const AppLayout = () => {
    console.log('restaurantList', 'restaurantList')
    return (
        <React.Fragment>
            <HeaderComponent />
            {/*<Body />*/}
            <Outlet />
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

const Footer = () => (
    <h4>Footer</h4>
)


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element: <About />
            }
        ]
    }
    
])

//const divContainer = React.createElement("div", {id: "title"}, [HeaderComponent1a, HeaderComponent1b])
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(HeaderComponent1a());
root.render(<RouterProvider router={appRouter} />);