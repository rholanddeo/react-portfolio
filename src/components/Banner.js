import React from 'react';

// import Image from '../assets/avatar.svg';
import Image from '../assets/set.JPG';


import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Banner = () => {
  return <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

      
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1 
        variants={fadeIn('up', 0.3)} initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
          RHOLAND <span>DEO</span>
          {/* RHOLAND DEO EKA PUTRA */}
        </motion.h1>
      <motion.div 
      variants={fadeIn('up', 0.5)} initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      className='mb-3 text-[30px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]'>
      <span className='text-white mr-4'>IM A</span>
      <TypeAnimation
        sequence={[
          'IT Enthusiast',
          2000,
          'Software Programmer',
          2000,
          'Web Developer',
          2000,
          'Frontend Engineer',
          2000,
          'Backend Engineer',
          2000,
        ]}
        speed={50}
        className='text-orange-500'
        wrapper='span'
        repeat={Infinity}
      />
      </motion.div>
      <motion.p
       variants={fadeIn('up', 0.4)} initial="hidden"
       whileInView={'show'}
       viewport={{ once: false, amount: 0.7 }}
      className='mb-6 max-w-lg mx-auto lg:mx-0'>
      Mahasiswa Semester 7 Jurusan Teknik Informatika di Universitas Palangka Raya. IT Enthusiast, Programmer, Fullstack Web Developer. Mempelajari, merancang dan membangun aplikasi berbasis website maupun android.
      </motion.p>

      <motion.div
       variants={fadeIn('up', 0.6)} initial="hidden"
       whileInView={'show'}
       viewport={{ once: false, amount: 0.7 }}
      className='flex max-w-max gap-x-6 items-center mb-5
      mx-auto lg:mx-0'>
        <button className='btn btn-sm'>
          Contact me
        </button>
        <a href='#' className='text-gradient btn-link'>
            My Portofolio
        </a>
      </motion.div>
      <motion.div
       variants={fadeIn('up', 0.7)} initial="hidden"
       whileInView={'show'}
      //  viewport={{ once: false, amount: 0.01 }}
      className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <a href='#'>
            <FaGithub />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
          <a href='#'>
            <FaLinkedin />
          </a>
      </motion.div>
      </div>

      
      <motion.div 
       variants={fadeIn('down', 0.5)} initial="hidden"
       whileInView={'show'}
      //  viewport={{ once: false, amount: 0.7 }}
      // className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
      // className='lg:flex-1'
      >
        <img src={Image} alt='' className="rounded-full w-[250px] mx-auto" />

        {/* <img src={Image} alt='' /> */}

      </motion.div>
    </div>
    
    </div>
    </section>;
};

export default Banner;
