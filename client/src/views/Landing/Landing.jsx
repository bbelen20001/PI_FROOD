import React from "react";
import { Link } from "react-router-dom";

export default function Landing(){

    return(
       <div>
         <h1>Esta es la vista de Landing</h1>
         <Link to= '/recipes'>
          <button>Login</button>
         </Link>
       </div>
    )
   }
   
