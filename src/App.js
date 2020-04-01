import React, {useState} from 'react';
import Results from './Results'

/**
 * Main shell of the application, it holds the list of options to click on
 */
function App() {

  // This App tracks the data to display in the results section via the state.
  // "useState" creates 2 variables, an object to access the current state and
  // a function to update it.
  //
  // If you are using class-based components (ie "class App extends React.Component{...}")
  // you would create use the constructor and use this.state = {} to initialize and
  // this.setState() to update it.
  const [resultsData,setResultsData] = useState({})

  /**
   * Sends a request to Reqres.in based on the provided endpoint
   * @param {string} endpoint The API endpoint to send to Reqres.in
   */
  function callApi(endpoint){
    fetch("https://reqres.in/api/"+endpoint).then(res => {
      res.json().then( data => {
        console.log(data)

        // This updates the component state for the App element
        setResultsData(data)
      })
    })
  }

  return (
      <div>
        <ul>
          {/* Clicking on any <li> element sends the API endpoing to callApi() */}
          <li onClick={()=>{callApi("users?page=1")}}>
            List Users (Page 1)
          </li>
          <li  onClick={()=>{callApi("users?page=2")}}>
            List Users (Page 2)
          </li>
          <li  onClick={()=>{callApi("users/1")}}>
            Single User (id=1)
          </li>
        </ul>

        {/*
        This is the Results element which accepts information through the props.myData
        If I named the attribute `some_other_value`. It would be accessed through
        `props.some_other_value`
         */}
        <Results myData={resultsData}/>
      </div>
  );
}

export default App;
