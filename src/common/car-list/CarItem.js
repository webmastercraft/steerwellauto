import React, { Component } from 'react'
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import ImageOver from "../components/ImageOver";

// import css
import "./car_item.css";

class CarItem extends Component {
  constructor( props ) {
    super( props )
    this.state = {
    	// TODO : handle all fields here
    	id: this.props.id,
    	model_title: this.props.model_title,
    	images: this.props.image_paths,
    	year: this.props.year,
    	price: this.props.price,
    	category_title: this.props.category_title,
    	brand_title: this.props.brand_title,
    	gearbox: this.props.gearbox,
    	mileage: this.props.mileage,
    	isNew: this.props.isNew
    }
  }

  render() {
  	const { id, model_title, year, price, images, brand_title, category_title, gearbox, mileage, isNew } = this.state;
  	if(this.props.parent == "Home")
	{
		return (
			<div className="col-lg-3 col-md-6 col-sm-12 car-list-item">
    			<ImageOver
    				image_paths={images}
    				carID={id}
				/>
				<div className="car-info-wrapper col-md-12">
	    			<div className="car-item-title" >
	                  {model_title}
	                </div>
	                <div className="car-item-tags">
	                	<span>{category_title}</span>
	                	<span>{isNew ? 'New' : 'Used Car'}</span>
	                	<span>{brand_title}</span>
	                </div>
	                <div className="car-item-kilo info_grid">
	                	<label>Kilometers</label>
	                	<span>{ mileage }</span>
	                </div>
	                <div className="car-item-year info_grid">
	                	<label>Year</label>
	                	<span>{year}</span>
	                </div>
	                <div className="car-item-gear info_grid">
	                	<label>Gear box</label>
	                	<span>{gearbox}</span>
	                </div>
	                <div className="car-item-price ">
	                	<label>${price}</label>
	                	<span><Link className='book_button' to={{pathname:`/browse/${id}/booking`, data:model_title}}>Book</Link></span>
	                </div>
	            </div>
			</div>
			);
	}
    else if(this.props.parent == "Favor")
    {
    	return (
			<div className="col-lg-4 col-md-4 col-sm-6 car-list-item">
    			<ImageOver
    				image_paths={images}
    				carID={id}
				/>
				<div className="car-info-wrapper col-md-12">
	    			<div className="car-item-title" >
	                  {model_title}
	                </div>
	                <div className="car-item-tags">
	                	<span>{category_title}</span>
	                	<span>{isNew ? 'New' : 'Used Car'}</span>
	                	<span>{brand_title}</span>
	                </div>
	                <div className="car-item-kilo info_grid">
	                	<label>Kilometers</label>
	                	<span>{ mileage }</span>
	                </div>
	                <div className="car-item-year info_grid">
	                	<label>Year</label>
	                	<span>{year}</span>
	                </div>
	                <div className="car-item-gear info_grid">
	                	<label>Gear box</label>
	                	<span>{ gearbox }</span>
	                </div>
	                <div className="car-item-price ">
	                	<label>${price}</label>
	                	<span><Link className='book_button' to={{pathname:`/browse/${id}/booking`, data:model_title}}>Book</Link></span>
	                </div>
	            </div>
			</div>
			);
    }
    else
    {
    	return <div></div>
    }
  }
}

CarItem.propTypes = {

}
CarItem.defaultProps = {
	id: 100,
	model_title: "Mercedes-Benz C63 2016",
	image_paths:["./imgs/car_audi.png",
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
	year: 2018,
	price: "20,222",
	parent: "Home",
	category_title: "Sedan",
	brand_title: "BMW",
	gearbox:"Automatic",
	mileage: "12,233",
	isNew: true
};

export default CarItem;
