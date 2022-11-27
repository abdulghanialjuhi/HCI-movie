import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Context } from '../../context/useGlobal'
import navStyle from '../../styles/nav.module.scss'
import SearchForm from '../movies/SearchForm'
import classnames from 'classnames'

export default function NavBar() {

  const [extendNav, setExtendNav] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [isMore, setIsMore] = useState(false)
  const [isMoreMore, setIsMoreMore] = useState()

  const classNames = classnames(navStyle['nav-container'], {[navStyle['nav-container--extend']]: extendNav });

  const handleBurgerCLick = () => {
    if (!extendNav) {
      setOpenSearch(true)
    } else {
      setOpenSearch(false)
    }
    setExtendNav(!extendNav)
  }

  const handleMoreClick = () => {
    setIsMore(!isMore)
    if (isMoreMore) setIsMoreMore(null)
  }

  const moreArr = {
    1: ['crime', 'histor', 'sports'], 
    2: ['adventure', 'fantasy', 'educatonal'], 
    3: ['football', 'baskitball', 'tenis'], 
  }

  const handleMoreMore = (e) => {
    // console.log(e.target.getAttribute('name'));
    if (isMoreMore === e.target.getAttribute('name')) {
      setIsMoreMore(null)
    } else {
      setIsMoreMore(e.target.getAttribute('name'))
    }

  }

  return (
    <header className={navStyle.header}>
      <div className={classNames}>

        <div className={navStyle['first-nav']}>
          <div className={navStyle['upper-container']}>
            <div className={navStyle['nav-container__title-container']}>
                <Link href='/popular/1'>
                  <h2>
                    HBO
                  </h2>
                </Link> 
            </div>
            <div className={navStyle['burger-icon-container']}>
              <GiHamburgerMenu size={22} onClick={handleBurgerCLick} />
            </div>
          </div>
          <div className={navStyle.navigation}>
              <LinkRout route='/series' name='Series' /> 
              <LinkRout route='/popular' name='Movies' />
              <LinkRout route='/' name='Asian' />
              <LinkRout route='/' name='Live TV' />
              <div className={navStyle.moreContainer}>
                <h3 onClick={handleMoreClick}> More </h3>
                {isMore && <div className={navStyle.more}>
                  <span name='1' onClick={handleMoreMore}> Documantary </span>
                  <span name='2' onClick={handleMoreMore}> Kids and Family </span>
                  <span name='3' onClick={handleMoreMore}> Comedy </span>

               {isMoreMore &&   <div className={navStyle.moreMore}> 
                    {moreArr[isMoreMore].map((value) => (
                      <span key={value}> {value} </span>
                    ))}
                  </div>}
                </div>}
              </div>
            </div>
        </div>

        <div className={navStyle['righ-container']}>
          <SearchForm openSearch={openSearch}
              setOpenSearch={setOpenSearch} />
        </div>

            <LinkRout route='/dashboard/watchlist' name='Watchlist' /> 
            <LinkRout route='/dashboard'  name='My Account' />
                  
      </div>
    </header>
  )
}

const LinkRout = ({ route, name }) => {
  
  const router = useRouter()
  const path = router.asPath
  const { isAuth, loading } = useContext(Context)

  const activeRoute = (name == 'Movies' || name == 'Series') && path === route ? navStyle.active : ''
  
  return (
    <>
     {loading ? null :
      <Link href={`${route}`}>
        <a className={`${activeRoute}`}> 
          { name }
        </a>
      </Link>}
    </>
  )
}