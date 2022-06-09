import { useRouter } from 'next/router';
import React from 'react';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="bg-colour-dark">
        <div className="grid gap-4 p-3 sm:grid-cols-1 md:grid-cols-2">
          <div className="order-last flex w-full  flex-row items-center justify-start sm:order-first sm:justify-center">
            <div className="m-5 text-justify text-white">
              <div className="section-title">
                Got Any Digital Business Idea ?
              </div>
              <div className="section-title">
                Let us help you to{' '}
                <div className="slidingVertical">
                  <span>Design</span>
                  <span>Develop</span>
                  <span>Deploy</span>
                </div>
                <img
                  src={`${router.basePath}/assets/images/line.png`}
                  className=""
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-row justify-center text-white sm:justify-end">
            <img
              src={`${router.basePath}/assets/images/macbook.png`}
              className="img-full"
              alt=""
              srcSet=""
            />
            <img
              src={`${router.basePath}/assets/images/mac-mini.png`}
              className="img-mini"
              alt=""
              srcSet=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
