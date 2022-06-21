import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import LogoBose from '../../Assets/LogoBose'
import '../../styles/NavBar.css'
const Nav = styled.div`
  background: #15171c;
  height: 80px;
  font-family: sans-serif;
  position:fixed;
  top:0;
  width:100%;
  box-shadow: rgba(100,100,111,1) 0px 7px 29px 0px;
  
  display: flex;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  align-items: center;
  color: #fff;
  width:100%;
`;


const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  opacity: 0.97;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
            {/*<img className='alinearLogo' src={logo} alt="AQUI VA EL LOGO" />*/}
          </NavIcon>

          <NavIcon to='#' className ="logobose">
              <LogoBose fill='#fff' width={200} height={200}/>
            </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#' className ="margen">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>


            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>        
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
