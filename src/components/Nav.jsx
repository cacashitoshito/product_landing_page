import React from "react";
import {Link} from "react-router-dom"
import { BrowserRouter } from "react-router-dom";


function Nav(){
    return(
        <>
<div className="header">
<div className="logo">
<h2>C<span>S</span></h2>
</div>
<ul>
<BrowserRouter>
    <li><Link  className="Link" href="#">Home</Link></li>
    <li><Link className="Link" href="#">Product</Link></li>
    <li><Link className="Link" href="#">About</Link></li>
    <li><Link className="Link" href="#">Contact</Link></li>
    </BrowserRouter>
</ul>

</div>
        </>
    )
}

export default Nav;