import Link from 'next/link'
import React from 'react'
import moviesStyle from '../../styles/movies.module.scss'
import { useRouter } from 'next/router'


export default function Categories() {

  return (
    <div className={moviesStyle['categories-container']}>
        <LinkRout route='/popular/1' name='Popular'/>
        <LinkRout route='/upcoming/1' name='Up Coming' />
        <LinkRout route='/top_rated/1' name='Top Rated' />
    </div>
  )
}

export const LinkRout = ({ route, name }) => {
  
  const router = useRouter()
  const path = router.asPath

  const activeRoute = (route) => {
    return path === `${route}` ? moviesStyle.active : ''
  } 

  return (
    <Link href={route}>
      <a className={`${activeRoute(route)}`}> 
        { name }
      </a>
    </Link>
  )
}