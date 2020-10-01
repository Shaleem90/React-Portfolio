
import React from "react";
import {Card} from 'react-bootstrap';
//import "./style.css";

const AboutMe = () => {
  return (


<Card className="bg-dark text-white text-center">
  <Card.Img src="QAP_7362.JPG" alt="Card image" />
  <Card.ImgOverlay>
    <hr></hr>
    <hr></hr>
    <hr></hr>
    <Card.Title><h1>Welcome to My Portfolio</h1></Card.Title>
    <hr></hr>
    <Card.Title><h2>About Me</h2></Card.Title>
    <hr></hr>
    <Card.Text>
    <h5>My name is Shaleem Malik and i am based in Los Angeles, California. I am working as a Software Support Specialist in an EMR/HealthCare company with that i am a Certified Full Stack Developer from UCLA. My expertise include but are not limited to HTML, CSS, Bootstrap, Foundation.css, Javascript, Jquery, Web APIs, Node.js, ES6, React.js, Mern, MongoDB, SQL Server Management and MySQL. I am Experienced Team Lead with a demonstrated history of working in the automotive industry. Skilled in Team Motivation, Customer Service, Marketing, Team Building, and Team Management. Strong information technology professional. I have my associates degree in Pre-Engineering, Bachelors in Business Administration, and a Full Stack Web Developer Certification from University of California, Los Angeles (UCLA Extention). My activities involve music and gym. If you would like to know more about me please click on my Portfolio link.</h5>
    </Card.Text>
  </Card.ImgOverlay>
</Card>


  )
} 
export default AboutMe;