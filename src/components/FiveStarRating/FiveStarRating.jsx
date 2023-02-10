import {StarFill, StarHalf, Star as StarEmpty} from "react-bootstrap-icons"

const FiveStarRating = (props) => { // 4.35 rating
  //Paso1 declarar array de ionos
  const starList =[];

  //Paso2 guardar numero de estrellas a pintar
  const starFillCount= Math.floor(props.rating) // 4.35 rating
  //console.log(starFillCount)

  //Paso3 guardar if si o no es media estrella
  const hasHalfStar= props.rating - parseInt(props.rating)>= 0.5 // 4.35 - 4 = 0.35 >= 0.5 = false
  //console.log(hasHalfStar)

  //Paso4 guardar estrellas sin pintar
  const emptyStarCount= 5-starFillCount-(hasHalfStar ? 1 :0) // 5 - 4 - 0 = 1

  //Paso5 push las estrellas pintadas (StarFill)
  for(let i=1; i<=starFillCount; i++){
    starList.push(<StarFill key={"star-fill"+i}/>)
  }

  //Paso6 push las estrellas sin pintar (StarEmpty)
  for (let i=1; i<=emptyStarCount; i++){
    starList.push(<StarEmpty key={"star-empty"+i}/>)
  }

  return (
    <div>{starList}</div>
  )
}

export default FiveStarRating