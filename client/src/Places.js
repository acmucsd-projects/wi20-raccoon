import React from 'react'
import './Places.css'
import PlaceCard from './PlaceCard.js'
import peterson from './images/peterson-hall.jpg'
import degree from './images/64-degrees.jpg'
import price from './images/price-center.jpg'
import roots from './images/roots.jpg'
import {IoMdArrowDropdown} from 'react-icons/io'

function Places() {
    return (
        <div className = "all-places">
            <h2 className="dropdown-button-margin">Most Recent Reviews <IoMdArrowDropdown className = "drop-icon"/></h2>
            <div className = "ucsd-place">
                <PlaceCard 
                    imgUrl = "https://live.staticflickr.com/7177/13535412304_8571d152b8_b.jpg"
                    name = "Geisel Library"
                    description = "A phenomenal architecture masterpiece of UC San Diego"
                />
                <PlaceCard 
                    imgUrl = "https://repository-images.githubusercontent.com/182321711/cb38c080-62a9-11e9-8954-fc1d7932c3a3"
                    name = "CSE Building"
                    description = "A place for students having fun coding all night"
                />
                <PlaceCard 
                    imgUrl = {degree}
                    name = "64 Degree"
                    description = "A great place to eat, with amazing architecture"
                />
                <PlaceCard 
                    imgUrl = {peterson}
                    name = "Peterson Hall"
                    description = "An enormous lecture hall having 300+ students studying in class"
                />
                <PlaceCard 
                    imgUrl = {price}
                    name = "Price Center"
                    description = "A great place for students to eat, hang out, and even study"
                />
                <PlaceCard 
                    imgUrl = {roots}
                    name = "Roots"
                    description = "UC San Diego's first exclusively vegan food place"
                />
            </div>
        </div>
    )
}

export default Places
