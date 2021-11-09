import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './style.scss'

const Footer = () => {

  const store = useSelector((s) => s.anio)
  console.log('store->anio', store)
  return (
    <div className="l_footer__wrapper">
      Hero 2021 - { store.selectedanio.target.value } Copyright © Todos los derechos reservados <br/>
    </div>
  )
}

export default Footer
