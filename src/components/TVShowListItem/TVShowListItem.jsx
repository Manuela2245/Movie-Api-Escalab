import {SMALL_IMG_COVER_BASE_URL} from "../../config";
import s from "./style.module.css";

//Para que en el titulo de los recomendados no se pase de 20 caracteres
const MAX_TITLE_CHART=20;

const TVShowListItem = ({tvShow,onClick}) => {
  const onClick_=()=>{
    onClick(tvShow);
  };
  return (
    <div>
      <div onClick={onClick_} className={s.container}>
        <img 
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL+tvShow.backdrop_path}
        className={s.img}/>
        <div className={s.title}>
          {tvShow.name.length > MAX_TITLE_CHART 
          ?tvShow.name.slice(0,MAX_TITLE_CHART) + "..."
          :tvShow.name
          }
        </div>
    </div>
    </div>
  )
}

export default TVShowListItem