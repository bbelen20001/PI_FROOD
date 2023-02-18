import { Link }  from "react-router-dom"
import style from "./NavBar.module.css"
const NavBar = ()=>{
    return(
        <div className={style.mainContainer}>
        <Link to= "/recipes">Recipes</Link>
        <Link to= "/create">Form</Link>
        </div>
    )
}

export default NavBar;