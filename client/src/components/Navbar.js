import React from 'react';
import * as Scroll from 'react-scroll';
let Link = Scroll.Link;
class Navbar extends React.Component{
    responsiveNavbar(){
        if(this.props.collapse){
            return {transform: 'translate(0%)'};
        }
    }
    burgerCollapse(){
        return (this.props.collapse) ?
            (<div className="burger my-auto" onClick={this.props.handleCollapse}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>)
            :
            (<div className="burger my-auto" onClick={this.props.handleCollapse}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>);
    }
    ulCollapse(){
        return (this.props.collapse) ?
            (<ul className="nav-links-responsive" style={this.responsiveNavbar()}>
                    <Link style={{flex:1}} to="services" smooth={true} duration={0} onClick={this.props.handleCollapse}>
                        <li className="mx-2 px-2 h-100 d-flex align-items-center">
                            <p id="link1" className="animated fadeIn slow text-dark link p-0 m-0">Servicios</p>
                        </li>
                    </Link>
                    <Link style={{flex:1}} to="formation" smooth={true} duration={0} onClick={this.props.handleCollapse}>
                        <li className="mx-2 px-2 h-100 d-flex align-items-center">
                            <p id="link2" className="animated fadeIn slow text-dark link p-0 m-0">Formacion</p>
                        </li>
                    </Link>
                    <Link style={{flex:1}} to="contact" smooth={true} duration={0} onClick={this.props.handleCollapse}>
                        <li className="mx-2 px-2 h-100 d-flex align-items-center">
                            <p id="link3" className="animated fadeIn slow text-dark link p-0 m-0">Contacto</p>
                        </li>
                    </Link>
                </ul>
            )
            :
            (<ul className="nav-links-responsive" style={this.responsiveNavbar()}>
                    <Scroll.Link to="services">
                        <li className="mx-2 h-100 px-2 d-flex align-items-center">
                            <p id="link1" className="d-none slow text-dark link p-0 m-0">Servicios</p>
                        </li>
                    </Scroll.Link>
                    <Scroll.Link to="formation">
                        <li className="mx-2 h-100 px-2 d-flex align-items-center">
                            <p id="link2" className="d-none slow text-dark link p-0 m-0">Formacion</p>
                        </li>
                    </Scroll.Link>
                    <Scroll.Link to="contact">
                        <li className="mx-2 h-100 px-2 d-flex align-items-center">
                            <p id="link3" className="d-none text-dark link p-0 m-0">Contacto</p>
                        </li>
                    </Scroll.Link>
                </ul>
            );
    }
    render(){
        return (
            <nav className="w-100 d-flex justify-content-between z-depth-1 py-1 px-4 text-white">
                <div className="px-3 d-flex align-items-center rounded-circle logo">SC</div>
                <ul className="nav-links h-100">
                    <Scroll.Link to="services">
                       <li className="mx-2 h-100 px-2 d-flex align-items-center">
                           <p className="text-white link p-0 m-0">Servicios</p>
                       </li>
                    </Scroll.Link>
                    <Scroll.Link to="formation">
                        <li className="mx-2 h-100 px-2 d-flex align-items-center">
                            <p className="text-white link p-0 m-0">Formacion</p>
                        </li>
                    </Scroll.Link>
                    <Scroll.Link to="contact">
                        <li className="mx-2 h-100 px-2 d-flex align-items-center">
                            <p className="text-white link p-0 m-0">Contacto</p>
                        </li>
                    </Scroll.Link>
                </ul>
                {this.ulCollapse()}
                {this.burgerCollapse()}
            </nav>
        );
    }
}

export default Navbar;