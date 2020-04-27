import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainLayout from './app/layouts/MainLayout';
import Home from './app/pages/Home';
import PropsExamples from './app/pages/PropsExamples';
import HTTPExamples from './app/pages/HTTPExamples';

class App extends React.Component
{
  render() {
    return (<Router>
        <MainLayout>
          <Route path={"/"} exact component={Home} />
          <Route path={"/props-examples"} component={PropsExamples} />
          <Route path={"/http-examples"} component={HTTPExamples} />
        </MainLayout>
      </Router>)
  }
}

export default App;