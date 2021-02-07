import { useRef } from 'react';
// import Lottie from 'lottie-web';
// import animate from 'lottie-web';

const Hero = () => {
  const container = useRef(null);

  // useEffect(() => {
  //   Lottie.loadAnimation({
  //     container: container.current,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     animationData: require('./astronaout.json'),
  //   });
  //   animate.setSpeed(0.5);
  // }, []);

  return (
    <>
      <section className='my-16 mx-5 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns  '>
        <div className='circle1 '></div>
        <div className='circle2'></div>

        <div className='max-w-md mb-auto space-y-5 '>
          <h1 className='text-5xl font-bold md:text-7xl'>
            Hello. I’m Shugi Yen
          </h1>
          <p className='tracking-wide leading-relaxed'>
            Im a React JS developer based in Nagoya, Japan.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
