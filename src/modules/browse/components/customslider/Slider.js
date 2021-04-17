import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import "./slider.css";
import { Input } from '@material-ui/core';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { browseActions } from '../../store/actions'

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const AirbnbSlider = withStyles({
  root: {
    color: '#2499f3',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 18,
    width: 18,
    backgroundColor: '#2499f3',
    marginTop: -8,
    marginLeft: -10,
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);

const minLimit = 0;
const maxLimit = 100000;
class CustomSlider extends Component{
  static propTypes = {
      dispatch: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      min_value: minLimit,
      max_value: maxLimit,
      mileage_value_min: 0,
      mileage_value_max: 0,
      price_value_min: 0,
      price_value_max: 0,
    }

    this.handleSlider = this.handleSlider.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { mileage_min, mileage_max, price_min, price_max } = nextProps;
    if (mileage_min && mileage_max && price_min && price_max) {
      if(this.props.slider_type == 'mileage')
      {
        this.setState({min_value:mileage_min});
        this.setState({max_value:mileage_max});
      } else {
        this.setState({min_value:price_min});
        this.setState({max_value:price_max});
      }
    }
  }

  UNSAFE_componentWillMount() {
  }

  handleSlider = (event, value) => {
    if( value )
    {
      if(this.props.slider_type == 'mileage') {
        this.setState({ mileage_value_min: value[0], mileage_value_max: value[1]});
        this.props.dispatch(browseActions.changeMileageValue(value[0], value[1]));
      }
      else {
        this.setState({ price_value_min: value[0], price_value_max: value[1]});
        this.props.dispatch(browseActions.changePriceValue(value[0], value[1]));
      }
      this.setState( {min_value: value[0], max_value: value[1]});
    }
  } 

  handleChange = (name, value) => {
    const value1 = Number(value);
    if( name == "min_value" && this.state.max_value < value1 )
      return;
    if( name == "max_value" && this.state.min_value > value1 )
      return;
    if( name == "min_value" && value1 < minLimit )
      return;
    if( name == "max_value" && value1 > maxLimit )
      return;

    this.setState( { [name]: value });
  } 

  render(){
    const { min_value, max_value } = this.state;

    return <div>
      <div className="browser_range_slider">
         <AirbnbSlider
          getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
          min={minLimit}
          max={maxLimit}
          defaultValue={[minLimit, maxLimit]}
          value={[min_value, max_value]}
          onChange={this.handleSlider}
        />
      </div>

      <div className="input2_wrapper">
          <div className="input_left">
              <input type="text" name="min_value" value={min_value} onChange={e => this.handleChange(e.target.name, e.target.value)}/>
          </div>
          <div className="separator">
              <p>-</p>
          </div>
          <div className="input_right">
              <input type="text" name="max_value" value={max_value} onChange={e => this.handleChange(e.target.name, e.target.value)}/>
          </div>
      </div>
    </div>
  }
}




const mapStateToProps = state => {
  const { mileage_min,mileage_max, price_min, price_max } = state.browse
    return {
      mileage_min,
      mileage_max,
      price_min,
      price_max,
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
)(withRouter(CustomSlider));
