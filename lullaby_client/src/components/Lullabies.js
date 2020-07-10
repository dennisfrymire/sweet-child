import React, {Component} from 'react';

class Lullabies extends Component {

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
        
    handleSubmit  = (event) =>{
        event.preventDefault()
        console.log(this.state.formInputs)
    }

    componentDidMount() {
        this.getLullabies()
    }

    getLullabies = () =>{
        fetch('http://localhost:3000/lullabies')
            .then(response => response.json())
            .then(json => this.setState({lullabies: json}))
        .catch(error => console.error(error))
    }
    
    render() {
        console.log(this.state.lullabies)
        return (
        <div>
            <h1>Sweet Child of Mine</h1>
        

            { this.state.lullabies.map (lullaby => {
                return(
                    <div key = {lullaby.id} className = "card">
                        <p>{lullaby.title}</p>
                        <img src={lullaby.image}></img>
                        <p>{lullaby.lyrics}</p>
                        <p>{lullaby.artist}</p>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default Lullabies;