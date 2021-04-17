import React , { Component } from 'react';
import PropTypes from 'prop-types';

class Spec extends Component {
 
  constructor(props) {
    super(props)
    
    this.state = {
        spec_contents:{},
    }

  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({spec_contents : nextProps.contents});
  }

  renderSpecContent = (contents) =>
  	Object.keys(contents).map((key) => {
			const unique = Object.keys(contents).indexOf(key);
	  		return(
  				<div className="detail_spec_item" key={unique}>
	  				<h5>{key}</h5>
	  				<p>{contents[key]}</p>
	  			</div>
			);
  		});

  render() {
    return(
    <div className="col-md-12">
		{this.renderSpecContent(this.state.spec_contents)}
		</div>
    );
  }
}

Spec.propTypes = {
    contents: PropTypes.object.isRequired,
}

Spec.defaultProps = {
    contents : {},
}

export default Spec;

