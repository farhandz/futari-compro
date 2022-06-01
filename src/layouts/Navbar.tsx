import { useRouter } from 'next/router';
import React from 'react';

import NavbarJson from '../data/nav.json';

function Navbar() {
  const router = useRouter();
  // const [show, setShow] = React.useState(false);
  return (
    <>
      <div className="bg-colour-primary sticky top-0 z-50">
        <div className="flex flex-col  lg:mx-10 lg:flex-row lg:items-center">
          <div className="mx-2 flex w-full items-center justify-between lg:mx-0">
            <div
              onClick={() => router.push('/')}
              className=" cursor-pointer p-3 text-4xl font-bold text-white"
            >
              <img src={`${router.basePath}/${NavbarJson.data.src}`} alt="" />
            </div>
          </div>
          <div className="flex w-full items-center justify-between lg:mx-0">
            {NavbarJson.data.subTitle.map((dt, index) => {
              return (
                <div
                  key={index}
                  onClick={() => router.push(`${dt.route}`)}
                  className={` ${
                    dt.route === router.asPath ? 'active-nav' : ''
                  } cursor-pointer font-bold text-white`}
                >
                  {dt.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
