import React, { Component } from "react"
import PropTypes from "prop-types"

import { Link, withRouter } from "react-router-dom"
import ModelItem from './ModelItem'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import "./car_model.css"

import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { getCategoryData } from './service'

class HomeModels extends Component {
	constructor( props ) {
	    super( props )

	    this.state = {
	    	carCategories: []
	    }
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		const {categories} = nextProps;
		this.setState({ carCategories: categories})
	}

	UNSAFE_componentWillMount(){
		this.props.dispatch(getCategoryData());
	}

  render() {
  	return	<div className="row catergory_section">
	    		<h2 className="title">Browse Categories
		    		<span className="show_all_link">
		    			<Link to="/browse">
		    				Show All
		    				<ArrowForwardIcon />
		    			</Link>
		    		</span>
	    		</h2>
		    	{this.state.carCategories.map((item, index)=>(
		    		( index < 5 ) ? (
		    		<ModelItem key={index}
		    			logo={item.imagePath}
		    			title={item.title}
		    			slug={item.title}
		    		/>) : ''
		    	))}
	    	</div>
  	}
}

const mapStateToProps = state => {
  const { categories } = state.home_data
    return {
      categories
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
)(withRouter(HomeModels));