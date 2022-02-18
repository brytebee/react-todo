import React from 'react';
import ReactDOM from 'react-dom';
//component file
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import NotMatch from './pages/NotMatch';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/brytebee/react-todo" element={<TodoContainer />} />
        <Route path="/brytebee/react-todo/about" element={<About />}></Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
