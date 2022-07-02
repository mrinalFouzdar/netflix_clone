import { useLocation } from 'react-router-dom'
import Row from '../../container/row/Row'
import "./category.css"
const Category = () => {
    const location = useLocation()
    const category =location.state.state
    console.log(location.state.state)
    let movie_category
    // const [movie_category,setMovieCategory]=useState("");
    if(category === "Tv Shows"){
        // setMovieCategory("")
        movie_category="TVShows"
    }else if(category ==="Movies"){
        movie_category="ActionMovies"

        // setMovieCategory("ActionMovies")
    }
    console.log(category)

  return (
    <div className='category_container'>
      {
        (category ==="New & Popular") ? 
        <>
          <Row movie_category="Upcoming" movieType="Upcoming" isBox/>
          <Row movie_category="Trending" movieType="Trending" isBox/>
          <Row movie_category="NetflixOriginals" movieType="Netflix Originals" isBox/>
          <Row movie_category="TopRated" movieType="Top Rated" isBox/>
        </> :
        <Row className="category_row" movie_category={movie_category} movieType={category} isColum/>
      }
    </div>
  )
}

export default Category