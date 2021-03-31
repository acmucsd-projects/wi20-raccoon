import React from 'react'
import './PlaceCard.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import {
    Link
  } from "react-router-dom";
function PlaceCard(props) {
    return (
        <div className = "placeCard">
            <Card>
                <CardImg className = "place-image" src = {props.imgUrl} />
                <CardTitle className = "building-name">{props.name}</CardTitle>
                <CardText className = "description">{props.description}</CardText>
                <Link to="/price-center">
                    <Button className = "more-info">MORE INFO</Button> 
                </Link>
            </Card>
        </div>
    )
}

export default PlaceCard
