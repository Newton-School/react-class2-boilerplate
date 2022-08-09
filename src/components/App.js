import React from 'react'
import axios from 'axios';
import '../styles/App.css';

/**
 * @API_URL :  "https://reqres.in/api/users/?page=1&per_page=3"
 * @task : fetch 3 users per page and display avatar, username or that user.
 * @task2 :add a loadMore button to fetch next page of users and display avatar, username or that user.
 */
class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      page : 1 
    };
  }
  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
     /**
      * complete here
      */
  }

  render() {
    const {data, page} = this.state;
  
    const handleLoad = async()=>{
      /**
       * complete here
       */
    } 

    return (
      <div className="App" style={{}}>
        {
           data && data.map((res, index) => {
            console.log(res);
            return (
              <div key={res.id + index}>
                <img style={{ height: 300, width: 300 }} src={res["avatar"]} />
                <h1>{res["first_name"]}</h1>
              </div>
            )
          })
        }
        <button id='loadMore' onClick={handleLoad}>Load More</button>
      </div>
    )
  }

}

export default App;

