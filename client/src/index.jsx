import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Map from './map.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
          // Important! Always set the container height explicitly
          <div>
              <h1>Neighborhood: Rego Park</h1>
              <Map />
          </div>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('app'));