import React, { Component } from 'react'
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

class ModelItem extends Component {
  constructor( props ) {
    super( props )

    this.state = {
    	logo: props.logo,
    	title: props.title,
      slug: props.slug
    }
  }

  render() {
  	const { logo, title, slug } = this.state;

    // TODO: make search link from slug
    const link = "/browse";

    return <div className="col-sm-5ths">
            <Link to={link}>
              <img className="catergory-section-item-image" src={logo}/>
              <span className="catergory-section-item-text">{title}</span>
            </Link>
        </div>
  }
}

ModelItem.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
}

// Set default props
ModelItem.defaultProps = {
	logo: "/static/img/category-car.png",
	title: "SUV",
	slug: "suv"
};
export default ModelItem;
