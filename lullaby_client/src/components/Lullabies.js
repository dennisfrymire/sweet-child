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

    deleteLullaby = (id, indexOfItemInArray) => {
        fetch(`http://localhost:3000/lullabies/${id}`, 
        {method: "DELETE"})
            .then(data => {
                this.setState({
                    lullabies:[
                        ...this.state.lullabies.slice(0,indexOfItemInArray), ...this.state.lullabies.slice(indexOfItemInArray +1)
                    ]
                })
            })
    }

    toggleEdit = () => {
        this.setState({editLullaby: !this.state.editLullaby})
    }

    updateLullaby = (event, currentLullaby) => {
        event.preventDefault();
        this.toggleEdit();
        fetch('lullabies/' + currentLullaby._id, {
            body: JSON.stringify(currentLullaby),
            method: "PUT",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json()).then(data=>{
            this.getLullabies()
        })}

    
    render() {
        console.log(this.state.lullabies)
        return (
        <div className = "header">
            <h1>Sweet Child of Mine</h1>
        
            
            { this.state.lullabies.map ((lullaby, i) => {
                return(
                    <div key = {lullaby.id} className = "card">
                        <p>{lullaby.title}</p>
                        <p>{lullaby.artist}</p>
                        <img src={lullaby.image}></img>
                        <p><a href={lullaby.lyrics} target="_blank">Lyrics</a></p>
                        <p><a href={lullaby.vid_link} target="_blank">Video</a></p>
                        {/* {this.state.editLullaby && 
                        <Edit currentLullaby={this.state.currentLullaby} toggleEdit={this.toggleEdit} updateLullaby={() => this.updateLullaby(event, this.state.currentLullaby)}/>
                        } */}
                        <button type="button" onClick={() => this.deleteLullaby(lullaby._id, i)}>Delete</button>
                        
                    </div>
                )
            })}
        </div>
        )
    }
}

export default Lullabies;