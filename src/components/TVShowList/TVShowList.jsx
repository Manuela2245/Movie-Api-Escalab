import TVShowListItem from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css"

const TVShowList = ({onClickItem,tvShowList}) => {
  return (
    <div>
      <div className={s.title}>Shows you probably like:</div>
      <div className={s.list}>
        {tvShowList.map((tvShow)=>{
          return(
            <span
            key={tvShow.id}>
              <TVShowListItem 
              tvShow={tvShow}
              onClick={onClickItem}/>
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default TVShowList