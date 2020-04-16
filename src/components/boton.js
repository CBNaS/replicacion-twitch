import React from 'react'
import '../assets/styles/style.css'

function boton(props) {
    return (
        <div>
            {
                props.selection==="inicio"?
                    <button style = {styles.inicioSesion}>Iniciar Sesion</button>
                :props.selection==="registro"?
                    <button style = {styles.registro} >Registro</button>
                :<button>Error</button>
            }
        </div>
    )
}

const styles = 
{
    inicioSesion : {
        'background-color' : 'rgb(51, 51, 55)'
    },
    registro : {
        'background-color' : 'rgb(115, 0, 230)'
    }
};

export default boton
