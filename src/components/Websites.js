import './Websites.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  Carousel,
  // onChange,
  // onClickItem,
  // onClickThumb,
  // showArrows                    
} from 'react-responsive-carousel';
import Image from './Image';

function Websites() {

  const pictures = [
    '3dtoronto',
    'aphrodite',
    'clarion',
    'ewheel',
    'webrtc',
  ];

  const testCarousel = pictures.map((pic, i) => {
    return (
      <div>
        <Image name={pic}/>
        <p className='carousel-legend'>{pic}</p>
      </div>
    )

  })

  return (
    <div className='projects'>
      Websites
      {/* <Image name={'3dtoronto'}/> */}

      <Carousel
        showArrows={true}
      >
        {testCarousel}
      </Carousel>
    </div>

  );
}

export default Websites;