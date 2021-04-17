import React, { Component, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";

import { Link, withRouter } from "react-router-dom"
import CarItem from './CarItem';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./car_list.css"

import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { getRecentAdded } from './service'

class HomepageCarCarousel extends Component {
	constructor( props ) {
	    super( props )

	    let init_columns = 1;

	    let width = window.innerWidth, height = window.innerHeight;
		if( width > 992 )
			init_columns = 4
		if( width < 992 && width >= 768 )
			init_columns = 2
		if( width < 768 && width >= 576 )
			init_columns = 1
		if( width < 576 )
			init_columns = 1

		this.state = {
			recentItems: [],
	    	width: 0,
	    	height: 0,
	    	columns : init_columns
	    }
	}

	updateDimensions = () => {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
		if( this.state.width > 992 && this.state.columns != 4 )
			this.setState({ columns: 4});
		if( this.state.width < 992 && this.state.width >= 768 && this.state.columns != 2)
			this.setState({ columns: 2});
		if( this.state.width < 768 && this.state.width >= 576 && this.state.columns != 1)
			this.setState({ columns: 1});
		if( this.state.width < 576 && this.state.columns != 1 )
			this.setState({ columns: 1 });
	};
	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
	}
	UNSAFE_componentWillReceiveProps(nextProps) {
		const {recent_items} = nextProps;
		this.setState({ recentItems: recent_items})
	}
	UNSAFE_componentWillMount() {
		window.removeEventListener('resize', this.updateDimensions);
		this.props.dispatch(getRecentAdded());
	}

  	render() {
  		let result = [], count_slide = 0;
  		const CarList = this.state.recentItems;
  		{CarList.map((item, index)=>{
    		if( index % this.state.columns === 0 ){
   				let itemGroup = [];
    			for( var i = 0; i<this.state.columns; i++ ){
    				if( typeof CarList[index+i] !== "undefined" )
    					itemGroup.push(
    						<CarItem
    							key={ count_slide++ }
    							id={CarList[index+i]['id']}
    							model_title={CarList[index+i]['modelTitle']}
    							image_paths={CarList[index+i]['imagePaths']}
    							year={CarList[index+i]['year']}
    							price={CarList[index+i]['price']}
    							category_title={CarList[index+i]['categoryTitle']}
    							brand_title={CarList[index+i]['brandTitle']}
    							gearbox={CarList[index+i]['gearBox']}
    							mileage={CarList[index+i]['mileage']}
    							isNew={CarList[index+i]['isNew']}
    							parent="Home"
    						/>
    					);
    			}
    			result.push(
        			<div className="row" key={index}>
						<img src="/imgs/1.jpg"/>
	    				{itemGroup}
					</div>)
			}
    	})};

  		return	<Carousel className="HomeCarSlide"
			  		showThumbs={false}
			  		showStatus={false}>
                    { result }
            </Carousel>
  	}
}

const mapStateToProps = state => {
  const { recent_items } = state.home_data
    return {
      recent_items
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
)(withRouter(HomepageCarCarousel));