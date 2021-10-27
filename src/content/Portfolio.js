import React from 'react';
import { Carousel } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <>
      <Carousel fade nextLabel={false} prevLabel={false}>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/assets/images/nxtcrypto.png'
            alt='First slide'
          />
          <Carousel.Caption className='label'>
            <h3>NXT Crypto </h3>
            <a
              className='btn btn-danger'
              href='https://nxt-crypto.netlify.app/'
              target='_blank'
            >
              <small>Tap here for Website</small>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/assets/images/bmwebsite.png'
            alt='Second slide'
          />

          <Carousel.Caption className='label'>
            <h6>BeastMode Battles</h6>
            <a
              className='btn btn-danger'
              href='https://beastmodebattles.herokuapp.com/'
              target='_blank'
            >
              <small>Tap here for Website</small>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Portfolio;
