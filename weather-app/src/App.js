import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

const api={
  key:"ef5c78c802c6d532d4b6b883390815b6",
  base:"https://api.openweathermap.org/data/2.5/",
}
function App() {
  const [search,setSearch]=useState("")
  const [weather, setWeather] = useState({});

  const searchpressed=()=>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res)=>res.json())
    .then((result)=>{
      setWeather(result)
    })
  }
  return (
    <div className="App">
     <h1>Weather App</h1>
     <input 
     type='text' 
     placeholder='Enter your city'
     onChange={(e)=>setSearch(e.target.value)}
      />
      <button onClick={searchpressed}>Search</button>
      {typeof weather.main !== "undefined" ? (
          <div>
            <p>{weather.name}</p>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
    </div>
  );
}

export default App;
