import React from 'react'
import moment from "moment";
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className="page_footer">
	    <div className="container">
			<div className="row">
				<div className="col-md-2 col-xs-2 col-sm-2 col-xs-2">
					<div className="page_logo">
						<Link to="/">
							<img src="/static/img/logo.png"/>
							<div>
								<span> Steer Well </span>
								<br/>
								<span> Auto </span>
							</div>
						</Link>
					</div>
				</div>
				<div className="col-md-2 col-sm-2 col-xs-2">
					<ul>
						<li className="list_title">Main Pages</li>
						<li><Link to="/browse">Browse Cars</Link></li>
						<li><Link to="/blog">Blog</Link></li>
					</ul>
				</div>
				<div className="col-md-2 col-sm-2 col-xs-2">
					<ul>
						<li className="list_title">Company</li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/process">Process</Link></li>
					</ul>
				</div>
				<div className="col-md-2 col-sm-2 col-xs-2">
					<ul>
						<li className="list_title">Support</li>
						<li><Link to="/car_finder">Car Finder</Link></li>
						<li><Link to="/faq">FAQ</Link></li>
					</ul>
				</div>
				<div className="col-md-2 col-sm-2 col-xs-2">
					<ul>
						<li className="list_title">Links</li>
						<li><Link to="/browse/bus">Bus Page</Link></li>
						<li><Link to="/privacy">Privacy</Link></li>
					</ul>
				</div>
				<div className="col-md-2 col-sm-2 col-xs-2">
					<ul>
						<li className="list_title">Connect</li>
						<li className="social">
							<div><Link href="#" to=""><i className="fa fa-instagram"></i></Link></div>
							<div><Link href="#" to=""><i className="fa fa-facebook"></i></Link></div>
							<div><Link href="#" to=""><i className="fa fa-twitter"></i></Link></div>
						</li>
					</ul>
				</div>
			</div>
			<div className="page_footer_inner">
				&copy; All rights reserved. SteerWellAuto 2019
			</div>
		</div>
	</div>
)

export default Footer
