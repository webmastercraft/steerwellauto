import React, { Component } from "react"
import PropTypes from "prop-types"

import BrandItem from './BrandItem'
import "./brand.css"

import { Link, withRouter } from "react-router-dom"
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { getBrandData } from './service'

class BrandsBlock extends Component {
	constructor( props ) {
	    super( props )

	    this.state = {
	    	carBrands: []
	    }
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		const {brands} = nextProps;
		this.setState({ carBrands: brands})
	}

	UNSAFE_componentWillMount(){
		this.props.dispatch(getBrandData());
	}
  render() {
  	return	(
  		<div className="row popular_brands">
    		<h2 className="title">Popular Brands</h2>
    		<div className="col-md-12">
		    	{this.state.carBrands.map((item, index)=>(
		    		<BrandItem key={index}
		    			logo={item.imagePath}
    					total={item.popular}
		    		/>
		    	))}
	    	</div>
    	</div>
    )}
}

const mapStateToProps = state => {
  const { brands } = state.home_data
    return {
      brands
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
)(withRouter(BrandsBlock));