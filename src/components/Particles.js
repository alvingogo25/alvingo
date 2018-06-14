import React from "react";
import Particles from "react-particles-js";

export default () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 50,
          density: { enable: true, value_area: 721.5354273894853 }
        },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 4, color: "#000000" },
          polygon: { nb_sides: 8 }
        },
        opacity: {
          value: 0.9620472365193137,
          random: true,
          anim: {
            enable: false,
            speed: 0.8120772123013451,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 6,
          random: true,
          anim: {
            enable: false,
            speed: 4.872463273808071,
            size_min: 8.12077212301345,
            sync: true
          }
        },
        line_linked: {
          enable: true,
          distance: 32,
          color: "#ffffff",
          opacity: 1,
          width: 2.4051180912982844
        },
        move: {
          enable: true,
          speed: 3,
          direction: "bottom-left",
          random: true,
          straight: true,
          out_mode: "bounce",
          bounce: false,
          attract: { enable: true, rotateX: 600, rotateY: 1200 }
        },
          interactivity: {
              detect_on: "canvas",
              events: {
                  onhover: { enable: true, mode: "repulse" },
                  onclick: { enable: true, mode: "push" },
                  resize: true
              },
              modes: {
                  grab: { distance: 400, line_linked: { opacity: 0.6827791579605474 } },
                  bubble: {
                      distance: 97.44926547616143,
                      size: 40,
                      duration: 0.48724632738080703,
                      opacity: 8,
                      speed: 3
                  },
                  repulse: { distance: 121.81158184520177, duration: 0.4 },
                  push: { particles_nb: 4 },
                  remove: { particles_nb: 2 }
              }
          }
      }
    }}
    style={{
      position: "fixed",
      backgroundColor: "#404455",
      top: "0px",
      left: "0px"
    }}
  />
);
