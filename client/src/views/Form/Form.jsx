import { useState } from "react";

const Form = ()=>{
  const [form,setForm] = useState({
    title: " " ,
    dietTypes: 	" " ,
     summary: " ",
    healthScore: " "
  })
  const changeHandler=(event)=>{
    const property = event.target.name;
    const value=event.target.value;

    setForm({...form,[property]:value})

  }
    return(
       <form>
        <div>
          <label>title: </label>
          <input type="text" value={form.title} onChange={changeHandler} name="title"/>
        </div>
        <div>
          <label>dietTypes: </label>
          <input type="text" value= {form.dietTypes} onChange={changeHandler} name="dietTypes"/>
        </div>
        <div>
          <label>summary: </label>
          <input type="text" value= {form.summary} onChange={changeHandler} name="summary"/>
        </div>
        
        <div>
        <label>healthScore: </label>
          <input type="text" value= {form.healthScore} onChange={changeHandler} name="healthScore"/>
        </div>

       </form>
    )
   }
   
   export default Form;