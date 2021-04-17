import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link, withRouter } from "react-router-dom"
import ImageOver from "../../../../../common/components/ImageOver";
import "./top_offers.css"

import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { getTopOffers } from './service'

class TopOffers extends Component {
	constructor( props ) {
	    super( props )

	    this.state = {
	    	selectedID : 0,
	    	topOffers: []
	    }

        this.onSelectItemByHover = this.onSelectItemByHover.bind(this);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		const {top_offers} = nextProps;
		this.setState({ topOffers: top_offers})
	}

	UNSAFE_componentWillMount(){
		this.props.dispatch(getTopOffers());
	}

	onSelectItemByHover(number){
		if( number )
			this.setState({ selectedID: number });
		else
			this.setState({ selectedID: 0 });
	}

  	render() {
	  	const { selectedID, topOffers } = this.state;
	  	return <div className="row top_offers">
	    		<h2 className="title">Top Offers
		    		<p>The best top offers special for you</p>
	    		</h2>
	    		<div className="col-md-12 top_offers_container">
	    			<div className="row">
	    				<div className="col-md-5 img_block">
	    					{ topOffers[selectedID] !== undefined ? (
	    						<div>
									<ImageOver
			    						className="full_width top_left"
			    						image_paths={topOffers[selectedID].imagePaths}
			    						carID={topOffers[selectedID].id}
			    					/>
			    					<img src={topOffers[selectedID].imagePaths[1]} className="half_width bottom_left"/>
			    					<img src={topOffers[selectedID].imagePaths[2]} className="half_width"/>
			    				</div>
		    					) : ('')
		    				}
	    				</div>
	    				<div className="col-md-7 info_block">
    						{topOffers.map((item, index)=>(
    							( index < 4 ) ? (
								<div className="top_offer_item" key={index} onClick={() => this.onSelectItemByHover(index) }>
		    						<div className="offer_info">
		    							<span className="title">{item.modelTitle}</span>
		    							<span className="tag">{item.category_title}</span>
					                	<span className="tag">{item.isNew ? 'New' : 'Used Car'}</span>
					                	<span className="tag">{item.brand_title}</span>
		    							<div className="offers-item-distance">
						                  {item.mileage}km
						                </div>
		    						</div>
		    						<div className="offer_book">
		    							<Link className='book_button' to={"/browse/" + item.id + "/details"}>Book</Link>
		    						</div>
		    					</div>) : ''
					    	))}
	    				</div>
	    			</div>
	    		</div>
	    	</div>
  	}
}

const mapStateToProps = state => {
  const { top_offers } = state.home_data
    return {
      top_offers
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
)(withRouter(TopOffers));
