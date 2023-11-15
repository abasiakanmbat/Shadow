import React from 'react';
import logo from "../../assets/titlebar/Logo.png";
import Button from '@mui/material/Button';
import "../navbar/navbar.css";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
function NavbarComponents() {

  return (
    <div className='bg-darkPurple pt-1 md:pt-2 md:pb-1 '>
      {/* Navbar */}
      <nav className="relative container mx-auto p-3 bg-darkPurple lg:p-1">
        {/* flex Container */}
        <div className="flex  items-center justify-between  ">
          {/* Logo */}
          <div className="pt-2 flex items-center  h-fit  ">
            <div className=' md:hidden  '>
              {/* Hamburger menu */}
              <MenuRoundedIcon sx={{ color: 'white' }} />
            </div>
            <div className='flex items-center lg:space-x-3 xl:space-x-5'>

            <img src={logo} className="rounded-full w-7 h-7 md:w-10 md:h-10" alt="logo" />
            <li className='text-white text-[10px] lg:text-[12px] xl:text-[16px]'>Purple shadow Anime</li>
            <div className='relative ' >
              <svg className='absolute left-3 top-[6px]  ' style={{ fill: "#701a75", }} height="13px" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
              <input className='pl-10 focus:outline-none placeholder:italic placeholder:text-[12px] placeholder:text-slate-400 w-[120px] rounded-[5px] h-[25px] text-black lg:w-[260px] xl:h-[28px] xl:w-[460px]' placeholder='search' type="search" name="" id="" />
            </div>
            </div>
            {/* <input type="text" className='w-40 h-10 rounded-[5px]' /> */}
          </div>
          {/* Menu Items */}
          <div className="hidden md:flex space-x-3 items-center text-[10px] lg:text-[13px] text-white xl:space-x-6 xl:text-[16px]">
            <li>Anime</li>
            <li>Anime games</li>
            <li>Manga</li>
            <li>Anime News</li>
          </div>
          <div className=" flex space-x-1   mt-2 lg:space-x-3">
            <Button variant='contained' sx={{  fontSize: '7px',  backgroundColor: "white", '&:hover,&.Mui-active': { backgroundColor: "#ffdfff" }, color: "black" }} className=''>Sign Up</Button>
            <Button variant='contained' sx={{ width: '9px', fontSize: '7px', height: '25px', backgroundColor: "white", '&:hover,&.Mui-active': { backgroundColor: " #ffdfff" }, color: "black" }} className=''>Login</Button>
          </div>
          <>
          {/* <Button sx={{backgroundColor: {md: "red"}}} variant='contained'>Happy world</Button> */}
          </>
        </div>
      </nav>
      <div className=' '>

      </div>
    </div>
  )


}
export default NavbarComponents