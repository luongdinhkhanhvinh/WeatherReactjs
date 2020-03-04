import * as React from 'react';
import '../css/App.css';
// import BarExample from '../containers/Chart';

import Header from './Header';
import Display from '../containers/Display';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Display />
      </div>
    );
  }
}

export default App;
