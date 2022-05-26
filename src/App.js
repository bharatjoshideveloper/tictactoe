import React, { Component } from 'react'
import Main from './tictactoe/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Base from './tictactoe/Base';
import { Route, Routes } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      // <Routes>
      //   <Route exact path='/start' element={<Main />} />
      //   <Route exact path='/' element={<Base />} />
      // </Routes>
      <Main />
    )
  }
}

export default App
