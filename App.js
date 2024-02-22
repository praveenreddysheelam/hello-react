import React from "react";
import ReactDOM  from "react-dom/client";
// react functional component
const Title = () => {
    return <h1>Hello React Title Component</h1>;
}
const HeaderComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading"> This is Hello React Header Component </h1>;
    </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />); 