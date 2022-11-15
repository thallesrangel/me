import React from 'react';

import {Link} from 'react-router-dom'

function NotFound() {
   return (
     <div className="notFound">
       <h1>404- Page not Found</h1>
       
       <Link to="/">Ir para página inicial</Link>
     </div>
 )
}
export default NotFound