import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import data from './data'

const LinkComponent = ({link, name}) => {
  return (
      <a className="App-link" href={link} target="_blank" rel="noopener noreferrer" >
        {name}
      </a>
  )
}

function App() {
  useEffect(() => {
    console.log('data:', data)
  })
  return (
    <div className="App">
      <header className="App-header">
        <p>Deep Linking List</p>
      </header>
        {data.map( (item, key) => {
            return (<div key={key} className="custom">
                <LinkComponent link={item.link} name={item.name} />
             </div>)
          })}
    </div>
  );
}

export default App;
