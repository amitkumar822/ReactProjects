/* JAVASCRIPT */ 

// const heading = document.createElement("h1");
//         heading.textContent = "Hello World";
//         heading.className = "header";
//         document.getElementById("root").appendChild(heading);

//         console.log("JavaScript Element: ",heading);



/** REACT WITH JS*/

// const reactHeading = React.createElement("h2", {className: "head", id: "reactHead", children:"Hello children"});
// ReactDOM.createRoot(document.getElementById('root')).render(reactHeading);
// console.log(reactHeading);


/**REACT WITH JSX */

//! Syntax1
var jsxHeading = /*#__PURE__*/React.createElement("h1",{className: "head"},"Hello JSX");
ReactDOM.createRoot(document.getElementById('root2')).render(jsxHeading); 

//! Syntax2(Best Syntax)
const jsxHeading2 = <React.Fragment>
        <h1 className="head">Hello India</h1>
        <p>This is created using JS</p>
</React.Fragment>

ReactDOM.createRoot(document.getElementById("root3")).render(jsxHeading2);

const jsxHeading3 = <>
        <h1 className="head">Hello India</h1>
        <p>This is created using JS</p>
</>

// ReactDOM.createRoot(document.getElementById("root3")).render(jsxHeading3);