import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import Alert from './Alert';

class Turno extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: {
                name: '',
                phone: '',
                email: '',
                message: ''
            },
            alert: {
                type: '',
                message: '',
                active:false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const miInit = {
            method: 'POST',
            body: JSON.stringify(this.state.body),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        this.setState({alert:{type:'info',message:'Aguarde un instante',active:true}});
        fetch('send-email',miInit).then(info => info).then((res)=>{
            if(res.status===200){
                this.setState({alert:{type:'',message:'',active:false}});
                this.setState({alert:{type:'success',message:'Mensaje enviado con exito',active:true}});
            }
            else this.setState({alert:{type:'error',message:'Error el enviar mensaje',active:true}});
        });
    }
    handleCancel(){
        if(this.state.alert.type==='success')this.props.handleTurno();
        else this.setState({alert:{type:'',message:'',active:false}});
    }
    render(){
        return (
            <MDBContainer className="d-flex justify-content-center" fluid>
                <Alert type={this.state.alert.type} message={this.state.alert.message} active={this.state.alert.active} handleCancel={this.handleCancel}/>
                <MDBRow className="h-100 w-100 d-flex justify-content-center align-items-center">
                    <MDBCol md="12" className="d-flex justify-content-end">
                        <h1 style={{cursor:'pointer'}} onClick={this.props.handleTurno}>X</h1>
                    </MDBCol>
                    <MDBCol md="12" lg="4">
                        <form className="w-100" action="/send-email" method="post" >
                            <p className="h4 text-center">Formulario de contacto</p>
                            <label
                                htmlFor="name"
                                className="w-100 grey-text font-weight-light"
                            >
                            Nombre
                            <input
                                autoFocus="true"
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                value={this.state.body.name}
                                onChange={
                                    (event)=>{this.setState({
                                        body:{
                                            name: event.target.value,
                                            phone:this.state.body.phone,
                                            email:this.state.body.email,
                                            message:this.state.body.message}
                                    })}
                                }
                            />
                            </label>
                            <label
                                htmlFor="phone"
                                className="w-100 grey-text font-weight-light"
                            >
                            Telefono
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className="form-control"
                                value={this.state.body.phone}
                                onChange={(event)=>{this.setState({
                                    body: {
                                        name: this.state.body.name,
                                        phone:event.target.value,
                                        email:this.state.body.email,
                                        message:this.state.body.message
                                }})}}
                            />
                            </label>
                            <label
                                htmlFor="email"
                                className="w-100 grey-text font-weight-light"
                            >
                            Email
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                value={this.state.body.email}
                                onChange={(event)=>{this.setState({
                                    body: {
                                        name: this.state.body.name,
                                        phone:this.state.body.phone,
                                        email:event.target.value,
                                        message:this.state.body.message
                                    }})}}
                            />
                            </label>
                            <label
                                htmlFor="message"
                                className="w-100 grey-text font-weight-light"
                            >
                            Mensaje
                            <textarea
                                type="textarea"
                                rows="5"
                                id="message"
                                name="message"
                                className="form-control"
                                value={this.state.body.message}
                                onChange={(event)=>this.setState({
                                    body: {
                                        name: this.state.body.name,
                                        phone:this.state.body.phone,
                                        email:this.state.body.email,
                                        message:event.target.value
                                    }})}
                            />
                            </label>
                            <div className="text-center py-4 mt-3">
                            <MDBBtn className="btn btn-outline-purple" onClick={this.handleSubmit}>
                                Send
                                <MDBIcon far icon="paper-plane" className="ml-2" />
                            </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Turno;