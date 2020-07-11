import React, {Component} from 'react';
import Lullabies from './components/Lullabies'
import './App.css';

class App extends Component {

  state = {
    lullabies: [],
    formInputs: {
      title: '',
      artist: '',
      lyrics: '',
      image: '',
      vid_link: ''
      }
    }
  

  handleChange = (event) => {
    const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
    this.setState(updateInput)
  }
  
  handleSubmit = (event) =>{
    event.preventDefault()
    fetch('http://localhost:3000/lullabies', {
      body: JSON.stringify(this.state.formInputs),
      method: 'POST',
   headers: {
     'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'
   }
  })
   .then(createdLullaby => {
     return createdLullaby.json()
   })
  
   .then(jsonedLullaby => {
     // reset the form
     // add notice to notices
     this.setState({
       formInputs: {
         title: '',
         artist: '',
         lyrics: '',
         image: '',
         vid_link: ''
        },
       lullabies: [jsonedLullaby, ...this.state.lullabies]
     })
   })
   .catch(error => console.log(error))
  }
  
   componentDidMount() {
    this.getNotices()
  }
  
  getNotices = () =>{
    fetch('http://localhost:3000/lullabies')
      .then(response => response.json())
      .then(json => this.setState({lullabies: json}))
      .catch(error => console.error(error))
  }
  

  render() {
  return (
    <div className="App">
      <div className="container">
      <Lullabies />
      </div>
      <nav>
            <h4>Add New Song </h4>
            <form onSubmit={this.handleSubmit}>
  <label htmlFor="title">Song</label>
  <input
    type="text"
    id="title" placeholder="song title" value={this.state.formInputs.title}
    onChange={this.handleChange}
  />
  <label htmlFor="artist">Artist</label>
  <input
    type="text"
    id="artist" placeholder="artist" value={this.state.formInputs.artist}
    onChange={this.handleChange}
  />
  <label htmlFor="lyrics">Lyrics</label>
  <input
    type="text"
    id="lyrics" placeholder="lyrics" value={this.state.formInputs.lyrics}
    onChange={this.handleChange}
  />
  <label htmlFor="image">Album/Song Image</label>
   <input
    type="text"
    id="image" placeholder="image url" value={this.state.formInputs.image}
    onChange={this.handleChange}
  />
  <input type="submit" className="submit" />
</form>

          </nav>
      
    </div>
  );
}
}

export default App;
