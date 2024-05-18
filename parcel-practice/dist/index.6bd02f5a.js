const heading1 = React.createElement("h1", {
    id: "title",
    className: "class"
}, "Heading 1 from React!");
const heading2 = React.createElement("h1", {
    id: "title",
    className: "class"
}, "Heading 2 from React!");
const divContainer = React.createElement("h2", {
    id: "title"
}, [
    heading1,
    heading2
]);
console.log(divContainer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divContainer);

//# sourceMappingURL=index.6bd02f5a.js.map
