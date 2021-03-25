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
            <h2>Most Recent Reviews <IoMdArrowDropdown className = "drop-icon"/></h2>
            <div className = "ucsd-place">
                <PlaceCard 
                    imgUrl = "https://live.staticflickr.com/7177/13535412304_8571d152b8_b.jpg"
                    name = "Geisel Library"
                    description = "Placeholder"
                />
                <PlaceCard 
                    imgUrl = "https://repository-images.githubusercontent.com/182321711/cb38c080-62a9-11e9-8954-fc1d7932c3a3"
                    name = "CSE Building"
                    description = "Placeholder"
                />
                <PlaceCard 
                    imgUrl = {degree}
                    name = "64 Degree"
                    description = "Placeholder"
                />
                <PlaceCard 
                    imgUrl = {peterson}
                    name = "Peterson Hall"
                    description = "Placeholder"
                />
                <PlaceCard 
                    imgUrl = {price}
                    name = "Price Center"
                    description = "Placeholder"
                />
                <PlaceCard 
                    imgUrl = {roots}
                    name = "Roots"
                    description = "Placeholder"
                />
            </div>
        </div>
    )
}

export default Places
