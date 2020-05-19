import React from 'react';
import ServiceCard from './ServiceCard';
import podologia from '../assets/podologia.jpg';
import reflexologia from '../assets/reflexologia.jpg';
import reflexologiaFacial from '../assets/reflexologiaFacial.jpg';
import tecnicaMetamorfica from '../assets/tecnicaMetamorfica.jpg';
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import * as Scroll from 'react-scroll';
let Element = Scroll.Element;


class Services extends React.Component{
    render(){
        const descriptions = {
            podologia: "La podología es una ciencia que tiene por objeto el estudio de las enfermedades y alteraciones que afectan al pie.  Micosis (hongos), pie de atleta, uñas encarnadas, hiperqueratosis, helomas, pie geriátrico, pie diabético. Tres años de estudio, título universitario y permanentes cursos de actualización, avalan mi trabajo.",
            depilacion: "La depilación es una de las principales preocupaciones estéticas. Eliminar el vello de las zonas más indeseadas se convierte en un auténtico quebradero de cabeza en muchas ocasiones. Hoy en día, la gran variedad de métodos y técnicas depilatorias hace que esta tarea sea más sencilla y no conlleve demasiadas complicaciones.",
            reflexologiaPodal: "La reflexología es una terapia complementaria, que estimula al cuerpo para su reequilibrio. Esto se hace estimulando zonas reflejas en los pies que representan el cuerpo en su totalidad. Los pies representan el cuerpo perfectamente. Cada órgano tiene su zona refleja. En el pie derecho encontramos los órganos de nuestro lado derecho y así en el pie izquierdo. Los órganos pares se encuentran en los dos pies; estos se encuentran igual que en el cuerpo. Con la estimulación manual en la zona afectada, trabajamos lo que necesite reequilibrarse. Así podemos tratar problemas musculares, del sistema nervioso, digestivo, circulatorio, inmunológico, entre otros",
            reflexologiaFacial: "La reflexología facial es un moderno método terapéutico natural de estimulación facial. Esta técnica se realiza a través de presiones manuales en el rostro y cráneo, obteniéndose resultados más rápidos sobre la parte mental y emocional, porque se logra el equilibrio del sistema nervioso. Algunos de los beneficios de esta terapia son estimular los distintos sistemas del cuerpo de forma integral, descompone y libera toxinas, alivia la tensión en la cara, el cuero cabelludo y el cerebro; permite lograr una profunda relajación.",
            tecnicaMetamorfica: "Activa la energía vital y la conciencia. En embarazadas, ayuda tanto a la madre como al bebe, afianza el lazo de unión madre-hijo haciendo de ésta una conexión amorosa, fuerte y sana. Ayuda a liberar miedos, ansiedades y molestias que pueden surgir transformándolas en confianza y seguridad."
        }
        return (
            <MDBContainer id="services" className="p-4">
                <Element name="services"></Element>
                <MDBRow>
                    <MDBCol md="12" className="text-center colorText">
                        <h1>Servicios</h1>
                    </MDBCol>
                    <MDBRow>
                        <ServiceCard 
                            title="Podologia" 
                            description={descriptions.podologia} 
                            url={podologia}
                            />
                        <ServiceCard 
                            title="Reflexologia Podal" 
                            description={descriptions.reflexologiaPodal} 
                            url={reflexologia}
                            />
                        <ServiceCard 
                            title="Reflexologia Facial" 
                            description={descriptions.reflexologiaFacial} 
                            url={reflexologiaFacial}
                            />
                        <ServiceCard 
                            title="Tecnica metamorfica" 
                            description={descriptions.tecnicaMetamorfica} 
                            url={tecnicaMetamorfica}
                            />
                    </MDBRow>
                    <MDBCol md="12" className="text-center">
                        <MDBBtn color="secondary" onClick={this.props.handleTurno}>
                            Pedir turno
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Services;