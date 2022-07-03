import { useLocation } from "react-router-dom";
import Row from "../../container/row/Row";
import styles from "./category.module.css";
const Category = () => {
  const location = useLocation();
  const category = location.state.state;
  // console.log(location.state.state);
  let movie_category;
  // console.log(category);

  if (category === "Tv Shows") {
    movie_category = "TVShows";
  } else if (category === "Movies") {
    movie_category = "ActionMovies";
  } else if (category === "My List") {
    return (
      <div className={styles.category_container}>
        {" "}
        <h1 className={styles.noExists}>No List Exists</h1>{" "}
      </div>
    );
  }

  return (
    <div className={styles.category_container}>
      {category === "New & Popular" ? (
        <>
          <Row movie_category="Upcoming" movieType="Upcoming" isBox />
          <Row movie_category="Trending" movieType="Trending" isBox />
          <Row
            movie_category="NetflixOriginals"
            movieType="Netflix Originals"
            isBox
          />
          <Row movie_category="TopRated" movieType="Top Rated" isBox />
        </>
      ) : (
        <Row movie_category={movie_category} movieType={category} isColum />
      )}
    </div>
  );
};

export default Category;
