import './Contacts.scss';
import Social from './Social';
import Canvas from './Canvas';
import Overbracket from './Overbracket';

function Contacts() {


  return (
    <div>
      <div className='canvas'>
        <p className='canvas-text'>
          Website
        </p>
        <Overbracket width={320} height={60} />
      </div>
      <div className='canvas'>
        <p className='canvas-text'>
          LinkedIn
        </p>
        <Overbracket width={240} height={60} />
      </div>
      <div className='canvas'>
        <p className='canvas-main-text'>
          veremenko@vladcoder.ca
        </p>
      </div>
      <Social />
      <div className='canvas'>
        <Canvas width={320} height={60} />
        <p className='canvas-text'>
          Twitter
        </p>
      </div>
      <div className='canvas'>
        <Canvas width={420} height={60} />
        <p className='canvas-text'>
          Instagram
        </p>
      </div>
      <div className='canvas'>
        <Canvas width={640} height={60} />
        <p className='canvas-text'>
          E-mail
        </p>
      </div>

    </div>
  );
}

export default Contacts;