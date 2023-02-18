import Card from "../card/Card"
import style from  "./CardsContainer.module.css"

const CardsContainer = ()=>{
    const recipes = [


    ]
    return(
        <div className={style.container}>
             {recipes.map(recipes=>{
            return <Card
            id={recipes.id}
            title={recipes.title}
            summary={recipes.summary}
            healthScore={recipes.healthScore}
            dietTypes={recipes.dietTypes}
            />
         })}

        </div>
    )
}

export default CardsContainer