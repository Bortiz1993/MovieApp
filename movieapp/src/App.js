import React, {Component} from "react";
import {
  ReactiveBase,
  SearchBox,
  MultiDataList,
  RangeSlider,
  DateRange,
  MultiList,
  SelectedFilters,
  ReactiveList,

} from "@appbaseio/reactivesearch";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isClicked: false,
      message: "🔬Show Filters",
    }
  }
  
}

export default App;
