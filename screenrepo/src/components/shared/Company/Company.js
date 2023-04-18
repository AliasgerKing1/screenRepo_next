import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import ImageGallery from "../ImageGallery/ImageGallery";

const Company = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(9);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const res = await fetch(
      `http://localhost:4000/api/screenShot/scroll?_limit=9&_page=${page}`
    );
    const data = await res.json();
    setCard((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) =>
          prev + 9
          );
        console.log(page)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <ImageGallery screenInfo={card} />
      {loading && <Spinner />}
    </>
  );
};

export default Company;