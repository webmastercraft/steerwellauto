import React, { Component } from 'react'
import PropTypes from "prop-types"

import "./review_item.css";

const elStyle = {
  marginBottom: '20px',
}

class ReviewItem extends Component {
  constructor( props ) {
    super( props )

    this.state = {
    	user_logo: props.logo,
    	rating: props.rating,
    	review_user: props.name,
    	review_desc: props.desc
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      user_logo: nextProps.logo,
      rating: nextProps.rating,
      review_user: nextProps.name,
      review_desc: nextProps.desc
    })
  }
  render() {
  	const { user_logo, rating, review_user, review_desc } = this.state;
    return <div className="col-lg-4 col-md-4" style={elStyle}>
		  <div className="review_item">
      	<div className="user_wrap">
        	<div className="user_photo">
           	<img src={user_logo}/>
        	</div>
        	<div className="user_rating">
        		{_.times( rating, i =>
              <img key={i} src="/static/img/rating_yes.png"/>
            )}
            {_.times( 5-rating, i =>
              <img key={i} src="/static/img/rating_no.png"/>
            )}
        	</div>
      	</div>
			<div className="user_name">
				{ review_user } <span>reviewed</span> Steer Well Auto
			</div>
      	<p className="user_description">
      		{ review_desc }
      	</p>
      </div>
	  </div>
  }
}

ReviewItem.propTypes = {
  logo: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

// Set default props
ReviewItem.defaultProps = {
	logo: "/static/img/avatar.png",
	rating: 3,
	name: "Hironaka Hiroe",
	desc: "In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volupat aliquam. Integer et elit eget elit facilisis"
};
export default ReviewItem;
