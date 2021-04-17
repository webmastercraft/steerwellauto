import React , { Component } from 'react';
import PropTypes from 'prop-types';

class MechanicalInspection extends Component {
 
  constructor(props) {
    super(props)
    
    this.state = {
        minspection_contents:{},
    }

  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({minspection_contents : nextProps.contents});
  }

  render() {
    return(
		  <div className="content_list_item">
          <label>{this.state.minspection_contents.title}</label>
          <img src={this.state.minspection_contents.issue == false ? "./imgs/details-check-1.png":""} />
      </div>
    );
  }
}

MechanicalInspection.propTypes = {
    contents: PropTypes.object.isRequired,
}

MechanicalInspection.defaultProps = {
    contents : {
      title:"",
      issue:"",
    },
}

export default MechanicalInspection;

