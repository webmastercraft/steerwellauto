import React, { Component } from "react"
import PropTypes from "prop-types"
import { Carousel } from 'react-responsive-carousel'
import { Link, withRouter } from "react-router-dom"

import ReviewItem from './ReviewItem'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../car-list/car_list.css"
import "./review_item.css"

import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { getReviews } from './service'

class ReviewBlock extends Component {
	constructor( props ) {
	    super( props )

	    this.state = {
	    	columns: 3,
	    	reviews: []
	    }
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({ reviews: nextProps.reviews})
	}

	UNSAFE_componentWillMount(){
		this.props.dispatch(getReviews());
	}

  	render() {
  		let result = [];
  		const Reviews = this.state.reviews
		{Reviews.map((review, index)=>{
    		if( index % this.state.columns === 0 ) {
   				let item = [];
    			for( var i = 0; i<this.state.columns; i++ ) {
    				if( typeof Reviews[index+i] !== "undefined" )
    					var review_data = Reviews[index+i]
    					item.push(
    						<ReviewItem
				  				key={i}
								logo={review_data.avatarPath}
								rating={review_data.rating}
								name={review_data.name}
								desc={review_data.description}
							/>
    					);
    			}
				result.push(
    			<div className="row" key={index}>
    				{item}
				</div>)
			}
    	})};

  		return	<div className="row customer_review">
		    		<h2 className="title">Customer Reviews</h2>
			    	<Carousel className="HomeCarSlide"
				  		showThumbs={false}
				  		showStatus={false}>
	                    { result }
	           		</Carousel>
		    	</div>
  	}
}

const mapStateToProps = state => {
  const { reviews } = state.home_data
    return {
      reviews
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
)(withRouter(ReviewBlock));
