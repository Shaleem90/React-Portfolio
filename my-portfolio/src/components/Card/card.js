import React from "react";
import { Card, CardDeck, Container } from 'react-bootstrap';
//import "./style.css";

const CardProject = () => {
    return (
        <Container>

            <CardDeck>
                <Card style={{ height: '25rem' }} >
                    <Card.Img style={{ height: '25rem' }} variant="top" src="Cleaning Services.jpg" />
                    <Card.Body>
                        <Card.Title className='text-center' >Cleaning Services</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <span><a href='http://www.cleansafemaintenance.com/' target="_blank" className='active'>Live Demo</a></span>
                        <hr></hr>
                        <span><a href='https://github.com/Shaleem90' target="_blank" className='active'>GitHub Page</a></span>
                    </Card.Footer>
                </Card>
                <Card style={{ height: '25rem' }}>
                    <Card.Img style={{ height: '25rem' }} variant="top" src="ub04.png" />
                    <Card.Body>
                        <Card.Title className='text-center'>Medical Billing from</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <span><a href='https://hospicemd-ub04.herokuapp.com/' target="_blank" className='active'>Live Demo</a></span>
                        <hr></hr>
                        <span><a href='https://github.com/Shaleem90' target="_blank" className='active'>GitHub Page</a></span>
                    </Card.Footer>
                </Card>
                <Card style={{ height: '25rem' }}>
                    <Card.Img style={{ height: '25rem' }} variant="top" src="HR.jpeg" />
                    <Card.Body>
                        <Card.Title className='text-center'>HR Management</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <span><a href='https://vieramal.herokuapp.com/' target="_blank" className='active'>Live Demo</a></span>
                        <hr></hr>
                        <span><a href='https://github.com/Shaleem90' target="_blank" className='active'>GitHub Page</a></span>
                    </Card.Footer>
                </Card>
            </CardDeck>

        </Container>

    )
}
export default CardProject;