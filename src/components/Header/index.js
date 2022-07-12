import React, { useState, useEffect } from 'react'
import MenuIcon from '../../assets/menu-icon.svg'
import UserGroup from '../../assets/user-group.svg'
import Menu from '../Menu'
import './styles.css'

export default function Header({ navigation }) {
  const [menuClass, setMenuClass] = useState('menu-hidden')
  const { name } = localStorage.getItem('ledger') ? JSON.parse(localStorage.getItem('ledger')) : {}

  useEffect(() => {
    window.addEventListener('mouseup', e => {
      if (e.target != document.querySelector('#menu-icon')) setMenuClass('menu-hidden')
    })
  }, [])

  const toggleMenu = () => {
    menuClass === 'menu-hidden' ? setMenuClass('menu-toggled') : setMenuClass('menu-hidden')
  }

  return (
    <>
      <div className='header-container'>
        <div onClick={() => navigation.navigate('ledger')}>
          <img style={{ transform: 'scale(1.2)' }} className='svg-menu' src={UserGroup} alt="User Group" />
        </div>

        <div onClick={name ? () => navigation.navigate('home') : () => { }}>
          <h4 className='user-group-title'>{name || ''}</h4>
        </div>

        <div className='header-menu' onClick={() => toggleMenu()}>
          <img id='menu-icon' className='svg-menu' src={MenuIcon} alt="Menu" />
        </div>
      </div>
      <Menu menuClass={menuClass} setMenuClass={setMenuClass} />
    </>
  )
}
