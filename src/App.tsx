import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Layout } from './Components/Layout/Index';
import { Content } from './Content/Index';

function App() {
  return (
    <div className="App">
      <Header/>
      <Layout>
          <Content/>
      </Layout>
    </div>
 
  );
}

export default App;
