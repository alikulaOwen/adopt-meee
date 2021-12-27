/* eslint-disable import/no-unresolved */
import React from "react";

import { render } from "react-dom";
import Search from "./search.jsx";

const App = () => {
    return (
        <div className="wrapper">
            <h1 className="top-title">Adopt Me!</h1>
            <Search/>
        </div>
    );

};

render(<App/> , document.getElementById("root"));