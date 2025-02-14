import React from "react";
import { useTranslation } from "react-i18next";
import Contact from "./Contact";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800 pt-10 sm:mt-10 ">
      <Contact />
      <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-white text-sm flex-col md:flex-row items-center lg:justify-center">
          <span className="w-1/2 text-center flex lg:flex-row flex-col items-center ">
            <div className="mt-2">{t('CopyRight')}</div>

            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex text-white text-3xl">
              <a href="https://www.linkedin.com/in/mateogurrea/" target="_blank" className="w-6 mx-1 hover:-translate-y-1 duration-1000">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/MateoGurrea02" target="_blank" className="w-6 mx-1 hover:-translate-y-1 duration-1000">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="https://www.instagram.com/mateogurrea/" target="_blank" className="w-6 mx-1 hover:-translate-y-1 duration-1000">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
}
