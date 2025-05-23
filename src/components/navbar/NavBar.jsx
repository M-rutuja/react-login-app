import React from 'react'
import './NavBar.css'
import toggle_light from '../../assets/sun.png'
import toggle_dark from '../../assets/moon.png'
import search_light from '../../assets/search_light.png'
import search_dark from '../../assets/search_dark.png'
import logo_light from '../../assets/logo_light.png'
import logo_dark from '../../assets/logo_dark.png'

const NavBar = ({theme,setTheme}) => {

    const toggle_mode = () => {
        theme == 'light'? setTheme('dark'):setTheme('light');
    }


  return (

    <div className='App'>
        <div className='bg'>
            <div className='navbar'>
                <img src={theme == 'light' ? logo_light : logo_dark } alt="" className='logo' />
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Courses</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
                
                <div className='search-box'>
                    <input type='text' placeholder='Search'/>  
                    <img src={theme == 'light' ? search_light : search_dark } alt='' className='search_light'/>
                </div>
        
                 <img onClick={() => {toggle_mode()}} src={theme == 'light' ? toggle_dark : toggle_light} alt='' className='toggle'/>
            </div>
        
        </div>
    </div>

    

  )
}

export default NavBar
