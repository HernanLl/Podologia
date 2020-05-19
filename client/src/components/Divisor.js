import React from 'react';
import { MDBContainer } from 'mdbreact';

class Divisor extends React.Component{
    render(){
        return (
            <MDBContainer className="p-0" fluid>
                <hr className="w-75 m-auto" style={{border:'.5px solid #eee'}}/>
            </MDBContainer>
            
        );
    }
}

export default Divisor;