import './Home.scss';
import Typewriter from 'typewriter-effect';
import Social from './Social';
import Stack from './Stack';

function Home() {

  const typeStrings = [
    "Hello",
    "Thank you for visiting my site",
    "I am a full-stack developer",
    "In my projects I can use a broad range of technologies",
    "If you did not find one you are looking for, don't hesitate to ask me if I forgot to put that in my list ))"
  ]
  return (
    <>
      <div className='home'>

        <aside className="home-text">
          <h2>Never Stop </h2>
          <h3>Exploring The World</h3>
          {/* <a href="#">Explore</a> */}
          <div className="home-text-typer">
            <Typewriter
              options={{
                strings: typeStrings,
                autoStart: true,
                loop: true,
                delay: 200,
              }}
            />
          </div>
        </aside>
        <Stack />
      </div>
      <Social />
    </>
  );
}

export default Home;