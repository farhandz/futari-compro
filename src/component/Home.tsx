import { useRouter } from 'next/router';
import React from 'react';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="bg-colour-dark">
        <div className="grid gap-4 p-3 sm:grid-cols-1 md:grid-cols-2">
          <div className="order-last flex w-full  flex-row items-center justify-center sm:order-first">
            <div className="text-justify text-white">
              <div className="section-title">
                Got Any Digital Business Idea ?
              </div>
              <div className="section-title">
                Let us help you to : <span className="active-nav">Design</span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-row justify-center text-white sm:justify-end">
            <img
              src={`${router.basePath}/assets/images/macbook.png`}
              className="w-60 sm:w-4/5"
              alt=""
              srcSet=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
