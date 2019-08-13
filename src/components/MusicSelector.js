import React from 'react';

const MusicSelector = (props) => {

  const feed = props.tunes.feed;

  console.log();

  // for(let i = 0; i < feed.length; i++) {
  //   console.log(feed["entry"]);
  // }

  // const option = props.tunes.map((tune, index) => {
  //   return <option value={index} key={index}>{tune}</option>
  // });

  function handleChange(event) {
    console.log(event.target.value);
  }

  return(
    <select id="music-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a Tune</option>
    </select>
  )
}

export default MusicSelector;
