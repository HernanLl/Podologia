import React from 'react';
import Navbar from '../components/Navbar';
import Divisor from '../components/Divisor';
import Formation from '../components/Formation';
import Contact from '../components/Contact';
import Turno from '../components/Turno';
import * as Scroll from 'react-scroll';
import Chat from '../components/Chat';
import Header from '../components/Header';
import Services from '../components/Services';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            turno: false,
            collapse: false,
            scrollY: 0,
            styles:{
                height:'auto',
                overflow:''
            },
            render:false
        }
        this.handleTurno = this.handleTurno.bind(this);
        this.handleCollapse = this.handleCollapse.bind(this);
        this.onLoadImage = this.onLoadImage.bind(this);
    }
    componentDidMount(){
        window.addEventListener("scroll",()=>{
            this.setState({scrollY:window.scrollY});
        });
    }
    handleTurno(){
        this.setState({turno:!this.state.turno});
        if(this.state.turno)Scroll.animateScroll.scrollTo(this.state.scrollY,{duration:0});
    }
    handleCollapse(){
        this.setState({collapse:!this.state.collapse},()=>{
            if(!this.state.collapse){
                this.setState({styles:{height:'auto',overflow:''}});
            }else{
                this.setState({styles:{height:'100vh',overflow:'hidden'}});
            }
        });
    }
    onLoadImage(){
        this.setState({render:true});
    }
    render(){
        let main = (!this.state.render) ? 'd-none' : '';
        let spinner = (!this.state.render) ? 'd-flex' : 'd-none';
        if(this.state.turno) return <Turno handleTurno={this.handleTurno}/>
        else{
            return (
                <div >
                    <div className={"vh-100 " + spinner}>
                        <div class="spinner-border m-auto" style={{width:'5rem', height:' 5rem'}} role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div className={"container-fluid p-0 " + main} style={this.state.styles}>
                        <Navbar collapse={this.state.collapse} handleCollapse={this.handleCollapse}/>
                        <Header onLoadImage={this.onLoadImage}/>
                        <Services handleTurno={this.handleTurno}/>
                        <Divisor/>
                        <Formation/>
                        <Divisor/>
                        <Contact/>
                        <Chat collapse={this.state.collapse}/>
                    </div>
                </div>
            );
        }
    }
}
export default Home;