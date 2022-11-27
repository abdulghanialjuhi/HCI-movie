import React from 'react'
import movieStyle from '../styles/movies.module.scss'
import { LinkRout } from './movies/Categories'
import { AiFillFire, AiOutlineLineChart, AiFillHeart } from 'react-icons/ai'


export default function FilterBar() {
    const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
  return (
    <div className={movieStyle.filterBar}>
        <div className={movieStyle.firstFilter}>
            <div className={movieStyle.eachLink}>
                <LinkRout route='/favorite' name='Favorite' />
                <AiFillHeart size={20} />
            </div>

            <div className={movieStyle.eachLink}>
                <LinkRout route='/popular' name='Popular'/>
                <AiFillFire size={20} />
            </div>
      
            <div className={movieStyle.eachLink}>
                <LinkRout route='/top_rated' name='Top Rated' />
                <AiOutlineLineChart size={20} style={{fill: 'orange'}} />
            </div>
        </div>

        <div className={movieStyle.secondFilter}>
            <select name="language" defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Language</option>
                <option value="Engilsh">Engilsh</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Arabic">Arabic</option>
            </select>
            <select name="year" defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Year</option>

                {years.map((year) => (
                    <option key={year} value="year">{year}</option>
                ))}
            </select>
            <select name="Type" defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Type</option>
                <option value="Action">Action</option>
                <option value="Crime">Crime</option>
                <option value="Drama">Drama</option>
            </select>
        </div>
        
    </div>
  )
}
