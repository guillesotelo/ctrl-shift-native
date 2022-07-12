import React, { useEffect } from 'react'
import CTAButton from '../CTAButton'
import { VERSION } from '../../constants/app'
import './styles.css'

export default function Menu(props) {
  const { menuClass, setMenuClass, navigation } = props
  const { name } = localStorage.getItem('ledger') ? JSON.parse(localStorage.getItem('ledger')) : {}

  const handleLogOut = () => {
    setMenuClass('menu-hidden')
    localStorage.removeItem('user')
    localStorage.removeItem('ledger')
    navigation.navigate('login')
  }

  const handleAccount = () => {
    navigation.navigate('account')
    setMenuClass('menu-hidden')
  }

  return (
    <div className={`menu-container ${menuClass}`}>
      <div className='menu-items'>
        <CTAButton
          label='Mi cuenta'
          color='#242F40'
          handleClick={handleAccount}
          size='100%'
          style={{ color: '#CCA43B', fontSize: '5vw' }}
        />
        {
          name &&
          <>
            <CTAButton
              label='Movimientos'
              color='#242F40'
              handleClick={() => {
                setMenuClass('menu-hidden')
                navigation.navigate('home')
              }}
              size='100%'
              style={{ color: '#CCA43B', fontSize: '5vw', marginTop: '2vw' }}
            />
            <CTAButton
              label='Ajustes'
              color='#242F40'
              handleClick={() => {
                setMenuClass('menu-hidden')
                navigation.navigate('settings')
              }}
              size='100%'
              style={{ color: '#CCA43B', fontSize: '5vw', marginTop: '2vw' }}
            />
            <CTAButton
              label='Notas'
              color='#242F40'
              handleClick={() => {
                setMenuClass('menu-hidden')
                navigation.navigate('notes')
              }}
              size='100%'
              style={{ color: '#CCA43B', fontSize: '5vw', marginTop: '2vw' }}
            />
          </>
        }
        <CTAButton
          label='Cerrar sesion'
          color='#242F40'
          handleClick={handleLogOut}
          size='100%'
          style={{ color: '#CCA43B', fontSize: '5vw', marginTop: '2vw' }}
        />
      </div>
      <h4 className='app-version'>{VERSION}</h4>
    </div>
  )
}
