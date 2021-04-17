import React , { Component } from 'react';
import PropTypes from 'prop-types';
import CheckCircle from '@material-ui/icons/CheckCircle'
import "./bodytype.css";

class BodyType extends Component {
 
  constructor(props) {
    super(props)
    
    this.state = {
      bodytype:"Hatchback",
      //
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const bodytype = nextProps.bodytype;
    this.setState({bodytype : bodytype});
  }
  
  render() {
    return <div className={this.state.bodytype == this.props.clicked? "selected item":"item"} onClick={()=>this.props.handleClickBodyType(this.props.bodytype)}>
            <div className="img_wrapper">
                <img src={this.props.img_url} />
            </div>
            <p>{this.props.bodytype}</p>
            <CheckCircle className="check_icon"/>
          </div>
  }
}

BodyType.propTypes = {
   img_url: PropTypes.string.isRequired,
   bodytype: PropTypes.string.isRequired,
   handleClickBodyType: PropTypes.func.isRequired,
   clicked: PropTypes.string.isRequired,
}

BodyType.defaultProps = {
  img_url: "./imgs/browser-type-1.png",
  bodytype: "Sedan"
}

export default BodyType;

