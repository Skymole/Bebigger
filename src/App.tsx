import React from 'react'
import './styles/MainPage.css'
import Swiper from './components/Swiper'

function MainPage() {
    const items = [
    {
      imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.photo.2gis.com%2Fimages%2Fbranch%2F36%2F5066549629667942_92f5_600x600.jpg&f=1&nofb=1&ipt=c1e943c4a2ba13b9342b62676b95fcbf8f4ca17eaf2762f1d67f8a069b45b83a&ipo=images',
      imageAlt: "A person's eye",
    },
    {
      imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi4.photo.2gis.com%2Fimages%2Fbranch%2F36%2F5066549629667923_9002_600x600.jpg&f=1&nofb=1&ipt=2f731349417136a971e96c4d719158b91bda16159a28c2ed837842af3a5eb59c&ipo=images',
      imageAlt: 'A rock formation',
    },
    {
      imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi6.photo.2gis.com%2Fimages%2Fbranch%2F36%2F5066549627717379_e6f7_600x600.jpg&f=1&nofb=1&ipt=9eda36ae30b281521d936c2b3ed13c867106b1a24f4dd93dda0680dd6792c50f&ipo=images',
      imageAlt: 'Some flowers',
    },
    {
      imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.photo.2gis.com%2Fimages%2Fbranch%2F36%2F5066549627717434_cf97_600x600.jpg&f=1&nofb=1&ipt=2938c968ce3fddb2dc10714f33ce6ad82540709e1f0e2f7cec984fec1b5a690d&ipo=images',
      imageAlt: 'An egyptian wall painting',
    },
    {
      imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Y40CSic2NILYRL0vwESUtgHaGg%26pid%3DApi&f=1&ipt=5e17ed49f9948aae65701f22bc0e2bc8120b6fd0b30681165128121f441dbe4b&ipo=images',
      imageAlt: 'A butterfly on a leaf',
    },
  ];

  return (
      <div className='MainPage'>
        <div className='MainPageForm'>
          Школа английского Bebigger
        </div>
          <div className='Direction'>
            Тут должно быть кратенькое описание/приветствие для родителей.
          </div>
          <div className='Photos'>
              <Swiper items={items} />
          </div>
      </div>
  );
}

export default MainPage;
