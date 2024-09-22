import React from "react";
import ReactDOM from "react-dom/client";

//   const heading = document.createElement("h1"); // create the heading
//   heading.innerHTML = "hello world from javascript!";
//   console.log("heading", heading);
//   const root = document.getElementById("root");
//   root.appendChild(heading);

{/* <div id="parent">
    <div id="child">
        <h1>I am heading one</h1>    
        <h2>I am heading two </h2>
    </div>
</div> */}

// const heading = React.createElement("h1", {
//     id: "heading"
// }, "hello world from React"); // create heading
// console.log("heading with react", heading);


// React Element
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [React.createElement("h1", {}, "I am heading one"), React.createElement("h2", {}, "I am heading two")]))
console.log("parent", parent)

// JSX -> React Elements -> Parcel -> Browser Understandable Code -> Babel
const heading = <div>
    <h1>I am heading two</h1>
</div>
console.log("heading", heading)

// React Functional Comp = Javascript function

// 1. Capital letter
// 2. Javascript fun => arrow fun
// 3. return JSX

const Title = () => {
    return (
        <h1>This is the title from functional based component</h1>
    )
}

const Heading1 = () => {
    return (
        <div>
            <div>
                <h1 id="heading">
                    THis is heading
                </h1>
                <Title />
                <Title />
                <Title />
                <Title />
                <Title />

            </div>


        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// we have created a root for our react library => whatever react code we write going forward
// would only work in this root

// JSX - Javascript XML  

root.render(
    <>
        <Heading1 />
        <Title />
    </>);
// whatever we want to render inside the root just pass it