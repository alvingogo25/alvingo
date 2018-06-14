import React from 'react';

export default ({children}) => (
        <div className="col s12 m6">
            {/* <span className="card-title">Card Title</span> */}
            <div className="card horizontal small">
                <div className="card-image">
                    <img src="assets/images/track.png" alt="" />
                </div>
                <div className="card-content">
                    {children}
                </div>
            </div>
        </div>
);