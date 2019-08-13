import React, {Fragment} from 'react';



const MusicDetail = (props) => {
  if (!props.tune) return null;
  return (
    <Fragment>
    <h3>
    {props.tune["im:name"]}
    </h3>
    </Fragment>
  )
}

export default MusicDetail;
