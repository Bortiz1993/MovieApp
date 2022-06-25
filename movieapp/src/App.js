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

//initializing state, it contains a clicked boolean and a variable.
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isClicked: false,
      message: "🔬Show Filters",
    }
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
      message: this.state.isClicked ? "Show Filters" : "Show Movies",

    });
  }
  
  render(){
    return(
      <div className="main-container">
      <ReactiveBase
      app="movies-demo-app"
      url="https://81719ecd9552:e06db001-a6d8-4cc2-bc43-9c15b1c0c987@appbase-demo-ansible-abxiydt-arc.searchbase.io"
      //stylings for the main container.
      enableAppbase
      theme={{
        typography: {
          fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
          fontSize: "16px",
        },
        colors: {
          backgroundColor: "#212121",
          primaryTextColor: "#fff",
          primaryColor: "#2196F3",
          titleColor: "#fff",
          alertColor: "#d9534f",
          borderColor: "#666",
        },
      }}
      ></ReactiveBase>
      </div>
    )
  }
}

export default App;
