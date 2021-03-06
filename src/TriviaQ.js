import React from 'react';

const triviaQ = (props)=>{
    // capitalizes first letter of string
    let capitalizedLetter = props.charAt(0).toUpperCase();
    // adds capitalized letter to rest of string
    let capitalizedString = capitalizedLetter + props.slice(1);
    // dynamically displays string as it changes through API calls
    
    return <p>{capitalizedString}</p>;
}

export default triviaQ;