import React ,{useState, useEffect}from 'react'
import scrollreveal from 'scrollreveal'
import { Link, useLocation } from 'react-router-dom'
import sidebarNav from '../../configs/sidebarNav'
import { NavbarUser } from '../navbar/Navbar'
import {LogoLee, LogoPortfolio } from '../logo-sgv/Logo'
import './sidebar.scss'




const Sidebar = () => {

  const location = useLocation();
  const activeItem = sidebarNav.findIndex(item => item.link === location.pathname)

  const [navbarState, setNavbarState] = useState(false);
  const NavActive = navbarState;

  // scrollreveal
  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
      .logo,
      .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4)

      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <div className='slidebar col-2 col-md-12'>
        <div className='top'>
          <div className='logo'>
            <LogoLee/>
            <LogoPortfolio/>
          </div>
          <div className='toggle'>
            {
              navbarState ? (<i className='bx bx-x' onClick={() => setNavbarState(false)}></i>) : <i className='bx bx-menu' onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}></i>
            }
          </div>
          <div className='links'>
              <ul>
              {
                sidebarNav.map((nav, index) => (
                <SidebarItem
                    index={index}
                    link={nav.link}
                    icon={nav.icon}
                    text={nav.text}
                    active={index === activeItem}
                    key={index}
                />
                ))
              }
                
              </ul>
            
          </div>
        </div>
      </div>
      <ResponsiveNav
        NavActive ={NavActive}
      >
        <NavbarUser/>
      </ResponsiveNav>
    </>
  )
}

// 해당 컴포넌트 활성화시 nav UI 활성화
const SidebarItem = props =>{
  const active = props.active ? 'active' : ''

  return (
    <li className={`${active}`} key={props.index}>
      <Link to = {props.link} key ={`nav-${props.index}`}>
        {props.icon}
        <div>{props.text}</div>
      </Link>
    </li>
  )
}

// 빈응형 사이드바(toggle)
export const ResponsiveNav = (props) =>{

  const location = useLocation();
  const activeItem = sidebarNav.findIndex(item => item.link === location.pathname)

  return(
    <div className={`responsive-nav col-md-4 col-sm-7  ${props.NavActive ? 'navActive' : ''}`}>
      <div className='responsive-nav__container'>
        {props.children}
        <div className='responsive-nav__links'>
              <ul>
              {
                sidebarNav.map((nav, index) => (
                <SidebarItem
                  index={index}
                  link={nav.link}
                  icon={nav.icon}
                  text={nav.text}
                  active={index === activeItem}
                  key={index}
                />
                ))
              }   
              </ul>
        </div>
      </div>
    </div>
    
  )
}

export default Sidebar