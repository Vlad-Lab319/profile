import './Contacts.scss';
import Social from './Social';
import Canvas from './Canvas';
import Overbracket from './Overbracket';

function Contacts() {


  return (
    <div className='contacts'>
      <div className='canvas website'>
        <p className='canvas-text'>
          Website
        </p>
        <Overbracket width={380} height={60} />
      </div>
      <div className='canvas linkedin'>
        <p className='canvas-text'>
          LinkedIn
        </p>
        <Overbracket width={320} height={60} />
      </div>


      {/* <div className='canvas full-contact'>
        <p className='canvas-main-text'>
          <span>
            veremenko
          </span>
          <span>
            @
          </span>
          <span>
            vladcoder
          </span>
          <span>
            .ca
          </span>
        </p>
      </div> */}

      <span className='span-1'>
        veremenko
      </span>
      <span className='span-2'>
        @
      </span>
      <span className='span-3'>
        vladcoder
      </span>
      <span className='span-4'>
        .ca
      </span>

      <div className='canvas twitter'>
        <Canvas width={340} height={60} />
        <p className='canvas-text'>
          Twitter
        </p>
      </div>
      <div className='canvas insta'>
        <Canvas width={380} height={60} />
        <p className='canvas-text'>
          Instagram
        </p>
      </div>
      <div className='canvas e-mail'>
        <Canvas width={680} height={60} />
        <p className='canvas-text'>
          E-mail
        </p>
      </div>
      <Social />

    </div>
  );
}

export default Contacts;