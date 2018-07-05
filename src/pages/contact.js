import React from "react";

export default () => (
  <div className="row">
    <ul>
      <li>
        <a href="https://www.github.com/alvingogo25">
          <img
            src={`${window.location.origin}/assets/images/github.png`}
            alt="Github"
          />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/alvin-go">
          <img
            src={`${window.location.origin}/assets/images/linkedin.png`}
            alt="LinkedIn"
          />
        </a>
      </li>
      <li>
        <a href="mailto:alvingogo25@gmail.com">
          <img
            src={`${window.location.origin}/assets/images/google.png`}
            alt="Google"
          />
        </a>
      </li>
    </ul>
  </div>
);
