import { Search as SearchIcon} from "react-bootstrap-icons"
import s from  "./style.module.css"

const SearchBar = ({onSubmit}) => { //solo una prop entonces se escribe el nombre
  
  function submit (e){
    if(e.key ==="Enter" && e.target.value.trim() !== ""){
      onSubmit(e.target.value);
    }
  }
  
  return (
    <>
    <SearchIcon size={27} className={s.icon}/>
    <input
    onKeyUp={submit}
    className={s.input} 
    type="text"
    placeholder={"Search the TV Show you want to watch"}/>
    </>
  )
}

export default SearchBar 
