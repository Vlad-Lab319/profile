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

  // const carousel = pictures.map(async (pic, i) => {
  //   <div>
  //     <img src={await require(`../assets/img/screenshots/Screenshot_${pic}.webp`)} alt="pic" />
  //     <p className='carousel-legend'>test {i}</p>
  //   </div>
  // });

  // console.log(carousel);

  const testCarousel = pictures.map((pic, i) => {
    return (
      <div>
        {/* <img src={require(`../assets/img/screenshots/Screenshot_${pic}.webp`)} alt="3Dtoronto WebBP" /> */}
        {/* <img src={process.env.PUBLIC_URL + `/img/${pic}.webp`} /> */}
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
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        {testCarousel}
      </Carousel>
    </div>

  );
}

export default Websites;