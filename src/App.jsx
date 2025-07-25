import { useActionState, useEffect, useState } from "react";
import "./App.css";
import Country from "./Country";
import "./css-file/container.css";

function App() {
  const [countries, set_countries] = useState([]);
const [count,setcount]=useState(0);
const [image,setimg]=useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,cca3,population"
        );
        const data = await response.json();
        set_countries(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchdata();
  }, []);

  // console.log(countries)
const handle_change=(is_visited)=>{
  // console.log(is_visited);
  
  if (is_visited==true) {
    setcount(count+1)
  } else {
    setcount(count-1)
  }
}
function pic_load(flags) {
  console.log(flags);
  
setimg(img => [...img, flags]);
  
  
}

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "tomato" }}>React World Tour</h1>
        <h2>All Countries :{countries.length}</h2>
        <h3>visited country: {count}</h3>
{
  image.map((src,i)=><img src={src} key={i} width='200px'/>)
}
      </div>
      <div className="main-container">
        {countries.map((country) => (
          <Country key={country.cca3} country={country} toggle={handle_change} pic={pic_load}></Country>
        ))}
      </div>
    </>
  );
}

export default App;
