import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Header() {
    return (
        <Jumbotron style={{textAlign: "center", backgroundColor: "#3d3d3d", color: "#c5c5c5"}}>
            <h1 style={{textAlign: "center", backgroundColor: "#3d3d3d", color: "#c5c5c5"}} className="jumbotron">Hill of Beans</h1>
        </Jumbotron>
    )
}