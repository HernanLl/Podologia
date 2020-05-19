import React from 'react';
import { MDBCard, MDBCardImage, MDBCardText, MDBCardTitle, MDBCardBody, MDBCol } from 'mdbreact';

class ServiceCard extends React.Component{
    render(){
        return (
            <MDBCol md="12" lg="6" className="p-4 mx-auto">
                <MDBCard className="px-0 m-auto h-100">
                    <MDBCardImage style={{height:'300px',width:'100%'}} src={this.props.url} waves />
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.title}</MDBCardTitle>
                        <MDBCardText className="text-dark">
                            {this.props.description}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            
        );
    }
}

export default ServiceCard;