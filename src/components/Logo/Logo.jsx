import s from "./style.module.css"

//clean code: 4 arguments max 
const Logo = (props) => {
  return(
  <div>
    <div className={s.container}>
      <img className={s.img} src={props.image} alt="Logo"/>
      <span className={s.title}>{props.title}</span>
    </div>
    <span className={s.subtitle}>{props.subtitle}</span>
  </div>
  )
}

export default Logo 