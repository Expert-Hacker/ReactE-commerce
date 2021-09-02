import React from 'react'
import err from '../images/232.jpg'
import '../404error.css'
import {Link} from 'react-router-dom'
function Error404() {
    return (
        <div className="container1 ">
            <div className="image container-fluid">

            </div>
            <div className="msg">
                <h1><Link className="btn btn-info" to="/">Back to Home</Link></h1>
            </div>
        </div>
    )
}

export default Error404
