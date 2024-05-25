import React from 'react';
import './App.scss';
import Header from './components/Header';
import Cv from './components/Cv';
import Project from './components/Project';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {

  return (

    <div>
    <Header/>
    <Cv/>
    <Project />
    </div>

  );
}

export default App;
