import React from 'react';

class Alert extends React.Component{
    handleCancel(){
        let divClass = "d-flex text-center fixed-top mx-auto m-4 rounded";
        if(this.props.active) divClass += " animated bounceInDown"
        return divClass;
    }
    render(){
        if(this.props.active){
            let styles = {width:'350px',height:'50px'};
            switch(this.props.type){
                case 'success': styles.background = '#00C851';break;
                case 'error': styles.background = '#CC0000';break;
                case 'info': styles.background = '#212121';break;
                default: styles.background = 'black';break;
            }
            return (
                <div className={this.handleCancel()} style={styles}>
                    <div className="flex-1 d-flex justify-content-center align-items-center">
                        <i class="fas fa-info-circle text-white" style={{fontSize:'2rem'}}></i>
                    </div>
                    <div className="text-white d-flex justify-content-center align-items-center" style={{flex:'3'}}>
                        <p className="p-0 m-0">{this.props.message}</p>
                    </div>
                    <div className="flex-1 d-flex justify-content-center align-items-center" onClick={()=>{this.props.handleCancel()}}>
                        <i class="far fa-times-circle text-white" style={{fontSize:'2rem'}}></i>
                    </div>
                </div>
            );
        }else return <div></div>
    }
}

export default Alert;