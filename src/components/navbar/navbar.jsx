import React from 'react';
import logo from "../../assets/titlebar/Logo.png";
import { Button, Navbar } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <Button color='light' className='text-fuchsia-900 '>Sign Up</Button>
            <Button color='light' className='text-fuchsia-900'>Login</Button>
            <Navbar.Toggle />
          </div>
          <div className='-translate-x-10 flex' >
          <svg className='translate-x-8 translate-y-2 ' style={{fill:"#701a75", }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            <input className=' focus:outline-none placeholder:italic placeholder:text-slate-400 w-[400px] rounded-[5px] h-8 text-black' placeholder='                search' type="search" name="" id="" />
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
