import axios from 'axios';
import React from 'react';

const PersonasDetalle = (props) => {
    const submitDelete=()=>{
        
            axios.delete(`http://localhost:500/personajes/${props.personita._id}`)
            .then(()=>{
                alert('El registro se ha eliminado Correctamente');
                window.location.reload();
            })
            .catch((err)=>alert(`Ha ocurrido un error ${err}`));
    }

    return (
        <div>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card red lighten-4">
                        <div className="card-content white-text">
                            <span className="card-title"><strong>Nombre:&nbsp;{props.personita.nombre}</strong></span>
                            <p><strong>Tipo:</strong>&nbsp; {props.personita.tipo}</p>
                            <p><strong>Personalidad:</strong>&nbsp;{props.personita.personalidad}</p>
                            <p><strong>caracteristicas:</strong> &nbsp;{props.personita.caracteristicas}</p>
                            <p><strong>Gustos:</strong>&nbsp;{props.personita.gustos}</p>
                        </div>
                        <div className="card-action">
                            <button name="action" className="waves-effect grey lighten-1  btn" onClick={submitDelete}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonasDetalle;
