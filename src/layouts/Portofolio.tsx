import router from 'next/router';
import React from 'react';

function Portofolio() {
  return (
    <div className="bg-section-porto flex w-full flex-col items-center justify-center">
      <div>
        <div className="title w-96  py-5 text-center">
          <h1 className="title">Some amazing poject we’ve done</h1>
          <span className="sub-title">
            Every project means to us, each project has its own story and so
            many things to learn along the process
          </span>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-2">
          <h1 className="title">
            <img src={`${router.basePath}/assets/images/evos.png`} alt="" />
          </h1>
          <h1 className="title">
            <img src={`${router.basePath}/assets/images/evos.png`} alt="" />
          </h1>
          <h1 className="title">
            <img src={`${router.basePath}/assets/images/evos.png`} alt="" />
          </h1>
          <h1 className="title">
            <img src={`${router.basePath}/assets/images/evos.png`} alt="" />
          </h1>
          <h1 className="title">
            <img src={`${router.basePath}/assets/images/evos.png`} alt="" />
          </h1>
          <h1 className="title">
            <img src={`${router.basePath}/assets/images/evos.png`} alt="" />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
