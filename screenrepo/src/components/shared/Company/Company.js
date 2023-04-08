import React, { useState, useEffect } from "react";
import { getPagination } from "../../services/ScrollService";
import Spinner from "../Spinner/Spinner";

const Company = () => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(16);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedCompanies, setLoadedCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await getPagination(start, end);
      setData(prevData => [...prevData, ...response.data]);
      setIsLoading(false);
    };
    fetchData();
  }, [start, end]);


  useEffect(() => {
    if (data.length > 0) {
      const firstCompanies = data.slice(0, 8);
      setLoadedCompanies(prevCompanies => [...prevCompanies, ...firstCompanies]);
      console.log(loadedCompanies);
    }
  }, [data]);
  
  
  useEffect(() => {
    if (isLoading) {
      const nextCompanies = data.slice(loadedCompanies.length, loadedCompanies.length + 8);
      setTimeout(() => {
        setLoadedCompanies(prevCompanies => [...prevCompanies, ...nextCompanies]);
        setIsLoading(false);
      }, 2000); // Simulate a delay while the images load
    }
  }, [isLoading, data, loadedCompanies]);

  const handleScroll = () => {
    const isScrolledToLastImages =
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 10 * 100;

    if (isScrolledToLastImages && data.length === end) {
      setStart(prevStart => prevStart + 16);
      setEnd(prevEnd => prevEnd + 16);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  return (
    <>
    <div className="row">


      {loadedCompanies.map(company => (
        <div className="col-md-3"key={company.compName}>
          <h2>{company.compName}</h2>
          <div>
              <img key={company.screen_shot} src={company.screen_shot} alt={company.compName} className="img-fluid" />
          </div>
        </div>
      ))}
      </div>
      {isLoading && <Spinner />}
    </>
  );
};

export default Company;
