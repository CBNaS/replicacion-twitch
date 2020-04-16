import React, { Component } from 'react'
import Boton from '../components/boton'

export default class barraNavegacionCuentas extends Component {
    render() {
        return (
            <div style = {styles.contenedor}>
                <Boton selection="inicio"/>
                <Boton selection="registro"/>
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
        'justify-content' : 'space-between',
        'align-items' : 'center'
    }
};