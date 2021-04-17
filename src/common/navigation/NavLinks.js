import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types'
import NavItem from './NavItem'

const propTypes = {
  children: PropTypes.any
}

const contextTypes = {
  router: PropTypes.object,
}

const menuList = [
  { "path": "/browse", "label": "Browse Cars" },
  { "path": "/process", "label": "Process" },  
  { "path": "/blog", "label": "Blog" },  
  { "path": "/about", "label": "About Us" },  
  { "path": "/faq", "label": "FAQ" },  
  { "path": "/contacts", "label": "Contacts" }
]

class NavLinks extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return <div className="nav_menu">
            <ul className="nav_bar">
            { menuList.map((item, key) =>
                <NavItem   path={item.path} 
                          active={ this.props.location.pathname.indexOf(item.path) > -1 ? 'active' : ''} key={key}>
                  {item.label}
                </NavItem>
            )}
          </ul>
        </div>
  }
}

NavLinks.propTypes = propTypes
NavLinks.contextTypes = contextTypes

export default withRouter(NavLinks)
