import React from 'react'
import '../styles/navigation.scss'
import logo from '../images/logo.png'
import searchIcon from '../images/searchIcon.png'
import Menu from './Menu.js'

export default function Navigation() {
  return (
    <div className='navigation'>
        <div className='container'>
            <img className='logo' src={logo} alt='instagram logo'/>
            <div className='searchbar'>
                <img className='searchIcon' src={searchIcon} alt='search icon'></img>
                <span className='searchText'>Search</span>
                </div>
                <Menu />
            </div>
        </div>
  )
}
