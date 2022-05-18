import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contents from "../components/Contents/Contents";
import GoToTop from "../components/GoToTop/GoToTop";
import Intro from "../components/Intro/Intro";
import MoviesDetail from "../components/MoviesDetail/MoviesDetail";

function Home(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? true : false);
  }, [MovieDetail]);

  return (
    <div>
      <Intro />
      <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetail} />
      <Contents />
      <GoToTop />
    </div>
  );
}

export default Home;
