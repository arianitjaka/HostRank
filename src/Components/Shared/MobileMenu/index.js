import React, { useState } from 'react';
import Menu from 'react-burger-menu/lib/menus/slide';
import classnames from 'classnames';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import Logo from '../../../Assets/Logo/logo-blue.svg';
import StyledLink from '../StyledLink/StyledLink';
import {
  IoIosAnalytics,
  IoIosArrowDown,
  IoIosApps,
  IoIosBasket,
  IoIosBookmark,
  IoIosCloudDone,
  IoIosCode,
  IoIosCube,
  IoIosFolderOpen,
  IoIosLink,
  IoIosPaperPlane,
  IoIosKey,
  IoMdShare,
  IoMdThunderstorm,
  IoMdMedal,
  IoMdMedkit,
  IoMdPricetag,
  IoMdLocate,
} from 'react-icons/io';
import {AiOutlineBorderlessTable, AiOutlineBulb, AiOutlineCloud, AiOutlineCreditCard, AiOutlineFile, AiOutlineMail, AiOutlinePlayCircle, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai';
import './style.scss';
import { BiCoinStack } from 'react-icons/bi';
import {MdAutorenew, MdLanguage} from 'react-icons/md';
import {FaParking} from 'react-icons/fa';
import {BsPencilSquare} from 'react-icons/bs';
const nonMenuPages = ['/404'];

function ButtonHamburger({ isActive }) {
  return (
    <button
      className={classnames('hamburger hamburger--collapse', {
        'is-active': isActive,
      })}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}

 function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapse1, setIsCollapse1] = useState(false);
  const [isCollapse2, setIsCollapse2] = useState(false);
  const [isCollapse3, setIsCollapse3] = useState(false);
  const [isCollapse4, setIsCollapse4] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <Menu
      width={300}
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
      isOpen={isOpen}
      customBurgerIcon={
        nonMenuPages.indexOf(location.pathname) !== -1 ? (
          false
        ) : (
          <ButtonHamburger isActive={isOpen} />
        )
      }
      id="slide"
      className="burger-menu"
      onStateChange={(state) => setIsOpen(state.isOpen)}
    >
      {/* This div is very important. This make all of event on inner elements is not affected by package Burger Menu */}
      <div className="menu">
        <h1 className="logo">
          <Link to="/" className="logo__image">
            <img src={Logo} />
          </Link>
        </h1>
        <div
          className={classnames('menu__item', { 'menu__item--active': !!isCollapse1 })}
          onClick={() => setIsCollapse1(!isCollapse1)}
        >
          Product <IoIosArrowDown />
        </div>
        <Collapse isOpen={isCollapse1}>
          <nav className="submenu" style={{display:isCollapse1 ? "block" : "none"}} >
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/for-business"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <AiOutlineBulb/>
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Smart Features</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/business-customer"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <AiOutlineCloud/>
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Latest Technology</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/business-tour"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <BiCoinStack />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">For Sale</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/business-resources"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <AiOutlineCreditCard />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Secured Payments</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/business-overview"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <FaParking/>
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Park Domains</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/partner-ecosystem"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <AiOutlinePlayCircle />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Monetize Domains</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/affiliates-partners"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <AiOutlineBorderlessTable />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Landing Pages</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/hostcloud-backup"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <MdAutorenew />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Renew Domains</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/pricing"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <IoIosCube />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Simple Integration</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/pricing"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <AiOutlinePlayCircle/>
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Monetize your Portofolio</p>
              </div>
            </NavLink>
           
          </nav>
        </Collapse>
        <div
          className={classnames('menu__item', { 'menu__item--active': !!isCollapse2 })}
          onClick={() => setIsCollapse2(!isCollapse2)}
        >
          About <IoIosArrowDown />
        </div>
        <Collapse isOpen={isCollapse2}>
          <nav className="submenu" style={{display:isCollapse2 ? "block" : "none"}}>
            <NavLink
              onClick={closeMenu}
              to="/domains-for-sale"
              className="submenu__link"
              activeClassName="is-active"
            >
              <div className="submenu__sub-box-icon">
                <AiOutlineSearch/>
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Domains For Sale</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              to="/websites-for-sale"
              className="submenu__link"
              activeClassName="is-active"
            >
              <div className="submenu__sub-box-icon">
                <MdLanguage />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Websites For Sale</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              to="/registry-services"
              className="submenu__link"
              activeClassName="is-active"
            >
              <div className="submenu__sub-box-icon">
                <AiOutlineFile />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Registry Services</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              to="/pricing-list"
              className="submenu__link"
              activeClassName="is-active"
            >
              <div className="submenu__sub-box-icon">
                <IoMdPricetag />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Pricing List</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              to="/registrar-services"
              className="submenu__link"
              activeClassName="is-active"
            >
              <div className="submenu__sub-box-icon">
                <AiOutlineFile />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Registrar Services</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              to="/story"
              className="submenu__link"
              activeClassName="is-active"
            >
              <div className="submenu__sub-box-icon">
                <AiOutlineUser />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Check Our Story</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              to="/company"
              className="submenu__link"
              activeClassName="is-active"
            >
              <div className="submenu__sub-box-icon">
                <AiOutlineUser />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Our Company</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              to="/events-casestudies"
              className="submenu__link"
              activeClassName="is-active"
            >
              <div className="submenu__sub-box-icon">
                <IoMdLocate />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Events & Case Studies</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              to="/legal"
              className="submenu__link"
              activeClassName="is-active"
            >
              <div className="submenu__sub-box-icon">
                <AiOutlineFile />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Legal</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              to="/blog"
              className="submenu__link"
              activeClassName="is-active"
            >
              <div className="submenu__sub-box-icon">
                <BsPencilSquare />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Our Blog</p>
              </div>
            </NavLink>
          </nav>
        </Collapse>
        <div
          className={classnames('menu__item', { 'menu__item--active': !!isCollapse3 })}
          onClick={() => setIsCollapse3(!isCollapse3)}
        >
         Services <IoIosArrowDown />
        </div>
        <Collapse isOpen={isCollapse3}>
          <nav className="submenu" style={{display:isCollapse3 ? "block" : "none"}}>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/service-overview"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <IoIosCube />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Service Overview</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/domain-appraisals"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <IoIosApps />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Domain Appraisals</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/broker-service"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <IoIosBasket />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Broker Service</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/domain-transfer"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <IoIosBookmark />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Domain Transfer</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/partner-program"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <IoIosCloudDone />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Partner Program</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/transfer-domains"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <IoIosCube />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Transfer Domains</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/migrate-hosting"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <AiOutlineUser />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Migrate Hosting</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/migrate-wordpress"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <BsPencilSquare/>
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Migrate Wordpress</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/migrate-email"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <AiOutlineMail />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Migrate Email</p>
              </div>
            </NavLink>
            <NavLink
              onClick={closeMenu}
              activeClassName="is-active"
              to="/protect-dOMAIN"
              className="submenu__link"
            >
              <div className="submenu__sub-box-icon">
                <IoIosCloudDone />
              </div>
              <div className="submenu__sub-box-content">
                <p className="submenu__sub-subtitle">Protect Domain</p>
              </div>
            </NavLink>
        
     
          </nav>
        </Collapse>
       
        <Link to="/features" className="menu__item" onClick={closeMenu}>
         Solutions
        </Link>
        <Link to="/contact-us" className="menu__item" onClick={closeMenu}>
          Resources
        </Link>
        <Link to="/Support" className="menu__item" onClick={closeMenu}>
        Tools
        </Link>
        <div className="auth-menu-mobile">
        
{/*      
          <Link to='/login' className='auth__btn '>
        <button className='button-unstyled auth__btn--login loginbtn'>Log In</button>
      </Link> */}
      <Link to="login">
        <StyledLink btn="Log In" />
      </Link>
      <Link to='/signup' className='auth__btn'>
        <StyledLink btn="Sign Up" styles="primarybtn"/>
      </Link>
        </div>

      </div>
    </Menu>
  );
}
export default BurgerMenu;
