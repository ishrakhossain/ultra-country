import React, { useState , useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import Country from './components/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data=>
      {
        setCountries(data);
        const name = data.map(country => country.name)
        //console.log(name)
      })

  }, [])
  const handleAddCountry = (country) =>{
    const newCart = [...cart, country];//ager cart er shte notun car, ager cart e 0 chilo length
    setCart(newCart); //notun cart add hoilo
  }

  return (
    <div className="App">
      <h1>Countries: {countries.length}</h1>
      <h5>Country added: {cart.length} </h5>
      <Cart cart = {cart}></Cart>
      
        {
          countries.map(country=> <Country  country = {country} handleAddCountry = {handleAddCountry} key = {country.alpha3Code}></Country>)
        }
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
