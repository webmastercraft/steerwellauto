import React , { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import ImageOver from "../../../../common/components/ImageOver";

class SearchContent extends Component {

  constructor(props) {
	super(props)
  }

  render() {
	return <div className="row searchresult_item" >
			<div className="col-md-4 searchresult_item_image">
			  	<ImageOver image_paths={this.props.result.image_paths} carID={this.props.result.id}/>
			</div>
			<div className="col-md-5 searchresult_item_description">
			  	<div className="searchresult_item_title">
			  		<label>{this.props.result.model_title}</label>
			  	</div>
			  	<div className="row searchresult_item_type">
					<ul>
						<li>
							<label>{this.props.result.category_title}</label>
					  	</li>
						<li>
							<label>{this.props.result.isNew ? 'New' : 'Used Car'}</label>
						</li>
						<li>
							<label>{this.props.result.brand_title}</label>
						</li>
					</ul>
				</div>
				<div className="row searchresult_item_property">
					<div className="col-md-3 col-sm-6">
					  	<label className="searchresult_item_property_name">
							Kilometers
					  	</label>
					  	<label className="searchresult_item_property_value">
							{this.props.result.mileage}
					  	</label>
					</div>
					<div className="col-md-2 col-sm-6">
					  	<label className="searchresult_item_property_name">
							Year
					  	</label>
					  	<label className="searchresult_item_property_value">
							{this.props.result.year}
					  	</label>
					</div>
					<div className="col-md-3 col-sm-6">
					  	<label className="searchresult_item_property_name">
							Gear Box
					  	</label>
					  	<label className="searchresult_item_property_value">
							{this.props.result.gear_box}
					  	</label>
					</div>
					<div className="col-md-3 col-sm-6">
					  	<label className="searchresult_item_property_name">
							Fuel Type
					  	</label>
					  	<label className="searchresult_item_property_value">
							{this.props.result.fuel_type}
					  	</label>
					</div>
				</div>
			</div>
			<div className="col-md-3 col-sm-2 searchresult_item_price">
			  	<div className="searchresult_item_price_content">
					<label>${this.props.result.price}</label>
					<Link to={`browse/detail/${this.props.result.id}`}>
					  	<Button
							variant="contained"
							className="browser_section_left_item_apply"
							>
							Details
						</Button>
					</Link>
			  	</div>
			</div>
		</div>
  }
}

SearchContent.propTypes = {
  result: PropTypes.object.isRequired,
}

SearchContent.defaultProps = {
  result:
  {
	image_paths: [
		"./imgs/car_audi.png",
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
		"./imgs/car_audi.png",
	  ],
	  id: 6,
	  model_title: "Mercedes-Benz C63 2016",
	  mileage: 5265,
	  year: 2016,
	  gear_box: "Automatic",
	  fuel_type: "Gasoline",
	  price: 20000,
	  category_title:"Hachback",
	  brand_title:"BMW",
	  isNew:0,
  },
}

export default SearchContent;

