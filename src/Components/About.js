import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';

export default function About() {
    return (
        <Jumbotron style={{
          backgroundColor: "#3d3d3d",
          color: "#c5c5c5",
          padding: "2%",
          margin: "0%"}}>
            <h5 style={{
              backgroundColor: "#3d3d3d", 
              padding: "2%",
              margin: "0%",
              textAlign: "left",
              fontFamily: "Trebuchet MS, Helvetica, sans-serif"}}>Hill of Beans pulls data from RapidAPI's <a 
                style={{color: "#fafafa"}} 
                href="https://rapidapi.com/blog/how-to-use-imdb-api/">IMDB API</a>, which you can find here, to allow you to search and rate your favorite movies!
            </h5>
            <h5 style={{
              backgroundColor: "#3d3d3d", 
              padding: "2%",
              margin: "0%",
              textAlign: "left",
              fontFamily: "Trebuchet MS, Helvetica, sans-serif"}}>I chose a <a 
                style={{color: "#fafafa"}} 
                href="https://www.imdb.com/title/tt0034583/?ref_=fn_al_tt_1">Casablanca</a> theme because, well, it's a classic.</h5>
              <h5 style={{
              backgroundColor: "#3d3d3d", 
              padding: "2%",
              margin: "0%",
              textAlign: "left",
              fontFamily: "Trebuchet MS, Helvetica, sans-serif"}}>Did you know that the title of <a
                style={{color: "#fafafa"}} 
                href="https://www.imdb.com/title/tt0114814/?ref_=nv_sr_srsg_0">The Usual Suspects</a> comes from Casablanca?</h5>
              <h5 style={{
              backgroundColor: "#3d3d3d", 
              padding: "2%",
              margin: "0%",
              textAlign: "left",
              fontFamily: "Trebuchet MS, Helvetica, sans-serif"}}>Captain Renault, the prefect of police, sarcastically says, "Round up the usual suspects."</h5>
              <Card>
              <img 
              style={{
                maxWidth: "100%", 
                height: "auto"}}
              src={"https://1.bp.blogspot.com/-aZoY_pltMp4/U7KqTTVnFHI/AAAAAAAAFX4/nXJkU3yHfAo/s1600/casablanca+round+up+the+usual+suspects+1942+aph_15.jpg"} alt="Claude Rains"/>
              </Card>
            <h5 style={{
              backgroundColor: "#3d3d3d", 
              padding: "2%",
              margin: "0%",
              textAlign: "left",
              fontFamily: "Trebuchet MS, Helvetica, sans-serif"}}>Check out the repo for this project <a 
                style={{color: "#fafafa"}}
                href="https://github.com/Jess-White/hill_of_beans_react_app">here!</a></h5>
        </Jumbotron>
    )
}