import React from 'react';
import '../index.css';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
} from 'react-icons/si';
import Portfolio from './Portfolio';
import { Accordion, Col, Row } from 'react-bootstrap';

const Content = ({ camera, showContent }) => {
  // ROTATION
  var r = 50;

  var theta = 200;
  // speed
  var dTheta = (2 * Math.PI * 0.001) / 50;

  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    theta += dTheta;
    camera.position.z = t + r * Math.sin(theta) + 60;
    camera.position.y = (t / r) * Math.cos(theta) + 20;
    camera.position.x = (t / r) * Math.cos(theta) - 20;
    // camera.position.z = t * -0.01;
    // camera.position.x = t * Math.cos(2 * Math.PI) * 0.001 - 30;
    // camera.position.y = t * Math.sin((2 * Math.PI) / -100.01) + 20;
  }
  document.body.onscroll = moveCamera;

  return (
    <div className='content' style={{ zIndex: !showContent ? '-99' : '99' }}>
      <i>
        {' '}
        <p className='text-center text-secondary'>
          {' '}
          - <small> scroll down </small>-
        </p>
      </i>
      <h4
        className='ml-2 mt-5'
        style={{ height: '10vh', width: '100%', color: 'white' }}
      >
        "Hello, <br /> World!"
      </h4>
      <div style={{ height: '60vh', width: '100%' }}></div>
      <div style={{ height: '50vh', width: '100%' }}>
        <Row style={{ maxWidth: '30rem' }}>
          <Col className='ml-3' xs={6} md={6}>
            <h2>
              Daniel <br /> Silver
            </h2>
            <div className='card text-center'>
              <span style={{ fontSize: '2rem' }} role='img' aria-label='rocket'>
                🚀
              </span>{' '}
              <br />{' '}
              <p className='sub-title sub-title-ani'>
                Web Developer | Designer | Entrepreneur
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <Row style={{ maxWidth: '50rem' }} className='mx-auto'>
        <Col xs={6} md={6} className='blockquote mx-auto'>
          {' '}
          <h3 className='text-center'>
            Welcome to <br />
            Silver Stack
          </h3>
        </Col>
        <Col className='card mx-auto' xs={10} md={8}>
          <h2 className='pt-2' style={{ color: 'black' }}>
            <span role='img' aria-label='trophy'>
              {' '}
              🏆
            </span>{' '}
            Featured
          </h2>
          <hr />

          <Accordion>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>
                <h4 className='pt-2'>
                  {' '}
                  <span role='img' aria-label='script'>
                    📜
                  </span>{' '}
                  Portfolio
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <Portfolio />
                <hr />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col xs={12} md={8} className='mx-auto'>
          <section className='card'>
            <Accordion>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>
                  <h4 className='pt-2'>
                    <span role='img' aria-label='tech-guy'>
                      👨‍💻
                    </span>{' '}
                    About Me{' '}
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p style={{ color: 'black' }}>
                    Name: Daniel Silver <br />
                    Age: 30 <br />
                    Location: Toronto, CA <br />
                    Languages:
                  </p>
                  <span className='btn btn-dark mx-1 my-1' role='img'>
                    {' '}
                    <SiJavascript size={45} style={{ color: 'yellow' }} />
                  </span>{' '}
                  <span className='btn btn-dark mx-1 my-1' role='img'>
                    {' '}
                    <SiHtml5 size={45} style={{ color: 'orange' }} />{' '}
                  </span>{' '}
                  <span className='btn btn-dark mx-1 my-1' role='img'>
                    {' '}
                    <SiCss3 size={45} style={{ color: 'blue' }} />{' '}
                  </span>{' '}
                  <br />
                  <span className='btn btn-dark mx-1 my-1' role='img'>
                    <SiReact size={45} style={{ color: 'royalblue' }} />
                  </span>{' '}
                  <span className='btn btn-dark mx-1 my-1' role='img'>
                    <SiNodedotjs size={45} style={{ color: 'green' }} />
                  </span>{' '}
                  <span className='btn btn-dark mx-1 my-1' role='img'>
                    {' '}
                    <SiExpress size={45} />{' '}
                  </span>{' '}
                  <br />
                  <span className='btn btn-dark mx-1 my-1' role='img'>
                    {' '}
                    <SiMongodb size={45} style={{ color: 'green' }} />{' '}
                  </span>
                </Accordion.Body>
                <hr />
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>
                  <h4 className='pt-2'>
                    <span role='img' aria-label='laptop'>
                      💻
                    </span>{' '}
                    Contact Info
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  <br />
                  <Row className='my-auto mx-auto'>
                    <div className='btn btn-light mx-3'>
                      {' '}
                      <a
                        href='https://github.com/JordanSilver'
                        style={{ color: ' #4078c0' }}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <SiGithub size={40} />
                      </a>
                    </div>
                    <h6
                      className='my-auto'
                      style={{ color: 'black', fontWeight: '700' }}
                    >
                      Visit my Github or <br /> send me a message
                    </h6>{' '}
                    <small className='mx-auto'>
                      <a
                        href='mailto:silverstacktech@gmail.com'
                        style={{ color: 'gray' }}
                        className='btn btn-light my-2'
                      >
                        silverstacktech@gmail.com
                      </a>
                    </small>
                  </Row>
                  <br />
                  <form
                    className='mx-auto'
                    name='silverstackform'
                    method='post'
                    data-netlify='true'
                  >
                    <input type='hidden' name='form-name' value='silverstack' />
                    <Row className='mx-auto mx-2'>
                      <input
                        className='px-4 mx-auto'
                        type='text'
                        placeholder='Your Name'
                        name='name'
                      />
                    </Row>
                    <hr />
                    <Row className='mx-auto mx-2'>
                      <input
                        placeholder='Your Email'
                        type='email'
                        name='email'
                        className='px-4 mx-auto'
                      />
                    </Row>
                    <hr />
                    <Row>
                      <textarea
                        placeholder='Your Message'
                        name='message'
                        className='px-3 mx-auto'
                      ></textarea>
                    </Row>
                    <br />
                    <p>
                      <button
                        className='btn btn-success btn-block'
                        type='submit'
                      >
                        Send
                      </button>
                    </p>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>
        </Col>
      </Row>
      <div style={{ height: '15vh', width: '100%' }}></div>
      <Col xs={10} md={6}>
        <p className='blockquote'>
          "The best way out is always through." <br />
          -Robert Frost 🖊️
        </p>
      </Col>

      <blockquote>
        <p className='text-center'>Silver Stack Web Development &copy; 2021</p>
      </blockquote>
    </div>
  );
};

export default Content;
