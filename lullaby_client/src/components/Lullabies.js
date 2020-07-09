import React, {Component} from 'react';

class Lullabies extends Component {

    state = {
        lullabies: []
    }

    componentDidMount() {
        this.getLullabies()
    }

    getLullabies = () =>{
        fetch('http://localhost:3000/lullabies')
            .then(response => response.json())
            .then(json => console.log(json))
        .catch(error => console.error(error))
    }
    render() {
        return (
            <h1>Sweet Child of Mine</h1>
        )
    }
}

export default Lullabies;