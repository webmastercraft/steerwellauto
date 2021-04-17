import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { NavItem } from 'reactstrap'

const propTypes = {
  path: PropTypes.string.isRequired,
  active: PropTypes.string,
  children: PropTypes.any,
}

const contextTypes = {
  router: PropTypes.object,
}
 
const ItemLink = ({ path, active, children }) => {
  return <NavItem className={active}>
    <NavLink exact to={path} className="nav-link">
      {children}
    </NavLink>
  </NavItem>
}

ItemLink.propTypes = propTypes
ItemLink.contextTypes = contextTypes

export default ItemLink
