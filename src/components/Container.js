import React from 'react';

const center = {
    position: "relative",
    display: "flex",
    marginTop: "5%"
}

export default ({children}) => (
    <div className="container" style={center}>
    {children}
    </div>
);