import React from 'react';
import {Link} from 'react-router-dom';

const ErrorMsg = ({data}) =>{
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