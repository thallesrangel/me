import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Logo from '../img/404.svg';

function NotFound() {
   return (
    <Container className="center">
     <div className="notFound">
      <img className="img-fluid" src={ Logo } alt="404"/>
       <h1>Page not Found</h1>
       
       <Link className="btn btn-default" to="/">Home</Link>
     </div>
     </Container>
 )
}
export default NotFound
