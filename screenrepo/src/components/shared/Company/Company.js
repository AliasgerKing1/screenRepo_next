import React, { useState, useEffect } from "react";
import axios from "axios";

const Company = () => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/api/screenShot/data/start/"+ start +"/end/" + end);
      setData(prevData => [...prevData, ...response.data]);
    };
    fetchData();
  }, [start, end]);
  console.log(data); // Add this line to log the value of the data array

  const handleScroll = () => {
    const isScrolledToLastImages = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10*100;
    if (isScrolledToLastImages) {
      setStart(prevStart => prevStart + 10);
      setEnd(prevEnd => prevEnd + 10);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
    <h1>hiii</h1>
      {data.map((item, n) => (
        <div key={n}>
        <img src={item.screen_shot} style={{width : "600px", height : "auto"}} />
        </div>
      ))}
    </>
  );
};


export default Company;




 