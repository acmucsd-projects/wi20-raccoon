import React from 'react'
import './Places.css'
import PlaceCard from './PlaceCard.js'
import peterson from './images/peterson-hall.jpg'
import degree from './images/64-degrees.jpg'
import price from './images/price-center.jpg'
import roots from './images/roots.jpg'
import {IoMdArrowDropdown} from 'react-icons/io'
import Navbar from './Navbar.js'

function Places() {
    return (
        <div className = "all-places">
            <Navbar/>
            <h2 className="dropdown-button-margin">Most Recent Reviews <IoMdArrowDropdown className = "drop-icon"/></h2>
            <div className = "ucsd-place">
                <PlaceCard 
                    imgUrl = "https://live.staticflickr.com/7177/13535412304_8571d152b8_b.jpg"
                    name = "Geisel Library"
                    description = "Geisel Library is the main library building of UCSD. It plays an integral role in supporting the University’s research, teaching, learning, patient care and public service mission."
                />
                <PlaceCard 
                    imgUrl = "https://repository-images.githubusercontent.com/182321711/cb38c080-62a9-11e9-8954-fc1d7932c3a3"
                    name = "CSE Building"
                    description = "The Computer Science and Engineering (CSE) building was designed in 2002 to create a sense of community among the department's faculty, staff, students, and visitors."
                />
                <PlaceCard 
                    imgUrl = {degree}
                    name = "64 Degrees"
                    description = "64 Degrees provides good foods and good hangs, including private relaxation rooms, a demo kitchen, and an outdoor lounge space. It is known for their customizable burgers, fries and milkshakes."
                />
                <PlaceCard 
                    imgUrl = {peterson}
                    name = "Peterson Hall"
                    description = "Peterson Hall contains two large lecture halls that seat 300 to 400 students, serving the instructional needs of the campus and providing a venue for lectures and events open to the outside community."
                />
                <PlaceCard 
                    imgUrl = {price}
                    name = "Price Center"
                    description = "Price Center offers a variety of services, places, and spaces geared to the needs of students including restaurants, the campus bookstore, a movie theater, and offices for student organizations."
                />
                <PlaceCard 
                    imgUrl = {roots}
                    name = "Roots"
                    description = "Roots is the university's first exclusively vegan eatery and lounge. Located on the Muir College campus below Pines Restaurant, Roots has a clean, modern feel that reflects its menu perfectly."
                />
            </div>
        </div>
    )
}

export default Places
