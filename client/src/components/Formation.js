import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import * as Scroll from 'react-scroll';
let Element = Scroll.Element;
class Formation extends React.Component{
    render(){
        return (
            <MDBContainer id="formation" className="p-4">
                <Element name="formation"></Element>
                <MDBRow>
                    <MDBCol md="12">
                        <h1 className="text-center colorText">Formacion</h1>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="text-lg-center">
                    <MDBCol md="12">
                        <ul>
                            <li className="list-group-item my-2 text-center" style={{border:'.5px solid #eee'}}>Técnica Podóloga. 2012 - Facultad de bioquímica y ciencias biológicas</li>
                            <li className="list-group-item my-2 text-center" style={{border:'.5px solid #eee'}}>Terapeuta Reflexóloga. 2018 - Escuela de reflexología Alma y Cuerpo</li>
                            <li className="list-group-item my-2 text-center" style={{border:'.5px solid #eee'}}>Reflexología Facial. 2018 - Escuela de reflexología Alma y Cuerpo</li>
                            <li className="list-group-item my-2 text-center" style={{border:'.5px solid #eee'}}>Técnica Metamórfica. 2018 - Escuela de reflexologia Alma y Cuerpo</li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            
        );
    }
}
export default Formation;