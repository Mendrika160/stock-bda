import React,{useState,useRef} from 'react'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';

function Sidebar({Children}) {
  
  const lisActiveRef = useRef(null);

  const handleClicklist = (key,event) => {
    const { currentTarget } = event;
    console.log("target:",currentTarget);
    console.log("ref   :",lisActiveRef.current);

  }
  return (
    <>
      <Conatainer>
        <ul className='sidebar-list'>
          {
            SidebarData.map((value,index) => (
              <NavLink 
                  to={value.link}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  key={index}
                  style={{textDecoration:'none',color:'#473d3d'}} 
                  >
              <li 
                className="list"
                ref={lisActiveRef}
                onClick={(event) => handleClicklist(index,event)}
                >
                <span className='list-icon'>{value.icons}</span>
                <span className='list-title'>{value.title}</span>
                
               
              </li> 
              </NavLink>
            ))
          }
        </ul>
        
       </Conatainer>
       
    </>
  )
}

export default Sidebar

const Conatainer =  styled.div`
  margin:0;
  padding:0;
  height:100vh;
  width:250px;
  background-color: #e9edc9;
  .sidebar-list{
    height:auto;
    padding:0;
    width:100%;
    .active{
        
        background-color: #cbccc6;
      }
    .list{
      width:100%;
      height:55px;
      list-style-type:none;
      margin:0;
      display:flex;
      flex-direction:row;
      justify-content:center;
      align-items:center;
      cursor: pointer;
      &:hover{
        
        background-color: #cbccc6;
      }
      
      .list-icon{
        flex: 1;
        display:grid;
        place-items:center;
      }
      .list-title{
        flex:2;
      }
    }
  }
 
  
`