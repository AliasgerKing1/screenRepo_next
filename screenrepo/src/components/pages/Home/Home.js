import { getAllImages } from "../../../Redux/AllImageReducer";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Company from "../../shared/Company/Company";
import Searchbar from "../../shared/SearchBar/SearchBar";
import Sidebar from "../../shared/Sidebar/Sidebar";
import { getImages } from "../../services/ImageService";

const Home = () => {
  const dispatch = useDispatch();

  let state = useSelector((state) => state.AllImageReducer);
  let AllImagesFun = async () => {
    let result = await getImages();
    dispatch(getAllImages(result.data));
  };
  useEffect(() => {
    if (state.length === 0) {
      AllImagesFun();
    }
  }, []);

  return (
    <>
      <div
        className="main mt-2"
        style={{ backgroundColor: "#f0f0f0 !important", minHeight: "100vh" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4">
              <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 col-md-9 col-sm-8">
              <Searchbar />

              {/* <h3 className="mt-5 ms-5">
                Showing {{ searchList.length }} screens from {{ appNum }} apps
              </h3> */}
              <div className="row mx-2">
                <div className="col-12">
                  <Company />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
