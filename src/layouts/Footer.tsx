import { useRouter } from 'next/router';
import React from 'react';

function Footer() {
  const router = useRouter();
  return (
    <div className="bg-colour-primary flex h-20 items-center justify-center">
      <div className="wrap-footer flex">
        <span className="mt-3 text-white">Follow Us</span>
        <span className="my-2 flex text-white">
          <span className="mx-2 text-white">
            <img
              src={`${router.basePath}/assets/images/instagram.png`}
              alt=""
            />
          </span>
          <span className="mx-2 text-white">
            <img src={`${router.basePath}/assets/images/facebook.png`} alt="" />
          </span>
          <span className="mx-2 text-white">
            <img src={`${router.basePath}/assets/images/youtube.png`} alt="" />
          </span>
          <span className="mx-2 text-white">
            <img src={`${router.basePath}/assets/images/twiter.png`} alt="" />
          </span>
        </span>
        ;
      </div>
    </div>
  );
}
export default Footer;
