import React from 'react';

class MusicContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tunes: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
      fetch(url)
        .then(res => res.json())
        .then(tunes => this.setState({ tunes: tunes}))
        .catch(err => console.error);
  }

  render(){
    return (
      <div>
        <h2>Music Charts</h2>
      </div>
    )
  }
}
export default MusicContainer;
