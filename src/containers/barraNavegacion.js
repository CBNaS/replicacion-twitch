import React, { Component } from 'react'
import BarraNavMenu from './barraNavegacionMenu'
import BarraBusqueda from '../components/barraBusqueda'
import BarraNavCuentas from './barraNavegacionCuentas'
import {Row, Col} from 'antd'

export default class barraNavegacion extends Component {
    render() {
        return (
            <Row  style = {styles.fila}>
                <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                    <BarraNavMenu />
                </Col>
                <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                    <BarraBusqueda />
                </Col>
                <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                    <BarraNavCuentas />
                </Col>
            </Row>
        )
    }
}

const styles = 
{
    fila : {
        'width' : '100%',
        'height' : '100%',
    },
    columna : {
        'border-style' : 'solid'
    }
};