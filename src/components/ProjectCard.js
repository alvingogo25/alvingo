import React from 'react';

export default ({children}) => (
    <div className="row">
        <div className="col s12 m7">
            <div className="card small">
                <div className="card-image">
                    <img src="images/sample-1.jpg" alt="" />>
                        <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                    {children}
                </div>
            </div>
        </div>
    </div>
);