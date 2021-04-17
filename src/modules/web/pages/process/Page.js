import React, { Component } from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import "./page.css"

// import components
import PageInfo from "./components/PageInfo"
import Expantion from "../../../../common/components/Expantion"
import Button from '@material-ui/core/Button';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import ReviewBlock from "../../../../common/review/ReviewBlock"

// import services

const InspectionData = [
	{
		title:"Required Documentation",
		content: "1.Vehicle history report (CARFAX, Experian, etc.)<br>2.Vehicle history report (CARFAX, Experian, etc.)"
	},
	{
		title:"Required Documentation",
		content: "1.Vehicle history report (CARFAX, Experian, etc.)<br>2.Vehicle history report (CARFAX, Experian, etc.)"
	},
	{
		title:"Required Documentation",
		content: "1.Vehicle history report (CARFAX, Experian, etc.)<br>2.Vehicle history report (CARFAX, Experian, etc.)"
	},
	{
		title:"Required Documentation",
		content: "1.Vehicle history report (CARFAX, Experian, etc.)<br>2.Vehicle history report (CARFAX, Experian, etc.)"
	},
	{
		title:"Required Documentation",
		content: "1.Vehicle history report (CARFAX, Experian, etc.)<br>2.Vehicle history report (CARFAX, Experian, etc.)"
	},
	{
		title:"Required Documentation",
		content: "1.Vehicle history report (CARFAX, Experian, etc.)<br>2.Vehicle history report (CARFAX, Experian, etc.)"
	},
	{
		title:"Required Documentation",
		content: "1.Vehicle history report (CARFAX, Experian, etc.)<br>2.Vehicle history report (CARFAX, Experian, etc.)"
	},
	{
		title:"Required Documentation",
		content: "1.Vehicle history report (CARFAX, Experian, etc.)<br>2.Vehicle history report (CARFAX, Experian, etc.)"
	},
	{
		title:"Required Documentation",
		content: "1.Vehicle history report (CARFAX, Experian, etc.)<br>2.Vehicle history report (CARFAX, Experian, etc.)"
	},
];

class Page extends Component {
	static propTypes = {
	    dispatch: PropTypes.func.isRequired,
	  }

	  constructor(props){
	  	super(props);

	  	this.state = {
	  		show_inspection:"show",
	  	}
	  }

	  handleClick_Hide = (e) =>{
  		this.setState({show_inspection:"hide"});
	  }

	  handleClick_Show = (e) =>{
  		this.setState({show_inspection:"show"});
	  }

    render() {
        return(
        	<div className="container-fluid process_page_container">
				<div className="row background_img">
	                <div> Lorem ipsum dolor sit amet</div>
	                <p>Donec facukusus tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor</p>
	            </div>
	            <div className="row benefit">
	                <div className="container">
		                <div className="row">
		                    <div className="col-md-4">
		                        <div className="body white_bg">
		                            <div>Browse the best</div>
		                            <p>See great deals on vehicles that passed our rigorous 150+Point inspection</p>
		                        </div>
		                        <img src="./imgs/process_1.png" className="browse_img"/>
		                    </div>
		                    <div className="col-md-4">
		                        <div className="body white_bg">
		                            <div>Get Quotation and information</div>
		                            <p>Get Detailed quotation with shipping price and vehicle information with just a click</p>
		                        </div>
		                        <img src="./imgs/process_2.png" className="quotation_img"/>
		                    </div>
		                    <div className="col-md-4">
		                        <div className="body white_bg">
		                            <div>Time Saving</div>
		                            <p>Let us handle all the hassle and save your time and money</p>
		                        </div>
		                        <img src="./imgs/process_3.png" className="time_img"/>
		                    </div>
	                    </div>
	                </div>
	            </div>
	            <div className="row detail white_bg">
	                <div className="container">
	                	<div className="row">
		                    <div className="col-md-6 detail_content">
		                        <div className="row title">
		                            <div className="col-md-12">Get Detailed Look</div>
		                        </div>
		                        <p>We collect and show you all the details about the car up front. Each car we feature has high-resolutionphotos with 360, specs vehicle history and an attached photo if there`s any minior issue on exterior</p>
		                        <Link to="#">See for yourself</Link>
		                    </div>
		                    <div className="col-md-6 detail_img">
		                        <img src="./imgs/process_4.png"/>
		                    </div>
	                    </div>
	                </div>
	            </div>
	            <div className="row inspection white_bg">
	                <div className="container">
	                	<div className="row">
		                    <div className="col-md-6 inspection_img">
		                        <img src="./imgs/process_5.png"/>
		                    </div>
		                    <div className="col-md-6 inspection_content">
		                        <div className="row title">
		                            <div className="col-md-12">150+ Point inspection</div>
		                        </div>
		                        <div className="row description">
		                            <div className="col-md-12">
		                                <p>Our professional Purchase team complete a 150+point inspection. They also carefully review service records, vehicle history report, and any other ownership details. This way, you `ll have peace of mind knowing the comprehensive health of the car before you buy</p>
		                            </div>
		                            <div className="col-md-12">
		                                <Link to="#"> Hide the full inspection process</Link>
		                            </div>
		                        </div>
		                    	<Expantion containImage={false} data={InspectionData}/>
		                    </div>
		                </div>
	                </div>
	            </div>
	            <div className="row pricing white_bg">
	                <div className="container">
	                    <div className="row title_center">
	                        <div className="col-md-12">
	                            Competitive pricing, no haggling necessary
	                        </div>
	                    </div>
	                    <div className="pricing_img">
	                        <img src="./imgs/process_7.png"/>
	                    </div>
	                </div>
	            </div>
	            <div className="row quotation">
	                <div className="container">
	                    <div className="row title_center">
	                        <div className="col-md-12">One click Quotations, With Shipping Cost</div>
	                    </div>
	                    <p>Click on Get quotation and we'll generate quotation instantly for you with Port Shipping and vehicle details.</p>
	                    <div className="quotation_btn">
	                        <input type="button" name="" className="btn" value="Get Quotation"/>
	                    </div>
	                </div>
	            </div>
	            <div className="row save_process white_bg">
	                <div className="container">
	                    <div className="row title_center">
	                        <div className="col-md-12">Don't just save money, save time and save effort</div>
	                    </div>
	                    <div className="row save_content">
	                        <div className="col-md-6">
	                            <div className="save_type">
	                                <div>Get updated with each details and track the process</div>
	                                <p>We'll process all necessaru paperwork, including DMV forms, title, transfer and registration.</p>
	                            </div>
	                            <div className="save_type">
	                                <div>Let us handle the small print</div>
	                                <p>We'll process all necessaru paperwork, including Vehicle Transfer, Loading, Shipping and registration.</p>
	                            </div>
	                            <div className="save_type">
	                                <div>Finacing with less frustration</div>
	                                <p>We partner with excellent banks that offer competitive rates, or in ,many cases, SWA can work eith a bank of your choice. Apply online or get help from a live chat.</p>
	                            </div>
	                        </div>
	                        <div className="col-md-6 save_img">
	                            <img src="./imgs/process_6.png"/>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <div className="container processReview">
	            	<ReviewBlock />
	            </div>
	            <div className="row question white_bg">
	                <div className="container">
	                    <div className="row">
	                        <div className="question_head col-md-5">
	                            <div className="row title">
	                                <div className="col-md-12">Frequently Asked Questions</div>
	                            </div>
	                            <p>Contact us any time:</p>
	                            <Link to="/contact">forexample@gmail.com</Link>
	                        </div>
	                        <div className="question_expantion col-md-7">
	                            <Expantion containImage={false}/>
	                        </div>
	                    </div>
	                    <div className="row">
	                        <div className="col-md-5"></div>
	                        <div className="see_all_link col-md-7">
	                            <Link to="/faq">See all FAQ
	                            <KeyboardBackspace/>
	                            </Link>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
    	);
    }
}

export default Page
