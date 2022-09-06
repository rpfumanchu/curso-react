import React from "react";
/*aqui si vamos a incluir .css para que no lo reconozca como java*/ 
import '../hojas-de-estilos/Testimonio.css';

/*con los props "propiedades" podemos recibir valores para usarlos en nuestros componentes*/ 
function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        /*los dos puntos son para buscar,le dice que suba un nivel hasta componentes*/
        /*esta es la manera de poner imagenes que ya tenemos guardadas*/
        /*se usa require para poder pedir la imagen*/
        /*con las comillas ivertidas `` vamos poder insertar codigo de java script y con ${props.}*/ 
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        /*es importante con las imagenes agregar un atributo alt para mayor accesivilidad*/
        /*con strong resaltamos en negrita y le damos importancia si solo queremos negrita se usaria la etiqueta b*/  
        /* asi conseguimos que el alt se dinamico*/
        alt={`Foto de ${props.nombre}`} />
        
        <div className="contenedor-texto-testimonio">
  
          <p className="nombre.testimonio">
            <strong>{props.nombre}</strong> en {props.pais}</p>
          <p className="cargo-testimonio">
            {props.cargo} en <strong>{props.empresa}</strong></p>
          <p className="texto-testimonio">"{props.testimonio}"</p>
        </div>
          
    </div>

  );
}

/* en react necesitamos exportar nuestro archivo para poder importarlo despues en app.js*/
/*existen varias maneras de exportar, con default le decimos que unicamente queremos ese archivo o una exportacion nombrada*/

export default Testimonio;
