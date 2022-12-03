/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <section className='banner' id='banner'>
      <div className='container' id='bannerColor'>
        <div className='banner-wrapper'>
          <div className='banner-img'>
            <img src='/sooman.jpeg' alt='' />
          </div>
          <div className='banner-content'>
            <h6>Hello, Sooman Shaikh here</h6>
            <h3>Flutter Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus vel aperiam saepe illo quae enim voluptate praesentium
              adipisci dolores dignissimos odio inventore error sed, velit quis.
              Provident placeat qui ipsa!
            </p>
            <a className='btn' href='#projects'>
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
