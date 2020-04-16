import React, { Component } from 'react'
import {Row, Col} from 'antd'
import Slider from './slider'
import Contenedor from './contenedorPrincipal'

export default class contendorInferior extends Component {
    render() {
        return (
            <Row style ={styles.tamaño}>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} style = {styles.slider}>
                    <Slider />
                </Col>
                <Col xs={20} sm={20} md={20} lg={20} xl={20} xxl={20} style = {styles.container}>
                    <Contenedor />
                </Col>
            </Row>
        )
    }
}

const styles = 
{
    slider : {
        'background-color' : 'blue',
    },
    container : {
        'background-color' : 'red',
    },
    tamaño : {
        'height' : '100%'
    }
};