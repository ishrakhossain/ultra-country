import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    //console.log(props.country)
    const countryStyle = {border: '1px solid red', margin: '10px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <p>This is {name}</p>
            <img style={{height:'50px'}} src={flag} alt=""/>
            <p><small>population: {population}</small></p>
            <p><small>{region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;