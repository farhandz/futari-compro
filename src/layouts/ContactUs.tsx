import React from 'react';

function ContactUs() {
  return (
    <div className="bg-section-contact-us flex w-full items-center justify-center">
      <div>
        <div className="title py-5 text-center">
          <h1> Ready to create your digital product with us ?</h1>
        </div>
        <div className="my-2 flex flex-col items-center justify-center">
          <div className="flex">
            <div className="flex flex-col">
              <span className="sub-title text-white">Name</span>
              <input type="text" className="file:border file:border-solid" />
            </div>
            <div className="mx-2 flex flex-col">
              <span className="sub-title text-white">Email Address</span>
              <input type="text" className="file:border file:border-solid" />
            </div>
          </div>
          <div className="mt-4 flex flex-col">
            <span className="sub-title text-white">Say Hi to Us</span>
            <input
              type="text"
              placeholder="Description"
              className="description-contact-us w-full file:border file:border-solid"
            />
          </div>
          <button className="my-2 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
            Send My Idea
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
