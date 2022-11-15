import React from 'react'

import './style.css'
import { Col } from 'react-bootstrap';

const Links = ({ key, icon, label, link}) => {
    return (
      <Col xs={12} md={12} lg={12}>
          <a href={link} className="btn btn-default w-100">
            <span>{icon}</span> {label}
          </a>
      </Col>
  )
}

export default Links
