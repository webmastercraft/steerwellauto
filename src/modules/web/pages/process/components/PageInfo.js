import React , { Component } from 'react';
import PropTypes from 'prop-types';

class PageInfo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      //
    }
  }

  render() {
    return (
      <div className="col-md-4">
          <div className="body">
              <div>{this.props.title}</div>
              <p>{this.props.description}</p>
          </div>
          <img src={this.props.img_url} className={this.props.img_class}/>

      </div>
    );
  }
}

PageInfo.propTypes = {
  title:PropTypes.string.isRequired,
  img_url:PropTypes.string.isRequired,
  img_class:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
}

PageInfo.defaultProps = {
  title: "Browse the best",
  img_class:"body1_img",
  img_url: "./imgs/process_1.png",
  description: "See great deals on vehicles that passed our rigorous 150+ Point inspection",
}

export default PageInfo;

