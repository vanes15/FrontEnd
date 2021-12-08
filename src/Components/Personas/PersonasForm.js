import axios from 'axios';
import React from 'react';

class PersonasForm extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }
    
    //Funcion para enviar request POST al endpoint
    submitNuevaPersona(e){
        //Anular comportamiento por defecto del form
        e.preventDefault();
        //peticion con axios
        axios.post('http://localhost:500/personajes', {
            nombre: this.refs.nombre.value,
            tipo: this.refs.tipo.value,
            personalidad: this.refs.personalidad.value,
            caracteristicas: this.refs.caracteristicas.value,
            gustos: this.refs.gustos.value
        }) .then(()=>{
            alert('El registro se ha registrado Correctamente');
            window.location.reload();
        }).catch(err=>console.log(err));
    }

    render(){
        return (
            <div className="container" style={{
                'backgroundColor': '#eeeeee',
                'padding': '10px 30px',
                'marginBottom': '30px',
                'borderRadius': '5px',
                'width':'400px'
                
            }}>
               <div className="row">
                   <h4 className="center"><strong>Nuevo personaje</strong></h4>
                    <form className="col s12" onSubmit={this.submitNuevaPersona.bind(this)}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="nombre" ref="nombre" type="text" className="validate" />
                                <label htmlFor="nombre">Nombre: </label>
                            </div>
                            <div className="input-field col s6">
                                <input id="tipo" ref="tipo" type="text" className="validate" />
                                <label htmlFor="tipo">Tipo: </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="personalidad" ref="personalidad" type="text" className="validate" />
                                <label htmlFor="personalidad">Personalidad: </label>
                            </div>
                            <div className="input-field col s6">
                                <input id="caracteristicas" ref="caracteristicas" type="text" className="validate" />
                                <label htmlFor="caracteristicas">Caracteristicas: </label>
                            </div>
                            <div className="input-field col s6">
                                <input id="gustos" ref="gustos" type="text" className="validate" />
                                <label htmlFor="gustos">Gustos: </label>
                            </div>
                            
                        </div>
                        <div>
                            <button type="submit" name="action" className="waves-effect red lighten-4 btn">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
   
}

export default PersonasForm;
