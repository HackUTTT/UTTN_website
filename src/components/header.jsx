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
  color: ({ x, y, image }) => "#ffffff",
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
  const [imgSrc, setImgSrc] = useState("img/about.png")
  const [scale, setScale] = useState(2)

  useEffect(() => setTimeout(() => setEntropy(30), 3000), [entropy]);
  useEffect(() => setTimeout(() => {
    if(imgSrc === "img/about.png") {
      setScale(0.4);
      setImgSrc("img/TN.png");
      setEntropy(500);
    }
    else {
      setScale(2);
      setImgSrc("img/about.png")
      setEntropy(500)
    }
  }, 10000), [imgSrc])

  return (
    <header id='header'>
      <div className='intro'>
        <ParticleImage
              src={imgSrc}
              width={Number(innerWidth)}
              height={Number(innerHeight)}
              scale={scale}
              entropy={entropy}
              maxParticles={5000}
              particleOptions={particleOptions}
              mouseMoveForce={motionForce}
              touchMoveForce={motionForce}
              className={"background-react-component"}
              backgroundColor="#000000"
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
