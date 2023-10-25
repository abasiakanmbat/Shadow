import React from 'react';
import logo from "../../assets/titlebar/Logo.png";
import { Button, Navbar } from 'flowbite-react';
function NavbarComponent() {
  return (
    <div>
      <div   className="  h-[95px] bg-fuchsia-900 grid items-center  ">
        <Navbar fluid rounded className='bg-0 text-white'>
          <Navbar.Brand href="" className='space-x-2'>
            <img src={logo} className="rounded-full" alt="logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Purple shadow Anime</span>
          </Navbar.Brand>
          <div className="flex md:order-2 space-x-2">
            <Button color='light' className='text-fuchsia-900'>Login</Button>
            <Button color='light' className='text-fuchsia-900'>Sign Up</Button>
            <Navbar.Toggle />
          </div>
          <div>
                 
            <input className=' w-[400px] rounded-[5px] h-8' type="search" name="" id="" />
          </div>
          <Navbar.Collapse className='text-white'>
     
            <Navbar.Link href="#" className='text-white'>Anime</Navbar.Link>
            <Navbar.Link href="#"className='text-white'>Anime games</Navbar.Link>
            <Navbar.Link href="#"className='text-white'>Manga</Navbar.Link>
            <Navbar.Link href="#"className='text-white'>Anime News</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default NavbarComponent
