import { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <List/>
        </div>
        <Content/>
      </div>
    );
  }

}

export default App;
