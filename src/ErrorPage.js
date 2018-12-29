import React from 'react';

const ErrorPage = props => {
    return (
        <div className="errorPage">
            <div className="ui sizer vertical segment">
                <div id="error" className="ui huge header">{props.errorMsg}</div>
            </div>
        </div>
    );
}

export default ErrorPage;