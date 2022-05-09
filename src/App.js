import logo from './logo.svg';
import RecipeTab from './RecipeTab';
import './key.js'
import './App.css';
import Axios from 'axios';
import {useState} from 'react';
function App() {
 const [query,setquery] = useState("");
 const [recipes,setrecipes] = useState([]);
 const [healthLabel,sethealthLabel] = useState("vegan");
 const YOUR_APP_ID = "ea0c7a7a";
 const YOUR_APP_KEY = "5bf729cadc7f6657875ad2a7462676b4";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

async function getRecipes(){
  var result = await Axios.get(url);
  setrecipes(result.data.hits);
  console.log(result.data);
}

const onSubmit = (e)=>{
  e.preventDefault();
  getRecipes();
}

  return (
    <div className="app">
    <h1 >Food Recipe Plaza 🍔</h1>
    <form className="app_searchForm" action="" onSubmit={onSubmit}>
    <input type="text" className="app_input" placeholder="Enter Ingrident" value={query} onChange={(e)=>setquery(e.target.value)}/>
    <input className='app_submit' type="submit" value="search"/>
    <select className="app_healthLabels" >
    <option onClick={()=>sethealthLabel("vegan")}>Vegan</option>
    <option onClick={()=>sethealthLabel("vegetarian")}>Vegetarian</option>
    <option onClick={()=>sethealthLabel("paleo")}>Paleo</option>
    <option onClick={()=>sethealthLabel("dairy-free")}>Dairy-free</option>
    <option onClick={()=>sethealthLabel("gluten-free")}>Gluten-free</option>
    <option onClick={()=>sethealthLabel("wheat-free")}>Wheat-free</option>
    <option onClick={()=>sethealthLabel("low-sugar")}>Low-sugar</option>
    <option onClick={()=>sethealthLabel("egg-free")}>Egg-free</option>
    <option onClick={()=>sethealthLabel("peanut-free")}>Peanut-free</option>
    <option onClick={()=>sethealthLabel("tree-nut-free")}>Tree-nut-free</option>
    <option onClick={()=>sethealthLabel("soy-free")}>Soy-free</option>
    <option onClick={()=>sethealthLabel("fish-free")}>Fish-free</option>
    <option onClick={()=>sethealthLabel("shellfish-free")}>Shellfish-free</option>
    </select>
    </form>

    <div className='app_recipes'>
    {recipes.map((recipe)=>{
     return <RecipeTab recipe={recipe}/>;
    })}
    </div>
    </div>
  );
}

export default App;
