import React from 'react'

function Home() {
  return (
    <>
    <div
  className="main mt-2"
  style={{backgroundColor: '#f0f0f0 !important', minHeight: '100vh'}}
>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-2 col-md-3 col-sm-4">
        {/* <app-sidebar></app-sidebar> */}
      </div>
      <div className="col-lg-10 col-md-9 col-sm-8">
        {/* <app-searchbar
          (searchResults)="onSearchResults($event)"
          (searchSuggestionsByBox)="onSearchResultsBox($event)"
        ></app-searchbar> */}
        <hr />
        <h3 className="mt-5 ms-5">
          {/* Showing { searchList.length } screens from { appNum } apps */}
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