import React, { useEffect, useState } from 'react';
import { RiCloseFill, RiMenu4Fill } from 'react-icons/ri';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import { header } from '../data';

const Header = () => {

  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(()=> {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    })
  })
  const {logo, btnLoginText, btnSignupText} = header;

  return (
  
    <header className={`${isActive ? 'bg-neutral-500 py-[16px]' : 'bg-transparent py-[20px]'} 
                            fixed max-w-[1500px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}>
    <a href='/'>
      <img src={logo} alt='' className='h-[40px]'></img>
    </a>

    <Nav/>

    <div className='hidden lg:flex space-x-8'>
      <button className='btn btn-sm text-white hover:text-primary-200 transition'>{btnLoginText}</button>
      <button className='btn btn-sm btn-primary'>{btnSignupText}</button>
    </div>    

    <div 
      onClick={()=> setNavMobile(!navMobile)} 
      className='lg:hidden absolute right-4'>

      {navMobile ? (
        <RiCloseFill className='text-primary-200 text-3xl'/>) : (<RiMenu4Fill className='text-primary-200 text-3xl'/>
      )}
    </div>

    <NavMobile navMobile={navMobile}/>
  </header>
  );
};

export default Header;
