import { SearchBox } from "@appbaseio/reactivesearch";
// I changed this too from future to just image
import Image from "next/image";


// hydration can be an html element problem, the Image tag was the problem.

function HeaderComponent() {
  /* this is the navbar and logo */

  return (
    <div className="navbar">
      <div className="logo-container">
        <Image
          width="250px"
          height="80px"
          // changed from rall to null
          layout="fixed"
          className="app-logo"
          src="/images/movieSpecter.png"
          alt="MovieSearch"
        />
      </div>
      {/* The search container and stylings */}
      <div className="search-container">
        {/* the searchBox component creates the search bar UI */}
        <SearchBox
          componentId="mainSearch"
          dataField={["original_title", "original_title.search"]}
          categoryField="genres.keyword"
          className="search-bar"
          queryFormat="and"
          placeholder="Search for movies..."
          iconPosition="left"
          autosuggest={true}
          filterLabel="search"
          enableRecentSuggestions={true}
          enablePopularSuggestions={true}
          enablePredictiveSuggestions={true}
          popularSuggestionsConfig={{
            size: 3,
            minHits: 2,
            minChars: 4,
          }}
          recentSuggestionsConfig={{
            size: 3,
            minChars: 4,
          }}
          index="movies-demo-app"
          size={10}
          innerClass={{ list: "list-class" }}
          addonAfter={
            <span tabIndex="1" className="focus-shortcut">
              /
            </span>
          }
        />
      </div>
    </div>
  );
}
export default HeaderComponent;
