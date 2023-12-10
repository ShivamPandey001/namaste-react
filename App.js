//  created h1 tag, passed attribute to tag
// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello world using React!"); 
// created root using reactDom
// const root = ReactDOM.createRoot(document.getElementById("root")); 
// root.render(heading);
// never ever thinks that when we do createElement it is creating the html tag or so, it only creates an object which becomes HTML which browsers can understands...

// while doing renderring into DOM it converts into HTML and put it into DOM
// let's check how to create nested HTML ElemenTags
const parent = React.createElement(
    "div",
    {id:"parentDiv"},
    [React.createElement(
        "div",
        {id:"subParent1"},[
        React.createElement(
            "h1",
            {id:"child1"},
            "Inside H1 Tag"
        ), 
        React.createElement(
            "h2",
            {id:"h2Tag"},
            "Inside H2 Tag"
        )]
    ),
    React.createElement(
        "div",
        {id:"subParent2"},[
        React.createElement(
            "h1",
            {id:"child2"},
            "Inside H1 Tag"
        ), 
        React.createElement(
            "h2",
            {id:"h2Tag"},
            "Inside H2 Tag"
        )]
    )]
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root1.render(parent);