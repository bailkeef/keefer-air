import React from 'react';
import axios from 'axios';
import mergeVideos from '../videoStitch'

class ConcatVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video1: '',
      video2: '',
      video1load: false,
      video2load: false,
      loading: false,
    };
    this.combineVideos = this.combineVideos.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadVideo1 = this.loadVideo1.bind(this);
    this.loadVideo2 = this.loadVideo2.bind(this);
  }



  async combineVideos(e) {
    this.setState({loading: true});
    let video1 = await axios.get(this.state.video1);
    let video2 = await axios.get(this.state.video2);
    let videos = [video1, video2];
    let newVideo = mergeVideos(videos);
    console.log(newVideo);
    this.setState({loading: false});
  }

  handleChange(e) {
    this.setState({[e.target.name] : e.target.value});
  }

  loadVideo1(e) {
    this.setState({video1load: true});
  }

  loadVideo2(e) {
    this.setState({video2load: true});
  }

  render() {
    return (
      <div id='container'>
        <div className='video'>
          <p>VIDEO 1</p>
            <p>
              <small>ex.) http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4</small>
            </p>
          <input type='text' className='video-input' name='video1' value={this.state.video1} onChange={this.handleChange} placeholder='Input Video 1'></input>
          <button onClick={this.loadVideo1}>Load Video</button>
        </div>
        {this.state.video1load &&
          <div className='video'>
            <video width="320" height="200" controls autoPlay id='thevid' src={this.state.video1} />
          </div>
        }
          <div className='video'>
            <p>VIDEO 2</p>
            <p>
              <small>ex.) http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</small>
            </p>
            <input type='text' className='video-input' name='video2' value={this.state.video2} placeholder='Input Video 2' onChange={this.handleChange}></input>
            <button onClick={this.loadVideo2}>Load Video</button>
          </div>
          {this.state.video2load &&
            <div className='video'>
              <video width="320" height="200" controls autoPlay id='thevid' src={this.state.video1} />
            </div>
          }
        <button onClick={this.combineVideos} id='final-button'>PRESS TO STITCH VIDEOS</button>
        {this.state.loading &&
          <div>
            <div>JOB PROCESSING</div>
            <img src="/loading.gif"/>
          </div>
        }
      </div>
    )
  }
}

export default ConcatVideos;

