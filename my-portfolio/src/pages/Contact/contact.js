
import React from "react";
import { Jumbotron, Button, Container } from 'react-bootstrap';
import Hero from '../../components/Hero/hero'
//import "./style.css";

const ContactMe = () => {
    return (
        <div>

            <div> <Hero /> </div>


            <Jumbotron className='text-center'>

                <h2>
                    Please feel free to contact Me @
                </h2>
                <br></br>

                <span><a href='mailto:shaleemmalik6@gmail.com' className='active'>shaleemmalik6@gmail.com</a></span>
                <hr></hr>
                <span><a href='callto:5867448939' className='active'>(586)-744-8939</a></span>
                <hr></hr>
                <h2>
                    You can swing by for a cup of coffee aswell
                </h2>
                <br></br>
                <span><a href='#' className='active'>301 s Glendora Avenue, West Covina, CA 91790.</a></span>
                <p>
                </p>

            </Jumbotron>

        </div>



    )
}
export default ContactMe;