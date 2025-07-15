import { useActionState, useEffect, useState } from "react";
import "./App.css";
import Country from "./Country";
import "./css-file/container.css";

function App() {
  const [countries, set_countries] = useState([]);

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
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "tomato" }}>React World Tour</h1>
        <h2>All Countries :{countries.length}</h2>
        <h3>visited country: 0</h3>
      </div>
      <div className="main-container">
        {countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </>
  );
}

export default App;
