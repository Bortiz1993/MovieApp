import ListComponent from "../List/list";
import languages from "../../data/Languages/languages";

import {
	MultiDataList,
	RangeSlider,
	DateRange,
	MultiList,
	SelectedFilters
  } from "@appbaseio/reactivesearch";

function MainComponent(props) {    
	//all filter components are inside the sub-container.
	return (        
		<div className="sub-container">
		<div
		  className={
			props.isClicked ? "left-bar-optional" : "left-bar"
		  }
		>
		  <div className="filter-heading center">
			<b>
			  {" "}
			  <i className="fa fa-pied-piper-alt" /> Genres{" "}
			</b>
		  </div>
		  {/* a genre-based filterable UI */}
		  <MultiList
			componentId="genres-list"
			dataField="genres.keyword"
			className="genres-filter"
			size={20}
			sortBy="asc"
			queryFormat="or"
			selectAllLabel="All Genres"
			showCheckbox={true}
			showCount={true}
			showSearch={true}
			placeholder="Search for a Genre"
			react={{
			  and: [
				"mainSearch",
				"results",
				"date-filter",
				"RangeSlider",
				"language-list",
				"vote-average-list",
			  ],
			}}
			showFilter={true}
			filterLabel="Genre"
			URLParams={false}
			innerClass={{
			  label: "list-item",
			  input: "list-input",
			}}
		  />
		  <hr className="blue" />

		  <div className="filter-heading center">
			<b>
			  <i className="fa fa-star" /> Ratings
			</b>
		  </div>
		  {/* It is a UI widget for ratings-based filter */}
		  <RangeSlider
			componentId="RangeSlider"
			dataField="vote_average"
			className="review-filter"
			tooltipTrigger="hover"
			range={{
			  start: 0,
			  end: 10,
			}}
			rangeLabels={{
			  start: "0",
			  end: "10",
			}}
			react={{
			  and: [
				"mainSearch",
				"results",
				"language-list",
				"date-Filter",
				"genres-list",
				"vote-average-list",
			  ],
			}}
			//a boolean?
			showHistogram
		  />
		  <hr className="blue" />
		  <div className="filter-heading center">
			<b>
			  {" "}
			  <i className="fa fa-language" /> Languages{" "}
			</b>
		  </div>
		  {/* multiple languages filter */}
		  <MultiDataList
			componentId="language-list"
			dataField="original_language.keyword"
			className="language-filter"
			size={100}
			sortBy="asc"
			queryFormat="or"
			selectAllLabel="All Languages"
			showCheckbox={true}
			showSearch={true}
			placeholder="Search for a language"
			react={{
			  and: [
				"mainSearch",
				"results",
				"date-filter",
				"RangeSlider",
				"genres-list",
				"vote-average-list",
			  ],
			}}
			//the data of multiple languages.
			data={languages}
			showFilter={true}
			filterLabel="Language"
			URLParams={false}
			innerClass={{
			  label: "list-item",
			  input: "list-input",
			}}
		  />
		  <hr className="blue" />

		  <div className="filter-heading center">
			<b>
			  {" "}
			  <i className="fa fa-calendar" /> Release Date{" "}
			</b>
		  </div>
		  {/* a filter for movie release dates */}
		  <DateRange
			componentId="date-filter"
			dataField="release_date"
			className="datePicker"
		  />
		</div>
		<div
		  className={
			props.isClicked
			  ? "result-container-optional"
			  : "result-container"
		  }
		>
		  {/* clears the selected filters */}
		  <SelectedFilters
			showClearAll={true}
			clearAllLabel="Clear filters"
			className="selected-filters"
		  />
		  <ListComponent></ListComponent>
		  
		</div>
		{/* this button handles the original state of message? */}
		{/* <button
		  className="toggle-button"
		  onClick={this.handleClick.bind(this)}
		>
		  {this.state.message}
		</button> */}
	  </div> 
	)
}
export default MainComponent