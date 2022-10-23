import './Websites.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  Carousel,
  // onChange,
  // onClickItem,
  // onClickThumb,
  // showArrows                    
} from 'react-responsive-carousel';
// import Image from './Image';

function Websites() {

  const pictures = [
    {
      "pic":'3dtoronto',
      "description": "3d virtual tour for real estate",
      "url": "http://3dtoronto.ca/11BogertAve3303/",
    },
    {
      "pic":'aphrodite',
      "description": "cosmetics online store",
      "url": "https://aphroditeskincare.online/",
    },
    {
      "pic":'clarion',
      "description": "online messenger",
      "url": "https://github.com/Vlad-Lab319/lhl-final",
    },
    {
      "pic":'ewheel',
      "description": "electric scooters online store and rental service",
      "url": "https://e-wheel.ca/",
    },
    {
      "pic":'webrtc',
      "description": "video call",
      "url": "https://github.com/Vlad-Lab319/lhl-final",
    },
  ];

  const carouselMain = pictures.map((pic, i) => {
    return (
      <a href={pic.url}>
        <img src={require(`../assets/img/jpg/Screenshot_${pic.pic}.jpg`)} alt={pic.pic} className="carousel-img" />
        <p className="carousel-legend">{pic.description}</p>
      </a>
    )
  })

  return (
    <div className='projects'>
      <div>
        <Carousel>
          {carouselMain}
        </Carousel>
      </div>
    </div>

  );
}

export default Websites;