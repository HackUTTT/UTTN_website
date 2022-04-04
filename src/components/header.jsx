import ParticlesBg from "particles-bg";
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image";
import { useEffect, useState } from "react";

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#61dafb",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};

export const Header = (props) => {
  const { innerWidth, innerHeight } = useWindowSize();
  const [entropy, setEntropy] = useState(500);

  useEffect(() => setTimeout(() => setEntropy(20), 2000), []);

  return (
    <header id='header'>
      <div className='intro'>
        {/* <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} /> */}
        <ParticleImage
              src={"img/about.png"}
              width={Number(innerWidth)}
              height={Number(innerHeight)}
              scale={2}
              entropy={entropy}
              maxParticles={4200}
              particleOptions={particleOptions}
              mouseMoveForce={motionForce}
              touchMoveForce={motionForce}
              className={"background-react-component"}
            />
        <div className='overlay'>
          <div className='container'>
          
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  En savoir plus
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
