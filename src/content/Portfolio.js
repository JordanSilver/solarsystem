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
              rel='noopener noreferrer'
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
              rel='noopener noreferrer'
            >
              <small>Tap here for Website</small>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/assets/images/dispensary.png'
            alt='Second slide'
          />

          <Carousel.Caption className='label'>
            <h6>For Medical Use Only</h6>
            <a
              className='btn btn-danger'
              href='https://dispensary.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <small>Tap here for Website</small>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/assets/images/tag.png'
            alt='Second slide'
          />

          <Carousel.Caption className='label'>
            <h6>TAG PAINTING</h6>
            <a
              className='btn btn-danger'
              href='https://tagpaintingv2.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
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
