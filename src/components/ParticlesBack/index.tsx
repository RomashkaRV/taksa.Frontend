"use client";

import { type Container, type ISourceOptions } from "@tsparticles/engine";
import ParticlesComponent, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

export const ParticlesBack = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#1c1c1c"
        }
      },
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push"
          },
          onHover: {
            enable: true,
            mode: "grab",
            parallax: {
              enable: false,
              force: 2,
              smooth: 10
            }
          }
        },
        modes: {
          push: {
            distance: 200,
            duration: 15
          },
          grab: {
            distance: 150
          }
        }
      },
      particles: {
        color: {
          value: "#FFFFFF"
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce"
          },
          random: true,
          speed: 3.5,
          straight: false
        },
        number: {
          density: {
            enable: true
          },
          value: 200
        },
        opacity: {
          value: 1.0
        },
        shape: {
          type: "circle"
        },
        size: {
          value: { min: 1, max: 3 }
        }
      },
      detectRetina: true
    }),
    []
  );

  if (init) {
    return (
      <ParticlesComponent
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};
