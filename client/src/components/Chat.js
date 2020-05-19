import React from 'react'
import { MDBContainer } from 'mdbreact';
class Chat extends React.Component{
    constructor(props){
        super(props);
        this.collapse = this.collapse.bind(this);
    }
    collapse(){
        if(this.props.collapse)return {display:'none'}
        return {display:'flex'}
    }
    render(){
        return(
            <MDBContainer className="d-lg-none fixed-bottom justify-content-end p-4" style={this.collapse()} fluid>
                <a target="blank" href="https://wa.me/543434570150/?text=Hola%20Sandra%2C%20necesito%20hacerte%20una%20consulta." className="text-dark">
                    <i className="fab fa-whatsapp" style={{fontSize:'3rem'}}></i>
                </a>
            </MDBContainer>
        );
    }
}

export default Chat;