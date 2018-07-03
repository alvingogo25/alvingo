import React from "react";

export default () => (
  <div className="row">
    <div className="col s12 m6 left-align">
      <a href="https://www.github.com/alvingogo25"><img
        src={`${window.location.origin}/assets/images/github.png`}
        alt="Github"
            /></a>
    {/* </div>
    <div className="col s12 m4"> */}
    <a href="https://www.linkedin.com/in/alvin-go">
      <img
        src={`${window.location.origin}/assets/images/linkedin.png`}
        alt="LinkedIn"
      />
      </a>
    {/* </div>
    <div className="col s12 m4"> */}
    <a href="alvingogo25@gmail.com">
      <img
        src={`${window.location.origin}/assets/images/google.png`}
        alt="Google"
      />
        </a>
    </div>
  </div>
);
