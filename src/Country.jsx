import { useState } from "react";
import "./css-file/container.css";
import { use } from "react";


const Country = ({ country,toggle,pic}) => {
//   console.log(country);

  const { name, flags, population, cca3 } = country;
const [visited,setvisited]=useState(false);

function newvisited() {
    setvisited(!visited)
toggle(!visited)
}
function pic_transfer() {
    pic(flags.png)
}

  return (
    <>

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
      <p>{visited?'i visited ':'i want to visited'}</p>
      <button onClick={pic_transfer} className="button">Add Flags</button>
    </div>
    </>
  
  );
};

export default Country;
