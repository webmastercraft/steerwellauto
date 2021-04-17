import React , { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import InsertChartOutlinedTwoToneIcon from '@material-ui/icons/InsertChartOutlinedTwoTone';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Clear from '@material-ui/icons/Clear';
import Tooltip from '@material-ui/core/Tooltip';

import SteerSnack from "../snack-bars/SteerSnack";

import "./imageover.css";

class ImageOver extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cameraShow:"",
      openSuccessSnack: false,
      openErrorSnack: false,
      snackType: 'success',
      snackMessage: ""
    }

    this.handleClose = this.handleClose.bind(this)
  }

  handleMouseOver(event){
    this.setState({cameraShow:"over"});
  }

  handleMouseOut(event){
    this.setState({cameraShow:""});
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
        openSuccessSnack: false,
        openErrorSnack: false,
        snackMessage: ""
    });
  };

  addtofavorite = (index) => {
    this.setState({
        openSuccessSnack: true,
        snackType: 'success',
        snackMessage:"Successfullly added to your favorite list(id:"+this.props.carID+")."
    });
  }
  addtocompare = (index) => {
    this.setState({
        openErrorSnack: true,
        snackType: 'error',
        snackMessage:"An error is happened when adding to compare list(id:"+this.props.carID+")."
    });
  }

  render() {
    const { cameraShow, openSuccessSnack, openErrorSnack } = this.state;
    const { snackType, snackMessage } = this.state;
    var openSnack = false;
    if( openSuccessSnack == true || openErrorSnack == true )
        openSnack = true;
    if(this.props.parent != "favor")
     { 
      return (
        <div className={"image_over " + this.props.className} onMouseEnter={this.handleMouseOver.bind(this)} onMouseLeave={this.handleMouseOut.bind(this)}>
          <img
            className="popular-section-item-image"
            src={this.props.image_paths[0]}
            />
          <div className={cameraShow+" overlay_wrapper"}>
            <span className="overlay_icon camera_icon">
              <PhotoCameraIcon color="action" className=""/>
              <span className="photo_count">{this.props.image_paths.length}</span>
            </span>
            <span className="overlay_icon compare_icon">
              <Tooltip title="Add to Compare" placement="right-start">
                <InsertChartOutlinedTwoToneIcon
                  className=""
                  onClick={() => this.addtocompare( this.props.carID ) }/>
              </Tooltip>
            </span>
            <span className="overlay_icon favorite_icon">
              <Tooltip title="Add to Favorite" placement="left-start">
                <FavoriteBorderIcon
                  className=""
                  onClick={() => this.addtofavorite( this.props.carID ) }/>
              </Tooltip>
            </span>
          </div>

         {/*<SteerSnack
            open={openSnack}
            variant={this.state.snackType}
            message={this.state.snackMessage}
            onClose={this.handleClose}
          />*/}
        </div>
    );
    }
    else{
      return (
        <div className={"image_over " + this.props.className} onMouseEnter={this.handleMouseOver.bind(this)} onMouseLeave={this.handleMouseOut.bind(this)}>
          <img
            className="popular-section-item-image"
            src={this.props.image_paths[0]}
            />
          <div className={cameraShow+" overlay_wrapper"}>
            <div className="overlay_background"></div>
            <span className="overlay_icon camera_icon">
              <PhotoCameraIcon color="action" className=""/>
              <span className="photo_count">{this.props.image_paths.length}</span>
            </span>
            <span className="overlay_icon compare_icon">
              <Tooltip title="Remove" placement="right-start">
                <InsertChartOutlinedTwoToneIcon
                  className=""
                  onClick={() => this.addtocompare( this.props.carID ) }/>
              </Tooltip>
            </span>
            <span className="overlay_icon favorite_icon">
              <Tooltip title="Remove" placement="left-start">
                <Clear
                  className=""
                  onClick={() => this.addtofavorite( this.props.carID ) }/>
              </Tooltip>
            </span>
          </div>

         {/*<SteerSnack
            open={openSnack}
            variant={this.state.snackType}
            message={this.state.snackMessage}
            onClose={this.handleClose}
          />*/}
        </div>
    );
    }
  }
}

ImageOver.propTypes = {
    image_paths: PropTypes.array.isRequired,
    carID: PropTypes.number.isRequired,
    className: PropTypes.string,
}

ImageOver.defaultProps = {
    image_paths: [
        "./imgs/car_audi.png",
        "./imgs/car_audiTT.png",
        "./imgs/car_audi.png",
        "./imgs/car_audiTT.png",
        "./imgs/car_audi.png",
        "./imgs/car_audi.png",
        "./imgs/car_audi.png",
        "./imgs/car_audi.png",
        "./imgs/car_bmw.png",
        "./imgs/car_audi.png",
        "./imgs/car_bmw.png",
        "./imgs/car_bmw.png",
        "./imgs/car_audi.png",
        "./imgs/car_audi.png",
      ],
}

export default ImageOver;
