import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img
            className="h-10 w-10"
            src="/images/fundaUneg-logo.svg"
            alt="uneg logotipo"
          />
          <span className="ml-3 text-xl">Fundauneg</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2024 Tailblocks —
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @knyttneve
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="text-gray-400"
            target="_blank"
            href="https://www.facebook.com/Fundauneg/"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a
            className="ml-3 text-gray-400"
            target="_blank"
            href="https://twitter.com/fundauneg1"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M2.86719,3l6.86914,9.81836l-7.00195,8.18164h2.64648l5.53906,-6.49023l4.54102,6.49023h5.91016l-7.19727,-10.30273l6.57031,-7.69727h-2.60547l-5.14258,6.00977l-4.19727,-6.00977z"></path>
            </svg>
          </a>
          <a
            className="ml-3 text-gray-400"
            target="_blank"
            href="https://www.instagram.com/fundauneg/"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
