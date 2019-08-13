import React from 'react';

const MusicSelector = (props) => {

  const feed = props.tunes.map((tune, index) => {
    return <option value={index} key={index}>{tune["im:name"]}</option>
  });

  function handleChange(event) {
    console.log(event.target.value);
  }

  return(
    <select
    id="music-selector"
    defaultValue="default"
    onChange={handleChange}
    >
      <option disabled value="default">Choose a Tune</option>
    </select>
  )
}

export default MusicSelector;
