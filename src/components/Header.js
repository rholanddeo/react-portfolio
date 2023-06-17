import React from 'react';

import Logo from '../assets/deo.png';

const Header = () => {
  return (
    <header className='py-8'>
     <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={Logo} alt='' className='rounded-lg w-[200px]'/>
        </a>
        <button className='btn btn-sm'>Hubungi Saya</button>
        </div>
    </div>
  </header>
  );
};

export default Header;
