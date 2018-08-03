import React from "react";
import ContactCard from "./../components/ContactCard";

export default () => (
  <div>
    <ContactCard
      link="https://www.github.com/alvingogo25"
      icon="github"
      label="Github"
    />

    <ContactCard
      link="https://www.linkedin.com/in/alvin-go"
      icon="linkedin"
      label="LinkedIn"
    />

    <ContactCard
      link="mailto:alvingogo25@gmail.com"
      icon="mail"
      label="Email"
    />

    <ContactCard
      link="https://drive.google.com/open?id=1UKc15-EXYTh9D8Joj4CjXE6tpjSOhkwe"
      icon="file"
      label="Resume"
      download="true"
    />
  </div>
);