
import { getAllImages } from "../../../Redux/AllImageReducer"
import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"

import Sidebar from "../../shared/Sidebar/Sidebar"
import { getImages } from "../../services/ImageService"
const Home = () => {
  let dispatch = useDispatch()
  
  let state = useSelector(state=>(state.AllImageReducer))
  let AllImagesFun = async() => {
    let result = await getImages();
    dispatch(getAllImages(result.data))
  }
  useEffect(()=> {
if(state.length === 0) {
  AllImagesFun();
}
  }, [])
  return (
    <>
<div
  className="main mt-2"
  style={{backgroundColor: '#f0f0f0 !important', minHeight: '100vh'}}
>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-2 col-md-3 col-sm-4">
        <Sidebar></Sidebar>
      </div>
      <div className="col-lg-10 col-md-9 col-sm-8">
        {/* <app-searchbar
          (searchResults)="onSearchResults($event)"
          (searchSuggestionsByBox)="onSearchResultsBox($event)"
        ></app-searchbar> */}
        <hr />
        <h3 className="mt-5 ms-5">
          {/* Showing {{ searchList.length }} screens from {{ appNum }} apps */}
        </h3>
        <div className="row me-5">
          <div className="col-md-11 ms-5">
            {/* <app-screenshot
              [searchResults]="searchResults2"
              [searchSuggestionsByBox]="searchResultsBox"
              (searchList)="onSearchList($event)"
            ></app-screenshot> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Home