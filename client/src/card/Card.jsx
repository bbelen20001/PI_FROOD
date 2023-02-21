import style from "./Card.module.css"
const Card =(props)=>{

    return (
        <>
        <div className={style.card}>
        <p>image:{props.image}</p>
         <p>title:{props.title}</p> 
         <p>healthScore:{props.healthScore}</p>
        <p>dietTypes:{props.dietTypes}</p>
        </div>
    </>
    )
}


export default Card