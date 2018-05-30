import React from 'react';

const center = {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    position: "fixed",
    top: "150px",
    left: "5%",
    right: "5%"
    
}

export default ({children}) => (
    <div className="container" style={center}>
    {children}
    </div>
);