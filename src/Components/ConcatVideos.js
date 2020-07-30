import React from 'react';
import axios from 'axios';

class ConcatVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video1: '',
      video2: '',
      message: 'SUCCESSFULLY FOUND BOTH VIDEOS',
    };
    this.combineVideos = this.combineVideos.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }



  combineVideos(e) {
    let video1 = this.state.video1;
    let video2 = this.state.video2;
  }

  handleChange(e) {
    console.log('here')
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    return (
      <div id='container'>
        <div className='video'>
          <input type='text' className='video-input' name='video1' value={this.state.video1} onChange={this.handleChange} placeholder='Input Video 1'></input>
        </div>
        <div className='video'>
          <input type='text' className='video-input' name='video2' value={this.state.video2} placeholder='Input Video 2' onChange={this.handleChange}></input>
        </div>
        <button onClick={this.combineVideos}>PRESS TO COMBINE VIDEOS</button>
      </div>
    )
  }
}

export default ConcatVideos;
