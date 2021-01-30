import React, { useState, useEffect } from "react";
import axios from "axios";
import PicCont from "./PicCont";

export default function PicDay() {
  const [picData, setPic] = useState([]);
  const [picDate, setDate] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=dFVeEogQlQ90ZU5h66EEVt8QZq5dnk7oD6HKZdep&date=${picDate}`
      )
      .then((res) => {
        console.log("Res: ", res);
        setPic(res.data);
      })
      .catch((err) => {
        console.log("It broke? ...It broke. : ", err);
      });
  }, [picDate]);

  return (
    <div className="container">
      <button onClick={() => setDate((Math.floor(Math.random() * (2019 - 2015 + 1)) + 2015)+ '-' + (Math.floor(Math.random() * 12) + 1) + '-' + (Math.floor(Math.random() * 28) + 1)  )}>img</button>
      <div className="entry">
        return <PicCont image={picData} />;
      </div>
    </div>
  );
}
