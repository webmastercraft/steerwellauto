import React, { Component } from "react"
import PropTypes from "prop-types"
import ScrollDown from '../../../../common/scroll-down/index'
import HomeModels from '../../../../common/car-model/HomeModels'
import BrandsBlock from '../../../../common/popular_brands/BrandsBlock'
import ReviewBlock from '../../../../common/review/ReviewBlock'
import HomepageCarCarousel from '../../../../common/car-list/HomepageCarCarousel'
import TopOffers from './home_components/TopOffers'
import LatestNews from './home_components/LatestNews'

import {Link} from "react-router-dom"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SearchBar from '../../../../common/components/SearchBar';

// import components
import "../../../../common/navigation/main.css"
import "./home_comp.css"

class Home extends Component {
  static displayName = "HomePage"
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return <div className="homepage">
      	<div className="home modal-open">
	        <div className="row background">
	            <div className="search_bar">
	              <h1> The easiest way to buy a car</h1>
	              <SearchBar/>
	            </div>
	        </div>
	        <ScrollDown />
	    </div>
	    <div className="container homepage_contents" id="home_content">
	    	<div className="row how_work">
	    		<h2 className="title">How We Work</h2>
	    		<div className="how_work_item">
	    			<div className="img_wrapper"><img className="work-section-content-item-image" src="/static/img/car.png" /></div>
	    			<h4>Choose</h4>
	    			<p>Lorem ipsum dolor sit amat</p>
	    		</div>
	    		<div className="how_work_item">
	    			<div className="img_wrapper"><img className="work-section-content-item-image" src="/static/img/book.png" /></div>
	    			<h4>Book</h4>
	    			<p>Lorem ipsum dolor sit amat</p>
	    		</div>
	    		<div className="how_work_item">
	    			<div className="img_wrapper"><img className="work-section-content-item-image" src="/static/img/pay.png" /></div>
	    			<h4>Pay</h4>
	    			<p>Lorem ipsum dolor sit amat</p>
	    		</div>
	    		<div className="how_work_item">
	    			<div className="img_wrapper"><img className="work-section-content-item-image" src="/static/img/track.png" /></div>
	    			<h4>Track</h4>
	    			<p>Lorem ipsum dolor sit amat</p>
	    		</div>
	    		<div className="how_work_item">
	    			<div className="img_wrapper"><img className="work-section-content-item-image" src="/static/img/get.png" /></div>
	    			<h4>Get</h4>
	    			<p>Lorem ipsum dolor sit amat</p>
	    		</div>
	    	</div>
	    	<HomeModels />
	    	<div className="row recent_added">
	    		<h2 className="title">Recently Added
		    		<p>Discover all recently added cars</p>
	    		</h2>
	    		<div className="col-md-12">
	    			<HomepageCarCarousel />
	    		</div>
	    	</div>
	    	<BrandsBlock />
	    	<TopOffers />
	    	<LatestNews />
	    	<ReviewBlock />
	    </div>
    </div>
  }
}

export default Home
