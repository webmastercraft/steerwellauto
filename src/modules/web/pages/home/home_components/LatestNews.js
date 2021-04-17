import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link, withRouter } from "react-router-dom"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import "./latest_news.css"
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { getLatestNews } from './service'

class LatestNews extends Component {
	constructor( props ) {
	    super( props )

	    this.state = {
	    	NewsList: []
	    }
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({ NewsList: nextProps.latest_news})
	}

	UNSAFE_componentWillMount(){
		this.props.dispatch(getLatestNews());
	}
  render() {
  	const {NewsList} = this.state;
  	return	<div className="row latest_news">
	    		<h2 className="title">Latest News
		    		<span className="show_all_link">
		    			<Link to="/blog">
		    				Show All
		    				<ArrowForwardIcon />
		    			</Link>
		    		</span>
	    		</h2>
	    		{ NewsList.length > 3 ? (
	    		<div className="col-lg-12 latest_news_container">
	    			<div className="news_item left full_width">
	    				<div className="col-lg-6">
	    					<div className="news-item-wide-img img_container" style={{backgroundImage: `url(${NewsList[0].imagePath})`}}></div>
	    				</div>
	    				<div className="col-lg-6">
	    					<p className="post_date">
	    						{NewsList[0].publishedAt}
	    					</p>
	    					<h3 className="title">
	    						<Link to={"/blog/" + NewsList[0].id + "/article"}>{NewsList[0].title}</Link>
	    					</h3>
	    					<p className="brief">
	    						{NewsList[0].description}
	    					</p>
	    					<Link to={"/blog/" + NewsList[0].id + "/article"}>Learn more <ArrowForwardIcon/></Link>
	    				</div>
	    			</div>
	    			<div className="news_item left half_width">
	    				<div className="col-lg-4">
	    					<div className="news-item-img img_container" style={{backgroundImage: `url(${NewsList[1].imagePath})`}}></div>
	    				</div>
	    				<div className="col-lg-8">
	    					<p className="post_date">
	    						{NewsList[1].publishedAt}
	    					</p>
	    					<h3 className="title">
	    						<Link to={"/blog/" + NewsList[1].id + "/article"}>{NewsList[1].title}</Link>
	    					</h3>
	    					<p className="brief">
	    						{NewsList[1].description}
	    					</p>
	    				</div>
	    			</div>
	    			<div className="news_item right half_width">
	    				<div className="col-lg-12">
	    					<div className="news-item-img img_container" style={{backgroundImage: `url(${NewsList[2].imagePath})`}}></div>
	    					<p className="post_date">{NewsList[2].publishedAt}</p>
	    					<h3 className="title">
	    						<Link to={"/blog/" + NewsList[2].id + "/article"}>{NewsList[2].title}</Link>
	    					</h3>
	    					<p className="brief">
	    						{NewsList[2].description}
	    					</p>
	    					<Link to="/blog/10/article">Learn more <ArrowForwardIcon/></Link>
	    				</div>
	    			</div>
	    			<div className="news_item left half_width">
	    				<div className="col-lg-4">
	    					<div className="news-item-img img_container" style={{backgroundImage: `url(${NewsList[3].imagePath})`}}></div>
	    				</div>
	    				<div className="col-lg-8">
	    					<p className="post_date">
	    						{NewsList[3].publishedAt}
	    					</p>
	    					<h3 className="title">
	    						<Link to={"/blog/" + NewsList[3].id + "/article"}>{NewsList[3].title}</Link>
	    					</h3>
	    					<p className="brief">
	    						{NewsList[3].description}
	    					</p>
	    				</div>
	    			</div>
	    		</div>) : ''
	    		}
	    	</div>
  	}
}

const mapStateToProps = state => {
  const { latest_news } = state.home_data
    return {
      latest_news
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
)(withRouter(LatestNews));