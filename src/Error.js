import React from 'react'
import './Error.css'

const Error = props => {
    return (
        <div className="container-error">
            <p className="error">{props.displayError}</p>
        </div>
    )
};

export default Error;