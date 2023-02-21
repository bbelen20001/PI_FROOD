import { useState } from "react";
import style from "./Form.module.css";
import Validate from "../../middleware/Validate"
import axios from "axios";



const Form = ()=>{
  const [form,setForm] = useState({
    title: " " ,
    dietTypes: 	" " ,
     summary: " ",
    healthScore: " "
  });
  const [errors,setErrors]= useState({
    title: " " ,
    dietTypes: 	" " ,
     summary: " ",
    healthScore: " ",
    diets: []
  })
  const changeHandler=(event)=>{
    const property = event.target.name;
    const value=event.target.value;

    setForm({...form,[property]:value})
    setErrors (Validate({...form,[property]:value}));
  }
  

  const submitHandler =(event)=>{
    event.preventDefault()
    event.preventDefault();
    if (!form.name) delete form.name;
    if (!form.description) delete form.description;
    axios
      .post("/recipes", form)
      .then((res) => alert(res.data))
      .catch((err) => alert(err.response.data.error));
    //clean form
    setForm({
      ...form,
      title: " " ,
      dietTypes: 	" " ,
       summary: " ",
      healthScore: " ",
     
    });
  };
    return(
      
      <form onSubmit={ submitHandler}>
          <div className={style.containerForm}>
      </div>
     
        <div className={style.contForm}>
        <p className={style.titulo}>Crea tu propia receta!</p>
  
        </div>
  
          <div className={style.info}>
            <label className={style.label}>title</label>
            </div>
          <input type="text" value={form.title} onChange={changeHandler} name="title"/>
          {errors.title && <span>{errors.title}</span>}
        <div>
          
        <div className={style.info}>
            <label className={style.label}>dietTypes </label>
            </div>
      
          <input type="text" value= {form.dietTypes} onChange={changeHandler} name="dietTypes"/>

        </div>

        <div className={style.info}>
            <label className={style.label}>summary</label>
            </div>
        <div>
          <input type="text" value= {form.summary} onChange={changeHandler} name="summary"/>
          {errors.summary && <span>{errors.summary}</span>}
        </div>
        
        <div>
        <div className={style.info}>
            <label className={style.label}>HealthScore </label>
            </div>
            <input
              className={style.intRange}
              onChange={changeHandler}
              value={form.healthScore}
              name="healthScore"
              min="0"
              max="100"
              type="range"
            />
            <span className={style.healthScore}>{form.healthScore}</span>
            {errors.healthScore && <span>{errors.healthScore}</span>}
          </div>
          <button className={style.btnForm}>CREATE</button>

       </form>
    )
   }
  
   export default Form;