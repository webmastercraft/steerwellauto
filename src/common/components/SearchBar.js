import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import "./searchbar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      //
    }
  }
  render(){
    return (
        <div className="search">
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <InputBase
            placeholder={this.props.p_holder}
            className="searchInput"
            inputProps={{ 'aria-label': 'search' }}
          />
          <Button
          variant="contained"
          color="primary"
          className="searchButton"
          >
          Search
        </Button>
        </div>
        );
  }
}

SearchBar.propTypes = {
    p_holder: PropTypes.string.isRequired,
}

SearchBar.defaultProps = {
  p_holder:"Search for a brand, model or bodytype...",
}

export default SearchBar;