import React , { Component } from 'react';
import PropTypes from 'prop-types';

class Feature extends Component {
 
  constructor(props) {
    super(props)
    
    this.state = {
        content:[],
        title:"",
    }

  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({content : nextProps.content});
    this.setState({title : nextProps.title});
  }

  renderContent = (contents) =>
    contents.map((item, key) =>{
        return <p key={key}>{item}</p>
    });
  
  render() {
    return(
        <div className="detail_features_item">
            <h5>{this.state.title}</h5>
            {this.renderContent(this.state.content)}
        </div>
    );
  }
}

Feature.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
}

Feature.defaultProps = {
    title : "Safety",
    content : [
      "abc", "bbc"
    ],
}

export default Feature;

