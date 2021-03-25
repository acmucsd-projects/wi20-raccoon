import React from 'react'
import './PlaceCard.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
function PlaceCard(props) {
    return (
        <div className = "placeCard">
            <Card>
                <CardImg className = "place-image" src = {props.imgUrl} />
                <CardTitle className = "building-name">{props.name}</CardTitle>
                <CardText className = "description">{props.description}</CardText>
                <Button className = "more-info">MORE INFO</Button> 
            </Card>
        </div>
    )
}

export default PlaceCard
