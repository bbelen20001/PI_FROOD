import Card from "../card/Card"
import style from  "./CardsContainer.module.css"
import { useSelector} from "react-redux"
const CardsContainer = ()=>{
  
	const recipes =  useSelector (state=>state.recipes)
    
    return(
        <>
        <div className={style.container}>
             {recipes?.map(recipes=>{
            return <Card
            id={recipes.id}
			image={recipes.image}
            title={recipes.title}
            healthScore={recipes.healthScore}
            dietTypes={recipes.dietTypes}
            key = {recipes.id}
            />
         })}
        </div>
        </>
    )
}

export default CardsContainer