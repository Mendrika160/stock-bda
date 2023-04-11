import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import styled from 'styled-components';


function Navbar({children}) {
  return (
    <>
        <Container>
            <Sidebar />
            <nav className='nav'>
                <MenuIcon/>
            </nav>
            
           
        </Container>
        
        
    </>
  )
}

export default Navbar

const Container =  styled.div`
    display:flex;
    gap:2rem;
    padding:0;
    
`