import Categories from '../components/movies/Categories';
import DisplayMovies from '../components/movies/DisplayMovies';
import Meta from '../components/layout/Meta';
import Panner from '../components/Panner';
import FilterBar from '../components/FilterBar';

export default function Home({ movies }) {
  return (  
    <>
      <Meta title='Favorite' />
      <FilterBar />
      <DisplayMovies data={movies} />
    </>
  )
}

export async function getStaticProps() {

  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&api_key=${process.env.DB_API_KEY}&page=3`);

  const data = await res.json();

  if (!data.total_pages > 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      movies: data.results,
    },
    revalidate: 60,
  }
}
