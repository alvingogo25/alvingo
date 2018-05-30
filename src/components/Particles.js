import React from 'react';
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
                    polygon: { nb_sides: 8 },
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
                }
            }
        }}
        style={{
            position: 'fixed',
            backgroundColor: '#404455'
        }}
    />
)