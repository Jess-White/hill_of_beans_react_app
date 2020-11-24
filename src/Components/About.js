import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function About() {
    return (
        <Jumbotron style={{backgroundColor: "#000080", padding: "2%",
        margin: "0%"}}>
            <h1 style={{backgroundColor: "#000060", padding: "0%",
            margin: "0%"}} className="jumbotron">Hi there!</h1>
            <h3>Welcome to Hill of Beans</h3>
            <h5>Hill of Beans pulls data from RapidAPI's <a href="https://rapidapi.com/blog/how-to-use-imdb-api/">IMDB API</a>, which you can find here, to allow you to search and rate your favorite movies!
            </h5>
            <h5>Check out the repo for this project <a href="https://github.com/Jess-White/hill_of_beans_react_app">here!</a></h5>
        </Jumbotron>
    )
}