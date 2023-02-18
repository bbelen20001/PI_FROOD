import {Recipes,Detail,Landing,Form} from "./views"
import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
     {location.pathname !== "/" && <NavBar/>}
     <Route exact path="/"  component={Landing}/>
     <Route exact path="/detail"  component={Detail}/>
     <Route exact path="/create"  component={Form}/>
    <Route path="/Recipes" render={()=> <Recipes />} />
  
    </div>
  );
}

export default App;
