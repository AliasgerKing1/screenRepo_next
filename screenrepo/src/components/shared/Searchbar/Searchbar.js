import React from 'react'

const SearchBar = () => {
  return (
    <>
        <div className="container">
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="search-area">
      <img src="/assets/images/search.svg" className='mt-1' alt="search logo" style={{width : "30px"}} />
        {/* <img
          src="/assets/images/search.svg"
          alt="search logo"
          style={{top : '20px', position : "absolute", left: '13%', width: "40px"}}
        /> */}
        <input
          type="text"
          className="btn2 mt-2"
          style={{width: '379px'}}
          placeholder=" | Search screen by name, category and app name"
        />
        {/* <div className="suggestion-box" *ngIf="showSuggestions">
          <ul>
            <ng-container *ngFor="let suggestion of suggestions">
              <ng-container
                *ngIf="
                  suggestion
                    ? suggestion.compName
                        .toLowerCase()
                        .startsWith(searchInput.toLowerCase())
                    : null
                "
              >
                <li
                  (click)="
                    onSuggestionClick(suggestion ? suggestion.compName : null)
                  "
                >
                  {{ suggestion ? suggestion.compName : null }}
                </li>
                <!-- <ng-container *ngBreak="true"></ng-container> -->
              </ng-container>
            </ng-container>
          </ul>
        </div> */}
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default SearchBar