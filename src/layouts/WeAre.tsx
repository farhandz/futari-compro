import React from 'react';
import { Fade } from 'react-awesome-reveal';

function WeAre() {
  return (
    <div className="bg-section-we flex w-full items-center justify-center">
      <div>
        <div className="title w-80 py-5 text-center">
          <Fade>
            <h1>Who We Are</h1>
          </Fade>

          <Fade direction="right">
            <span className="sub-title ">
              We are a team of two experienced full-stack developers and a
              product designer. Starting from our passion for creating a digital
              product, now decided to provide our service to help you create
              your digital products.
            </span>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default WeAre;
