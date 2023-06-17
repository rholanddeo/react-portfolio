import React from 'react';

import Image from '../assets/test.JPG';

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Banner = () => {
  return <section id='home' className='section'>
    <div className='container mx-auto'>
      <div>
        <h1>
          RHOLAND <span>DEO</span>
        </h1>
      </div>
      <div className='mb-6 text-[36px] lg:text-[60px] font-primary font-semibold uppercase loading-[1]'>
      <span className='text-white mr-4'>Seorang</span>
      <TypeAnimation
        sequence={[
          'IT Enthusiast',
          2000,
          'Programmer',
          2000,
          'Web Developer',
          2000,
          'Frontend Developer',
          2000,
          'Backend Developer',
          2000,
        ]}
        speed={50}
        className='text-accent'
        wrapper='span'
        repeat={Infinity}
      />
      </div>
      
      <div>
        <img src={Image} alt='' className="rounded-full w-[200px] h-{100px}" />
      </div>
    </div>
    </section>;
};

export default Banner;
