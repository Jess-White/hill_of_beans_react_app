import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Header() {
    return (
        <Jumbotron style={{textAlign: "center", backgroundColor: "#3d3d3d", color: "#c5c5c5"}}>
            <jumbotron style={{textAlign: "center", backgroundColor: "#3d3d3d", color: "#c5c5c5"}} className="jumbotron">Hill of Beans</jumbotron>
            <h3>Search and rate your favorite movies using this app!</h3>
        </Jumbotron>
    )
}

