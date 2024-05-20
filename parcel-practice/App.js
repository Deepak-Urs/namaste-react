import React from "react";
import ReactDOM from "react-dom/client"

// below, we've a JSX expression
const head1 = (
    <h1 title="title" className="class">
        Heading 1 from React-JSX!
    </h1>
)

// below, we've React element
const heading1 = React.createElement("h1", {
    id: "title",
    className: "class"
}, "Heading 1 from React.createElement!");

//const divContainer = React.createElement("div", {id: "title"}, [heading1, head1])


// React Component
// 1. Functional components --> mainly used
// 2. Class based components

// Functional Components
const HeaderComponent1a = () => {
    return (
        <div>
            <h1>Namaste React functional component! - H1a</h1>
            <h2>Namaste React functional component! - H2a</h2>

            {/* All the below gives same output --> viz Component Composition */}
            <HeaderComponent1b />
            {/*{<HeaderComponent1b />}*/}
            {/*{HeaderComponent1b()}*/}
        </div>
    )
}

const HeaderComponent1b = () => 
    (
        <div>
            <h1>Namaste React functional component! - H1b</h1>
            <h2>Namaste React functional component! - H2b</h2>
        </div>
    )







//const divContainer = React.createElement("div", {id: "title"}, [HeaderComponent1a, HeaderComponent1b])
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(HeaderComponent1a());
root.render(<HeaderComponent1a />);