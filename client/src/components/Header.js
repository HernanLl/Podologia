import React from 'react';
import file from '../assets/fondo.jpg';
import fileresponsive from '../assets/fondoresponsive.jpg';
class Header extends React.Component{
    srcImage(){
        if(window.innerWidth>768)return file;
        else return fileresponsive;
    }
    componentDidMount(){
        window.addEventListener("resize",()=>{
            this.setState({width:window.innerWidth});
        });
    }
    render(){
        return (
            <div>
                <img 
                    className="position-absolute vh-100 w-100" 
                    src={file} 
                    onLoad={(this.props.onLoadImage)} 
                    style={{objectFit:'cover'}}
                    alt="feets"
                    />
                <div className="filter absolute-top w-100 vh-100"></div>
                <div className="mask w-100 d-flex flex-column justify-content-center align-items-center text-white text-center p-4">
                    <h1 className="titleHeader">Sandra Costa</h1>
                    <p className="textHeader">Soy podologa y reflexologa, entre otros servicios que ofrezco en mi consultorio. Tengo muchos años en el rubro y me gusta lo que hago</p>
                </div>
            </div>
        );
    }
}

export default Header;