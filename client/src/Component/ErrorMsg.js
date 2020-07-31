import React from 'react';
import {Link} from 'react-router-dom';

const ErrorMsg = ({data}) =>{
    // Return Error message IF there is an error in searching username
    return(
        <div className="errorMsg">
            {data}
            <br/>
            <Link to={`/`}>
                <button className="errorButton">Back to search</button>
            </Link>
        </div>
    );
};

export default ErrorMsg;