import React from 'react'

const SearchBar = () => {
  return (
    <>
    <section className='searchbar'>
        <div className="container">
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="search-area">
        <img
          src="/assets/images/search.svg"
          alt="search logo"
          className='magnify'
          style={{marginRight: '-15px'}}
        />
        <input
          type="text"
          className="btn"
          style={{width: '379px'}}
          placeholder=" Search screen by name, category and app name"/>


{/* [(ngModel)]="searchTerm"
          (keyup)="onSearchInput()"
          (input)="onInput($event)" */}






        {/* <div className="suggestion-box" *ngIf="showSuggestions"> */}
          {/* <ul>
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
          </ul> */}
        {/* </div> */}
      </div>
    </div>
  </div>
</div>
    </section>
    </>
  )
}

export default SearchBar