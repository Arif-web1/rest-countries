import { useState } from "react";
import "./css-file/container.css";


const Country = ({ country }) => {
  console.log(country);

  const { name, flags, population, cca3 } = country;
const [visited,setvisited]=useState(false);
function newvisited() {
    setvisited(!visited)

}

  return (
    <div id="contaier"
      style={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "LavenderBlush",
      }}
    >
      <h2 style={{ color: "navy" }}>{name.common}</h2>
      <img
        style={{ width: "400px", height: "200px" }}
        src={flags.png}
        alt=""
        srcset=""
      />
      <h3>{name.official}</h3>
      <h3>Population : {population}</h3>
      <h5>Country Code : {cca3}</h5>
      <button onClick={newvisited} className='button'>Going</button>
      <p id="first">{visited?'i visited ':'i want to visited'}</p>
    </div>
  );
};

export default Country;
