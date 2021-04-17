import React, { Component } from "react"
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Send from '@material-ui/icons/Send';
import "./page.css"


// import components
import Expantion from "../../../../common/components/Expantion";
import Breadcrumb from "../../../../common/components/Breadcrumb";
import CarItem from "../../../../common/car-list/CarItem";
import Feature from "./components/Feature";
import Spec from "./components/Spec";
import MechanicalInspection from "./components/MechanicalInspection";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "../../../../common/car-list/car_list.css";
// import services

import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { browseActions } from '../../store/actions'
import { getDetailData } from '../../service'

const arrDetailData= {
		"vehicle_data":
		{
			"id":1,
			"accidents":0,
			"cylinders":"4WD-6 Cliynders",
			"description":"In hac habitasse platea dictumest. viva,is adipiscing fementum auam voulpat aliquam. Integer et elit eget elit facillis tristique. Nam vel iaculis mauris. Sed ulla,corper tellus erat. non ultrices sem tincidunt euismod. fusce rhoncus porttitor velit. eu bibendu, nibh aliquet vel. fusce lorem leo. vehicula at mobhquis. facilisis accuman turpis",
			"features":{
				"Safety":["Brake Assist","Tore Pressure Monitor"],
				"Comfortable":["A/C","Cloth Seats"],
				"Technology":["Premium Sound System","Auto-DimmingRearview Nirrow"],
				"Exterior":["Convertible Hardtop","Convertible Softtop"],
				"Inbox":["Convertible Hardtop","Convertible Softtop"],
				"Local":["Convertible Hardtop","Convertible Softtop"]
			},
			"fuel_type":"Gasonline","gear_box":"Automatics",
			"image_paths":["./imgs/car_audi.png",
							"./imgs/car_audiTT.png",
							"./imgs/car_audi.png",
							"./imgs/car_audiTT.png",
							"./imgs/car_audi.png",
							"./imgs/car_audi.png",
							"./imgs/car_audi.png",
							"./imgs/car_audi.png",
							"./imgs/car_bmw.png",
							"./imgs/car_audi.png",
							"./imgs/car_bmw.png",
							"./imgs/car_bmw.png",
							"./imgs/car_audi.png",
							"./imgs/car_audi.png"],
			"interior_image_paths":["./imgs/car_audi.png",
									"./imgs/car_audiTT.png",
									"./imgs/car_audi.png",
									"./imgs/car_audiTT.png",
									"./imgs/car_audi.png",
									"./imgs/car_audi.png",
									"./imgs/car_audi.png",
									"./imgs/car_audi.png",
									"./imgs/car_bmw.png",
									"./imgs/car_audi.png",
									"./imgs/car_bmw.png",
									"./imgs/car_bmw.png",
									"./imgs/car_audi.png",
									"./imgs/car_audi.png"],
			"isNew":0,
			"brand_id":1,
			"model_id":1,
			"mechanicals":[
				{"title":"Stationary road test","issue":false},
				{"title":"Driving road test","issue":false},
				{"title":"Brakes & wheels","issue":false},
				{"title":"Body","issue":true,"issue_count":3,
						"issue_details":[
						{
							"pos":{"x":100,"y":10},
							"description":"Donec facukusus tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor",
							"jobs":[{"img":"./imgs/details-car-paint.png","title":"Paint Job"},
									{"img":"./imgs/details-car-body-panel.png","title":"Body panel alignment"},
									{"img":"./imgs/details-car-minor-body.png","title":"Minor body repair"}]
						},
						{
							"pos":{"x":100,"y":10},"description":"Donec facukusus tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor",
							"jobs":[{"img":"./imgs/details-car-paint.png","title":"Paint Job"},
							{"img":"./imgs/details-car-body-panel.png","title":"Body panel alignment"},
							{"img":"./imgs/details-car-minor-body.png","title":"Minor body repair"}]},
						{
							"pos":{"x":100,"y":10},
							"description":"Donec facukusus tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor",
							"jobs":[{"img":"./imgs/details-car-paint.png","title":"Paint Job"},
							{"img":"./imgs/details-car-body-panel.png","title":"Body panel alignment"},
							{"img":"./imgs/details-car-minor-body.png","title":"Minor body repair"}]}]},
				{"title":"Under hood","issue":false},{"title":"Suspension","issue":false},
				{"title":"Underbody","issue":false}
			],
			"category_id":2,
			"mileage":5265,
			"mpg_city":16,
			"mpg_hwy":21,
			"owner_id":1,
			"price":20000,
			"seats":4,
			"specs":[{"VIN":"1C4IDKFE34EFE2344","Keys":"1"},
					{"Exterior":"Granite Crystal Metallic","interior":"Black"},
					{"Engine disolacement":"3.6liter","Torque":"260 torque @ 4800RPM"},
					{"Fuel type":"Gasonline","Fuel tank capacity":"22.5gal"},
					{"L-W-H":"145in * 234 8n * 234in"},
					{"Front leg room": "41.0in","Front head room": "41.0in","Back leg room": "41.0in","Back head room": "41.0in"}],
			"updated_at":null,
			"year":2018,
			"brand_title":"BMW",
			"model_title":"Mercedes-Benz C63",
			"category_title":"Suv",
			"created_at":null
		},
		"similar":[],
		"faq":[],
}

const detail_path_data=[
	{
		path:'/browse',
		name:"Browse Cars",
	}
]


class Page extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
	}

	constructor(props){
		super(props);

		this.state = {
			b_booking:"select",
			b_chat:"unselect",
			region:"marocco",
			port:"default",
			send_msg:"",
			vehicle_data:arrDetailData.vehicle_data,
			similars:[],
			faq:[],
			book_price:500,
			delivery_price:1250,
			path_data:detail_path_data,
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		const detaildata = nextProps.detaildata;
		this.setState({vehicle_data:detaildata.vehicle_data});
		this.setState({similars:detaildata.similar});
		this.setState({faq:detaildata.faq});
    }

	UNSAFE_componentWillMount(){
	    // this.props.dispatch(browseActions.get_DetailData(arrDetailData));
	    this.props.dispatch(getDetailData(this.props.match.params.id));
	}

	handleConvert_Book_Chat = (event) =>{
		this.setState({b_booking:"unselect"});
		this.setState({b_chat:"select"});
	}

	handleConvert_Chat_Book = (event) =>{
		this.setState({b_chat:"unselect"});
		this.setState({b_booking:"select"});
	}

	handleChange_Region = (event) => {
  	this.setState({region : event.target.value});
	  };

  	handleChange_Port = (event) => {
	  	this.setState({port : event.target.value});
  	};

  	handleChange_Msg = (name,value) => {
	  	this.setState({[name]:value});
  	};

  	renderSimilarCar = (similar_cars) =>
	  	similar_cars.map((item,key) => {
	  		return(
                <CarItem parent="Favor" car_data={item} key={key}/>
			);
  		});

	renderFeatures = (features) =>
		Object.keys(features).map((key) => {
			const unique = Object.keys(features).indexOf(key);
	  		return(
                <Feature title={key} content={features[key]} key={unique}/>
			);
  		});

  	renderSpec = (specs) =>
  		specs.map((item, key) => {
  			return (
  				<Spec key={key} contents={item}/>
			)
  		});

  	renderMechanicalInpection = (minspections) =>
  		minspections.map((item, key) => {
  			return (
  				<MechanicalInspection contents={item} key={key}/>
			);
  		});

	render() {
		const {send_msg} = this.state;
			return(
				<div className="container detailpage">
					<Breadcrumb path_data={this.state.path_data} current_path={this.state.vehicle_data.model_title}/>
					<div className="row details_section">
						<div className="col-md-9 shadow_box">
							<div className="row">
								<img src="./imgs/details-car.png" width="100%" className="gallery_container"/>
							</div>
							<div className="col-md-12 detail_brief">
								<div className="row">
									<div className="col-md-6 detail_brief_left">
										<h3>{this.state.vehicle_data.model_title}<span>{this.state.vehicle_data.year}</span></h3>
									</div>
									<div className="col-md-6 detail_brief_right">
										<div className="row">
											<div className="col-md-6">
												<div className="price">
													<label>Price</label>
													<h5>${this.state.vehicle_data.price}</h5>
												</div>
											</div>
											<div className="col-md-6">
												<Button
													variant="outlined"
													className="details-section-1-livechat quote_btn"
												>
												Get Quotation
												</Button>
											</div>
										</div>
									</div>
									<div className="col-md-12 description">
											<p>In hac habitasse platea dictumest. viva,is adipiscing fementum auam voulpat aliquam. Integer et elit eget elit facillis tristique. Nam vel iaculis mauris. Sed ulla,corper tellus erat. non ultrices sem tincidunt euismod. fusce rhoncus porttitor velit. eu bibendu, nibh aliquet vel. fusce lorem leo. vehicula at mobhquis. facilisis accuman turpis</p>
									</div>
									<div className="block_divider"></div>
								</div>
							</div>
							<div className="col-md-12 detail_overview">
								<div className="row">
									<div className="col-md-12">
										<h4>Overview</h4>
									</div>
									<div className="col-md-12 details_overview_content">
										<div className="detail_overview_item">
											<div className="detail_overview_item_left">
												<img src="./imgs/details-item-1.png" width="100%" />
											</div>
											<div className="detail_overview_item_right">
												<p>{this.state.vehicle_data.mileage} miles</p>
											</div>
										</div>
										<div className="detail_overview_item big">
											<div className="detail_overview_item_left">
												<img src="./imgs/details-item-2.png" width="100%" />
											</div>
											<div className="detail_overview_item_right">
												<p>{this.state.vehicle_data.gear_box}</p>
												<p>{this.state.vehicle_data.cylinders}</p>
											</div>
										</div>
										<div className="detail_overview_item">
											<div className="detail_overview_item_left">
												<img src="./imgs/details-item-3.png" width="100%" />
											</div>
											<div className="detail_overview_item_right">
												<p>{this.state.vehicle_data.mpg_city} mpg city</p>
												<p>{this.state.vehicle_data.mpg_hwy} mpg hwy</p>
											</div>
										</div>
										<div className="detail_overview_item">
												<div className="detail_overview_item_left">
														<img src="./imgs/details-item-4.png" width="100%" />
												</div>
												<div className="detail_overview_item_right">
														<p>{this.state.vehicle_data.seats} seats</p>
												</div>
										</div>
										<div className="detail_overview_item">
											<div className="detail_overview_item_left">
													<img src="./imgs/details-item-5.png" width="100%" />
											</div>
											<div className="detail_overview_item_right">
												<p>{this.state.vehicle_data.owner_id} owner</p>
												<p>{this.state.vehicle_data.accidents} accidents</p>
											</div>
										</div>
									</div>
									<div className="block_divider"></div>
								</div>
							</div>
							<div className="col-md-12 detail_features">
								<div className="row">
									<div className="col-md-12">
										<h4>Features</h4>
									</div>
									<div className="col-md-12 detail_features_content">
										{this.renderFeatures(this.state.vehicle_data.features)}
									</div>
									<div className="col-md-12">
										<span className="show_all_link">
							    			<Link to="/blog">
							    				Show All
							    				<ArrowForwardIcon />
							    			</Link>
							    		</span>
									</div>
									<div className="block_divider"></div>
								</div>
							</div>
							<div className="col-md-12 detail_specs">
								<div className="row">
									<div className="col-md-12">
										<h4>Specs</h4>
									</div>
									{this.renderSpec(this.state.vehicle_data.specs)}
									<div className="block_divider"></div>
								</div>
							</div>
							<div className="col-md-12 detail_mechanical">
								<h4>Mechanical Inspection</h4>
								<div className="row mechanical_content">
									<div className="col-md-4">
										{this.renderMechanicalInpection(this.state.vehicle_data.mechanicals)}
									</div>
									<div className="col-md-8 mechanical_right">
										<img src="./imgs/details-car-category.png" />
										<p>In hac habitasse platea dictumest. viva,is adipiscing fementum auam voulpat aliquam. Integer et elit eget elit facillis tristique. Nam vel iaculis mauris. Sed ulla,corper tellus erat. non ultrices sem tincidunt euismod. fusce rhoncus porttitor velit. eu bibendu, nibh aliquet vel. fusce lorem leo. vehicula at mobhquis. facilisis accuman turpis</p>
										<div className="right_action">
											<div className="action_item">
												<img src="./imgs/details-car-paint.png" />
												<p>Paint job</p>
											</div>
										</div>
										<div className="right_action">
											<div className="action_item">
												<img src="./imgs/details-car-body-panel.png" />
												<p>Body panel alignment</p>
											</div>
										</div>
										<div className="right_action">
											<div className="action_item">
												<img src="./imgs/details-car-minor-body.png" />
												<p>Minor body repair</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className={this.state.b_booking+" detail_booking"}>
								<h4>Booking</h4>
								<div className="select_section">
									<Select
				                      	labelId="label"
				                      	id="select_region"
				                      	value={this.state.region}
				                      	variant="outlined"
				                      	onChange={this.handleChange_Region.bind(this)}>
									    <MenuItem value="marocco">Marocco</MenuItem>
									</Select>
									<Select
				                      	labelId="label"
				                      	id="select_port"
				                      	value={this.state.port}
				                      	variant="outlined"
				                      	onChange={this.handleChange_Port.bind(this)}>
									  <MenuItem value="default">Some port's name...</MenuItem>
									</Select>
								</div>
								<div className="booking_option">
									<div className="booking_option_item">
										<div className="item_left">
											<label>Start price</label>
										</div>
										<div className="item_right">
											<label>${this.state.vehicle_data.price}</label>
										</div>
									</div>
									<div className="booking_option_item">
										<div className="item_left">
											<label>Booking</label>
										</div>
										<div className="item_right">
											<label>${this.state.book_price}</label>
										</div>
									</div>
									<div className="booking_option_item">
										<div className="item_left">
											<label>Delivery</label>
										</div>
										<div className="item_right">
											<label>${this.state.delivery_price}</label>
										</div>
									</div>
								</div>
								<div className="booking_price">
									<div className="price_left">
										<p>Total price</p>
									</div>
									<div className="price_right">
										<h5>${this.state.vehicle_data.price + this.state.book_price + this.state.delivery_price}</h5>
									</div>
								</div>
								<Link to={{pathname:`/browse/${this.state.vehicle_data.id}/booking`, data:this.state.vehicle_data.model_title}}>
									<Button
										className="btn booking_btn"
										>
										Book
									</Button>
								</Link>
								<Button
									className="btn livechat_btn"
									onClick={this.handleConvert_Book_Chat.bind(this)}
									variant="outlined"
									>
									Ask a Question
								</Button>
							</div>
							<div className={this.state.b_chat+" detail_booking hidden"}>
								<div className="livechat">
									<h4>Live chat</h4>
									<div className="livechat_body">
										<div className="row">
											<div className="col-md-12 chat_section">
												<div className="chat_content">
													<p>Hello Valadyslav! How can we help you?</p>
													<span>13:15</span>
												</div>
											</div>
											<div className="col-md-12 send_section">
												<input type="text" placeholder="type your message..." name="send_msg" value={send_msg} onChange={e => this.handleChange_Msg(e.target.name, e.target.value)}/>
												<Send />
											</div>
										</div>
									</div>
								</div>
								<Button
									className="btn booking_btn"
									onClick={this.handleConvert_Chat_Book.bind(this)}
									>
									Back to Booking
								</Button>
							</div>
						</div>
					</div>
					<div className="row similars_section">
						<h3>Similar Cars</h3>
						<div className="col-md-9">
							<div className="row">
									{this.renderSimilarCar(this.state.similars)}
							</div>
						</div>
					</div>
					<div className="row faq_container">
						<h3>Frequently Asked Questions</h3>
						<div className="col-md-9">
							<Expantion containImage={false} data={this.state.faq}/>
							<span className="show_all_link">
				    			<Link to="/faq">
				    				See all FAQ
				    				<ArrowForwardIcon />
				    			</Link>
				    		</span>
						</div>
					</div>
				</div>
		)
	}
}

const mapStateToProps = state => {
	const {detaildata} = state.browse;
	return{
		detaildata,
	}
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
    }

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Page));

