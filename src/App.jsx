import { useState, useEffect, useMemo, useCallback } from "react";
import Logo from "./components/Logo/Logo";
import SearchBar from "./components/SearchBar/SearchBar";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import TVShowList from "./components/TVShowList/TVShowList";
import { TVShowApi } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import logoImg from "./assets/images/logo.png";
import s from "./style.module.css";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState(); //para fetchTVPopulars

  const [recommendationList, setRecommendationList] = useState([]); //para fetchTVRecommendations

  //One version with async function without usecallback
   /* async function fetchTVPopulars() {
    //definida en tv-show
    const popularTVShowList = await TVShowApi.fetchPopulars();
    if (popularTVShowList && popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }  */

  //Another Version with UseCallback: devuelve una funcion memorizada
 /*  const fetchTVPopulars= useCallback(async()=>{
    const popularTVShowList = await TVShowApi.fetchPopulars();
    if(popularTVShowList.length > 0){
      setCurrentTVShow(popularTVShowList[0])
    }
  },[currentTVShow]) */

    //Another Version with useMemo: devuelve una valor memorizado
    const fetchTVPopulars=useMemo(()=>{
      return async ()=>{
        const popularTVShowList = await TVShowApi.fetchPopulars();
        if(popularTVShowList.length > 0){
          setCurrentTVShow(popularTVShowList[0])
        }
      }
    },[]);

  async function fetchTVByTitle(title) {
    //definida en tv-show
    const searchResponse = await TVShowApi.fetchByTitle(title);
    if (searchResponse.length > 0) {
      setCurrentTVShow(searchResponse[0]);
    }
  }

  async function fetchTVRecommendations(tvShowId) {
    //definida en tv-show
    const recommendationListResponse = await TVShowApi.fetchRecommendation(
      tvShowId
    );
    if (recommendationListResponse.length > 0) {
      setRecommendationList(recommendationListResponse.slice(0, 10));
      //slice: copia de una parte del array empezando por inicio hasta fin.
    }
  }

  function updateCurrentTVShow(tvShowUpdate) {
    setCurrentTVShow(tvShowUpdate);
  }

  useEffect(() => {
    fetchTVPopulars();
  }, [fetchTVPopulars]);

  useEffect(() => {
    if (currentTVShow) {
      fetchTVRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  console.log(currentTVShow);
  return (
    <>
      <div
        className={s.main_container}
        style={{
          background: currentTVShow
            ? ` linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),
              url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center/cover`
            : "black",
        }}
      >
        <div className={s.header}>
          <div className="row">
            <div className="col-4">
              <Logo title="WatchShows" image={logoImg} />
            </div>
            <div className="col-md-12 col-lg-4">
              <SearchBar onSubmit={fetchTVByTitle} />
            </div>
          </div>
        </div>
        <div className={s.tv_show_details}>
          {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
        </div>
        <div className={s.recommended_shows}>
          {currentTVShow && (
            <TVShowList
              onClickItem={updateCurrentTVShow}
              tvShowList={recommendationList}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
