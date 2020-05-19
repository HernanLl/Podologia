import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import * as Scroll from 'react-scroll';
let Element = Scroll.Element;

class Contact extends React.Component{
    render(){
        return (
            <MDBContainer id="contact" className="py-4">
                <Element name="contact"></Element>
                <MDBRow>
                    <MDBCol md="12">
                        <h1 className="text-center colorText">Contacto</h1>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="text-center">
                    <MDBCol md="12" lg="4">
                        <div className="d-flex flex-md-column justify-content-center p-2">
                            <i className="fas fa-phone mr-2" style={{fontSize:'1.5rem'}}></i>
                            <p className="m-0">3434048931</p>
                        </div>
                    </MDBCol>
                    <MDBCol md="12" lg="4">
                        <div className="d-flex flex-md-column justify-content-center p-2">
                            <i className="fab fa-facebook mr-2" style={{fontSize:'1.5rem'}}></i>
                            <a 
                                href="https://www.facebook.com/Sandra-Costa-Podologia-Reflexologia-126143447408595/" 
                                target="_blank"
                                rel="noopener noreferrer">
                                    /sandracosta
                                </a>
                        </div>
                    </MDBCol>
                    <MDBCol md="12" lg="4">
                        <div className="d-flex flex-md-column justify-content-center p-2">
                            <i className="fas fa-envelope mr-2" style={{fontSize:'1.5rem'}}></i>
                            <p className="m-0">slc@live.com.ar</p>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <iframe 
                        title="map"
                        width="100%" 
                        height="600" 
                        src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=alem%20453%20parana%20entre%20rios+(Sandra%20Costa)&ie=UTF8&t=&z=17&iwloc=B&output=embed" 
                        frameborder="0"
                        className="iframe">
                        </iframe>
                </MDBRow>
            </MDBContainer>
        );
    }
}
export default Contact;