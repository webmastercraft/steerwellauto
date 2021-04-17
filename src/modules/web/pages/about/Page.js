import React, { Component } from "react"
import PropTypes from "prop-types"
import "./page.css"

// import components

// import services

class Page extends Component {
	static propTypes = {
	    dispatch: PropTypes.func.isRequired,
	  }
    render() {
        return(
        	<div className="container about_container">
	            <div className="about_content">
	    			<div className="row aboutus">
	                    <h3 className="about">About Us</h3>
	                </div>
	                <div className="row history">
	                	<div className="col-md-12">
		                    <h3 className="title">History</h3>
		                    <p className="content_text">Founded in United Arab Emirates in 1984 by Haji Bahri Karam, Steer Well Auto was among the first in UAE to offer wide range of used cars and Commercial vehicle for local and international export. Since its inception in Web, SWA is a new way to buy and sell used cars. We combine our software - which provides transparent, fair pricing - with unparalleled customer service with fixed price and Online delivery to the customer worldwide. we have expanded our offerings with multiple Showroom in Dubai, Sharjah and Abu Dhabi.
		                    </p>
		                </div>
	                </div>
	                <div className="row history_img">
	                    <div className="col-md-12">
	                    	<img src="/imgs/history.jpg"/>
	                    </div>
	                </div>
	                <div className="row">
	                    <div className="col-md-6 note">
	                        <h3 className="cars title">Cars</h3>
	                        <p className="content_text">Our selection is versatile: from Japanese-made vehicles to American /European imports that have been used in UAE, from 4-doorsedans to buses, trucks, Vans and Luxury.</p>
	                    </div>
	                    <div className="col-md-6 road">
	                        <img src="./imgs/road.jpg"/>
	                    </div>
	                </div>
	                <div className="row">
	                    <div className="col-md-12 core">
	                        <h3 className="title">Core of value</h3>
	                        <p className="content_text">What makes SWA unique are its offering and world className technology. Some of the unique features include used car fixed price, certified used cars, export price with port and tracking of each and every process that empower our buyers and sellers to choose the most suitable vehicles at the most affordable prices. Additionally, we also provide information related to the automobile industry and the latest automoive news.
	                        </p>
	                        <p className="content_text">We're proud of our sincere and continuous efforts, both for car buyers, sellers and the other people who want to know more about the automovie industry in UAE. So whether you're a first-timevisitor, a frequent site user, an avid auto enthisiast, we hope you'll find what you're looking for.
	                        </p>
	                    </div>
	                </div>
	                <div className="row core_img">
	                    <div className="col-md-6 left">
	                        <img src="./imgs/crop1.jpg"/>
	                    </div>
	                    <div className="col-md-6 right">
	                        <img src="./imgs/crop2.jpg"/>
	                        <img src="./imgs/crop3.jpg"/>
	                    </div>
	                </div>
	            </div>
			</div>
    	)
    }
}

export default Page
