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

  const pics = [

  ]

  const testCarousel = pictures.map((pic, i) => {
    return (
      <div>
        <Image name={pic} />
        <p className='carousel-legend'>{pic}</p>
      </div>
    )

  })

  const carousel =
    <div>
      <Carousel>
        {/* <img src={require("../assets/img/screenshots/Screenshot_3dtoronto.webp")} alt="" className='carousel-img'/>
        <img src={require("../assets/img/screenshots/Screenshot_clarion.webp")} alt=""className='carousel-img'/>
        <img src={require("../assets/img/screenshots/Screenshot_aphrodite.webp")} alt="" className='carousel-img'/>
        <img src={require("../assets/img/screenshots/Screenshot_ewheel.webp")} alt=""className='carousel-img'/>
        <img src={require("../assets/img/screenshots/Screenshot_webrtc.webp")} alt=""className='carousel-img'/> */}
        <img src={require("../assets/img/jpg/Screenshot_3dtoronto.jpg")} alt="" className='carousel-img'/>
        <img src={require("../assets/img/jpg/Screenshot_clarion.jpg")} alt=""className='carousel-img'/>
        <img src={require("../assets/img/jpg/Screenshot_aphrodite.jpg")} alt="" className='carousel-img'/>
        <img src={require("../assets/img/jpg/Screenshot_ewheel.jpg")} alt=""className='carousel-img'/>
        <img src={require("../assets/img/jpg/Screenshot_webrtc.jpg")} alt=""className='carousel-img'/>
        {/* {testCarousel} */}
      </Carousel>
    </div>




  return (
    <div className='projects'>
      {/* Websites */}
      {/* <Image name={'3dtoronto'}/> */}

      {/* <Carousel
        showArrows={true}
      >
        {testCarousel}
      </Carousel> */}
      {carousel}
    </div>

  );
}

export default Websites;