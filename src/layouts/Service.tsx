import { useRouter } from 'next/router';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

function Service() {
  const router = useRouter();
  return (
    <>
      <div className="bg-section-porto wrap-service">
        <div className="">
          <div className="service-between">
            <Fade direction="left">
              <div>
                <div className="section-service-title">
                  Create a digital product that convert your audience trough
                  digital experience
                </div>
                <div className="section-service-sub-title">
                  Build a digital product such as Website or mobile app that
                  suit to your audience is a starting point for your digital
                  busines.
                </div>
              </div>
            </Fade>

            <div className="mt-10">
              <Fade direction="right">
                <img
                  src={`${router.basePath}/assets/images/service1.png`}
                  className=""
                  alt=""
                  srcSet=""
                />
              </Fade>
            </div>
          </div>
          <div className="service-center">
            <Fade direction="left">
              <img
                src={`${router.basePath}/assets/images/service2.png`}
                className=""
                alt=""
                srcSet=""
              />
            </Fade>
          </div>
          <div className="service-end">
            <Fade direction="left">
              <img
                src={`${router.basePath}/assets/images/service3.png`}
                className=""
                alt=""
                srcSet=""
              />
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
