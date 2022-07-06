import "../styles/globals.css";
import React, { Component } from "react";

// function MyApp({ Component, pageProps }) {
//   return <div>
//     <h1>hello world</h1>
//     <img src='/images/movieSpecter.png'></img>
//   </div>
// }

//this is where i left off and this is the real app, GS also commented the function app.
import {
  ReactiveBase
} from "@appbaseio/reactivesearch";
import HeaderComponent from "../components/common/Header/header";
import MainComponent from "../components/common/Main/main";

//initializing state, it contains a clicked boolean and a variable.
class MyApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      message: "🔬Show Filters",
    };
  }

  //this click function handles both the filters and the movies search. TODO I found out what it is for, it is for the responsive versions of the app.
  handleClick =() => {
    this.setState({
      isClicked: !this.state.isClicked,
      //pass the handleclick function, this.state.message prop to the main component TODO
      message: this.state.isClicked ? "🔬Show Filters" : "🎥Show Movies",
    });
  }

  //renders all of the code in the page.
  render() {
    return (
      <div className="main-container">
        <ReactiveBase
          //  initialState={initialState}
          //this is where the dataset for the  movies comes from and it uses appbase.io to search for backend.
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
              textColor: "#ff0000",
              backgroundColor: "#212121",
              primaryTextColor: "#ff0000",
              primaryColor: "#2196F3",
              titleColor: "#fff",
              alertColor: "#d9534f",
              borderColor: "#666",
            },
          }}
        >  
      <HeaderComponent></HeaderComponent>
      <MainComponent handleClick={this.handleClick} isClicked={this.state.isClicked} message={this.state.message}></MainComponent> 
        </ReactiveBase>
      </div>
    );
  }
}

export default MyApp;
