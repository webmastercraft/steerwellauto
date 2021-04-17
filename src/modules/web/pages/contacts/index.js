// import libs
import { connect } from "react-redux"

import React, { Component } from "react"
import PropTypes from "prop-types"
import "./contacts.css"

import { Place, MailOutline, LocalPhone, AllInbox, AccessTime, KeyboardArrowDown } from '@material-ui/icons';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

class Page extends Component {
    render() {
        return(
        	<div className="page_container contacts">
	            <div className="page_banner">
	            	<h3>Contact us</h3>
	            	<p>Donec facukusus tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor</p>
	            </div>
	            <div className="row contact_block">
	            	<div className="container">
	            		<div className="row">
	            			<div className="col-md-5">
	            				<h3 className="title">Contact Info</h3>
	            				<ul>
	            					<li>
	            						<Place color="primary"/>
	            						<p>31034, Sharjah United Arab Emirates</p>
	            					</li>
	            					<li>
	            						<MailOutline />
	            						<p>info@steerwellauto.com</p>
	            					</li>
	            					<li>
	            						<LocalPhone />
	            						<p>Tel: +971 6 5531376</p>
	            					</li>
	            					<li>
	            						<AllInbox />
	            						<p>Fax: +971 6 5531 603</p>
	            					</li>
	            				</ul>
	            				<h5>Opening Hours:</h5>
	            				<ul className="opening_hours">
	            					<li>
	            						<AccessTime /><label>Saturday - Thursday:</label>
	            						<p>08:00 am - 01:00 pm</p>
	            						<p>04:30 pm - 09:00 pm</p>
	            					</li>
	            					<li>
	            						<AccessTime /><label>Friday:</label>
	            						<p>04:30 pm - 09:00 pm</p>
	            					</li>
	            				</ul>
	            			</div>
	            			<div className="col-md-7 form_block white_bg shadow_box">
	            				<h3 className="title">Get in Touch</h3>
	            				<p>Lorem ipsum dolor sit amet sit amet</p>
	            				<div className="row">
	            					<div className="col-md-6">
	            						<label>Full Name</label>
	            						<input type="text" />
	            					</div>
	            					<div className="col-md-6">
	            						<label>E-mail</label>
	            						<input type="email" />
	            					</div>
	            				</div>
	            				<div className="row">
	            					<div className="col-md-6">
	            						<label>Phone</label>
	            						<input type="text" />
	            					</div>
	            					<div className="col-md-6">
	            						<label>How would you like to communicate?</label>
	            						<Select
					                      	labelId="label"
					                      	id="select_region"
					                      	IconComponent={KeyboardArrowDown}
					                      	variant="outlined">
					                      	<MenuItem value="call">Call</MenuItem>
					                    </Select>
	            					</div>
	            				</div>
	            				<div className="row">
	            					<div className="col-md-6">
	            						<label>Department</label>
	            						<Select
					                      	labelId="label"
					                      	id="select_region"
					                      	IconComponent={KeyboardArrowDown}
					                      	variant="outlined">
					                      	<MenuItem value="sales">Sales</MenuItem>
					                    </Select>
	            					</div>
	            					<div className="col-md-6">
	            						<label>Prefered time for communication</label>
	            						<Select
					                      	labelId="label"
					                      	id="select_region"
					                      	IconComponent={KeyboardArrowDown}
					                      	variant="outlined">
					                      	<MenuItem value="anytime">Anytime</MenuItem>
					                    </Select>
	            					</div>
	            				</div>
	            				<div className="row">
	            					<div className="col-md-12">
	            						<label>Message</label>
	            						<textarea rows="5"/>
	            					</div>
	            				</div>
	            				<div className="row">
	            					<div className="col-md-6">
	            						<button>Send</button>
	            					</div>
	            				</div>
	            			</div>
	            		</div>
	            	</div>
	            </div>
	            <div className="row white_bg">
	            	<div className="container border_bottom">
	            		<div className="row">
	            			<div className="col-md-5">
	            				<h3 className="title">Offices</h3>
	            				<ul className="office_block">
	            					<li>
	            						<h4>Head Office Sharjah</h4>
	            						<Place /><p>Souq Al haraj, Showroom 53, Sharjah POB31034 - Sharjah - United Arab Emirates</p>
	            					</li>
	            					<li>
	            						<h4>Dubai Showroom</h4>
	            						<Place /><p>Ducamz Al Abir Showroom 142 - Dubai United Arab Emirates</p>
	            					</li>
	            					<li>
	            						<h4>Abu Dhabi Showroom</h4>
	            						<Place /><p>Moto world showroom 145 Abu Dhabi - Dubai United Arab Emirates</p>
	            					</li>
	            				</ul>
	            			</div>
	            			<div className="col-md-7">
	            				<div className="row">
	            					<img src="./static/img/office_map.png"/>
	            				</div>
	            			</div>
	            		</div>
	            	</div>
	            </div>
	            <div className="row white_bg other_departments">
	            	<div className="container">
	            		<div className="row">
	            			<div className="col-md-12">
	            				<h3 className="title">Other Departments</h3>
	            			</div>
	            			<div className="col-md-4">
	            				<h4>Sale Enquiry:</h4>
	            				<p>+971 55 580 8385 Mr.Sayed Ali</p>
	            				<p>+971 55 580 7679 Mr.Hafiz Bilal</p>
	            				<p>+971 55 580 8656 Mr.Jahangir Alam</p>
	            				<p>+971 50 757 5150 Mr.Khaleel Bahri</p>
	            				<p>+971 50 796 4793 Mr.Shakeel Bahri</p>
	            			</div>
	            			<div className="col-md-4">
	            				<h4>Purchase Enquiry:</h4>
	            				<p>+971 50 144 4997 Mr.Savio Parera</p>
	            				<p>+971 50 787 1103 Mr.Kafeel Bahri</p>
	            				<h4>Marketing:</h4>
	            				<p>+971 55 580 7343 Mr.Ryan Ahmed</p>
	            			</div>
	            			<div className="col-md-4">
	            				<h4>Operations:</h4>
	            				<p>+971 50 987 6542 Mr.Akeel Bahri</p>
	            				<h4>Customer Service:</h4>
	            				<p>+971 6 5531376 Head Office, Sharjah</p>
	            			</div>
	            		</div>
	            	</div>
	            </div>
			</div>
    	)
    }
}

export default connect()(Page)
