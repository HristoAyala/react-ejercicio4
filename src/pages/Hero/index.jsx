import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectAnio } from '../../actions/user/selectanio'

const ACCESS_TOKEN = '3875372609247663'
const DOMAIN = 'https://www.superheroapi.com/api.php/'

const Hero = () => {
  const [id, setId] = useState(null)

  const history = useHistory()
  
  const dispatch = useDispatch() 

  const anionuevo=123456;


  // useEffect(() => {
  //   getHeros()
  // }, [])
  // ENDPOINT - API - SERVICIO - PATH
  const getHeros = async () => {

    try {
      const response = await fetch(`${DOMAIN}${ACCESS_TOKEN}/${id}`)
      // , {
      //   body: {
      //     nombre: 'Juan',
      //     edad: 20,
      //     ciudad: 'Lima'
      //   },
      //   headers: {},
      //   method: 'POST',
      // }
      
      const hero = await response.json()
      history.push(`/hero/${hero.id}?hero=${hero.name}&image=${hero.image.url}&full-name=${hero.biography['full-name']}`)
      console.log('response', hero)
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleChange = (e) => {
    const { target : { value } } = e
    setId(value)
  }

  const handleAnio = (anio) => {

    dispatch(selectAnio(anio))
  }
  console.log('value', id)
  return (
    <div>
      <input type="text" onChange={handleChange} /><br />
      <button onClick={getHeros} >Buscar</button><br /><br />

      <input type="num" onChange={handleAnio} /><br />
      Hero
    </div>
  )
}

export default Hero
