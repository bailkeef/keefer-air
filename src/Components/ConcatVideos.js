import React from 'react';
import axios from 'axios';
import mergeVideos from '../videoStitch'

class ConcatVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video1: '',
      video2: '',
      loading: false,
      message: '',
    };
    this.combineVideos = this.combineVideos.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }



  async combineVideos(e) {
    this.state.loading = true;
    // let video1 = await axios.get(this.state.video1);
    // let video2 = await axios.get(this.state.video2);
    let video1 = this.state.video1;
    let video2 = this.state.video2;
    let videos = [video1, video2];
    let newVideo = mergeVideos(videos);
    this.state.message = newVideo;
    this.state.loading = false;

  }

  handleChange(e) {
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    return (
      <div id='container'>
        <div className='video'>
          <p>VIDEO 1</p>
          <input type='text' className='video-input' name='video1' value={this.state.video1} onChange={this.handleChange} placeholder='Input Video 1'></input>
        </div>
        <div className='video'>
          <p>VIDEO 2</p>
          <input type='text' className='video-input' name='video2' value={this.state.video2} placeholder='Input Video 2' onChange={this.handleChange}></input>
        </div>
        <button onClick={this.combineVideos}>PRESS TO COMBINE VIDEOS</button>
      </div>
    )
  }
}

export default ConcatVideos;

