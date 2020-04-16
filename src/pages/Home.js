import React, { Component } from 'react'
import BarraNavegacion from '../containers/barraNavegacion'
import {BrowserRouter as Router} from 'react-router-dom'
import ContenedorInferior from '../containers/contendorInferior'
import Principal from './Principal'
import Explorar from './Explorar'
import ProbarPrime from './ProbarPrime'

export default class Home extends Component {
    render() {
        return (
            <Router>
                <div style = {styles.barraNav}>
                    <BarraNavegacion />
                </div>
                <div style = {styles.container}>
                    <ContenedorInferior />
                </div>
            </Router>
        )
    }
}

const styles = 
{
    barraNav : {
        'color' : 'white',
        'width' : '100%',
        'height' : '10%',
        'position' : 'fixed',
        'top': '0',
        'left': '0',
        'background-color' : 'rgb(24, 24, 27)',
        'box-shadow' : '0px 1px 1px black',
        'z-index' : '1'
    },
    container : {
        'position' : 'fixed',
        'top': '10%',
        'left': '0',
        'width' : '100%',
        'height' : '90%',
        'background-color' : 'green'
    }
};