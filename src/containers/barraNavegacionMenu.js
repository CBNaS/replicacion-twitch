import React, { Component } from 'react'
import Descubrir from '../components/descubrir'
import Probar from '../components/probarPrime'
import Explorar from '../components/explorar'

export default class barraNavegacionMenu extends Component {
    render() {
        return (
            <div style = {styles.contenedor}>
                <Descubrir />
                <Probar />
                <Explorar />
            </div>
        )
    }
}

const styles = 
{
    contenedor : {
        'width' : '100%',
        'height' : '100%',
        'display' : 'flex',
        'justify-content' : 'space-around',
        'align-items' : 'center',
        'font-style' : 'bolder'
    }
};