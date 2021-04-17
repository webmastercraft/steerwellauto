import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

const elStyle = {
  marginBottom: '20px',
}

class BrandItem extends Component {
  constructor( props ) {
    super( props )

    this.state = {
    	logo: props.logo,
    	link: props.link,
    	total: props.total
    }
  }

  render() {
  	const { logo, link, total } = this.state;
    return <div className="brand_item_wrapper">
              <Link to={link} className="img_wrapper">
                <div>
                  <img className="popular_brand_logo" src={logo}/>
                </div>
                <h4>{total}</h4>
              </Link>
            </div>
  }
}

BrandItem.propTypes = {
  logo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  total: PropTypes.any.isRequired
}

// Set default props
BrandItem.defaultProps = {
	logo: "/static/img/avatar.png",
	link: "/browse",
	total: "1,243"
};
export default BrandItem;
